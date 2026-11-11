#!/usr/bin/env python3
"""
One-time converter: legacy static pages -> React components that render the same markup.

Input : public/**/*.html  (the original Aviv PMS pages, from PMS_v15.zip)
Output: src/screens/<module>/<folder>[/<page>].jsx   one component per page
        src/routes.generated.js                      route table used by the router

Converted per page:
  * body markup -> JSX (class->className, for->htmlFor, style strings -> objects,
    SVG tag/attribute case, void tags self-closed, comments dropped)
  * internal links -> <Link to="/route"> when the target page is converted, so
    navigation stays inside the React app; other links stay plain <a>
  * <style> blocks and stylesheet <link>s -> loaded by <ScreenShell> while mounted

Not converted (see README):
  * legacy page <script>s and inline on* handlers (behaviour is not ported yet)
  * the per-employee copies u-emp-*.html (data duplicates of lg-03-user-form)

Converted HTML files are deleted from public/ afterwards (unless --keep-html), so
the React route is the one that answers. Re-running needs the original zip again.

Usage (from project root):
  python3 scripts/convert_legacy.py --keep-html   convert, keep legacy HTML (for re-runs)
  python3 scripts/convert_legacy.py --strip       delete the legacy HTML that now has a React page
  python3 scripts/convert_legacy.py               convert and delete (needs the original site in public/)
"""
import json
import os
import posixpath
import re
import shutil
import sys
from html import unescape
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
SOURCE = Path(os.environ.get("LEGACY_SRC", PUBLIC))  # where the original pages are read from
OUT = ROOT / "src" / "screens"
ROUTES_FILE = ROOT / "src" / "routes.generated.js"

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link",
        "meta", "param", "source", "track", "wbr"}
DROP_TAGS = {"script", "noscript", "template", "title", "meta", "link", "base"}
BOOL_ATTRS = {"allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls",
              "default", "defer", "disabled", "formnovalidate", "hidden", "inert",
              "itemscope", "loop", "multiple", "muted", "novalidate", "open", "playsinline",
              "readonly", "required", "reversed", "selected"}
ATTR_MAP = {
    "class": "className", "for": "htmlFor", "tabindex": "tabIndex", "colspan": "colSpan",
    "rowspan": "rowSpan", "maxlength": "maxLength", "minlength": "minLength",
    "readonly": "readOnly", "autocomplete": "autoComplete", "autofocus": "autoFocus",
    "novalidate": "noValidate", "enctype": "encType", "accesskey": "accessKey",
    "srcset": "srcSet", "crossorigin": "crossOrigin", "frameborder": "frameBorder",
    "allowfullscreen": "allowFullScreen", "contenteditable": "contentEditable",
    "spellcheck": "spellCheck", "cellpadding": "cellPadding", "cellspacing": "cellSpacing",
    "charset": "charSet", "http-equiv": "httpEquiv", "datetime": "dateTime",
    "hreflang": "hrefLang", "inputmode": "inputMode", "playsinline": "playsInline",
    "xlink:href": "xlinkHref", "viewbox": "viewBox", "preserveaspectratio": "preserveAspectRatio",
    "gradientunits": "gradientUnits", "gradienttransform": "gradientTransform",
    "patternunits": "patternUnits", "clippathunits": "clipPathUnits",
    "markerwidth": "markerWidth", "markerheight": "markerHeight", "refx": "refX",
    "refy": "refY", "textlength": "textLength", "startoffset": "startOffset",
    "stddeviation": "stdDeviation", "pathlength": "pathLength",
    "lengthadjust": "lengthAdjust", "maskunits": "maskUnits",
    "formaction": "formAction", "formnovalidate": "formNoValidate", "formenctype": "formEncType",
    "formmethod": "formMethod", "formtarget": "formTarget", "popovertarget": "popoverTarget", "popovertargetaction": "popoverTargetAction",
    "basefrequency": "baseFrequency", "numoctaves": "numOctaves",
    "xchannelselector": "xChannelSelector", "ychannelselector": "yChannelSelector",
    "filterunits": "filterUnits", "primitiveunits": "primitiveUnits", "edgemode": "edgeMode",
    "kernelmatrix": "kernelMatrix", "kernelunitlength": "kernelUnitLength",
    "specularconstant": "specularConstant", "specularexponent": "specularExponent",
    "surfacescale": "surfaceScale", "diffuseconstant": "diffuseConstant",
    "lightingcolor": "lightingColor", "limitingconeangle": "limitingConeAngle",
    "pointsatx": "pointsAtX", "pointsaty": "pointsAtY", "pointsatz": "pointsAtZ",
    "markerunits": "markerUnits", "calcmode": "calcMode", "keypoints": "keyPoints",
    "keysplines": "keySplines", "keytimes": "keyTimes", "repeatcount": "repeatCount",
    "repeatdur": "repeatDur", "attributename": "attributeName", "attributetype": "attributeType",
    "stitchtiles": "stitchTiles", "tablevalues": "tableValues", "intercept": "intercept",
    "amplitude": "amplitude", "exponent": "exponent", "operator": "operator", "order": "order",
    "targetx": "targetX", "targety": "targetY", "dx": "dx", "dy": "dy", "result": "result",
    "in2": "in2", "mode": "mode", "in": "in", "k1": "k1", "k2": "k2", "k3": "k3", "k4": "k4",
    "vectoreffect": "vectorEffect", "paintorder": "paintOrder", "shaperendering": "shapeRendering",
    "textrendering": "textRendering", "imagerendering": "imageRendering", "clippathunits": "clipPathUnits",
}
SVG_TAG_MAP = {
    "clippath": "clipPath", "lineargradient": "linearGradient",
    "radialgradient": "radialGradient", "foreignobject": "foreignObject",
    "textpath": "textPath", "fegaussianblur": "feGaussianBlur", "feoffset": "feOffset",
    "feblend": "feBlend", "femerge": "feMerge", "femergenode": "feMergeNode",
    "feflood": "feFlood", "fecolormatrix": "feColorMatrix", "fedropshadow": "feDropShadow",
    "fecomposite": "feComposite",
}
JSX_PASS = {"to", "defaultValue", "defaultChecked"}  # extras already in JSX form


def jdump(value):
    return json.dumps(value, ensure_ascii=False)


def pascal(s):
    return "".join(p[:1].upper() + p[1:] for p in re.split(r"[-_]", s) if p)


def camel_hyphen(name):
    if name.startswith(("data-", "aria-")) or "-" not in name:
        return name
    return re.sub(r"-([a-z])", lambda m: m.group(1).upper(), name)


def attr_name(name):
    if name.startswith("on"):
        return None  # inline handlers are dropped
    return ATTR_MAP.get(name) or camel_hyphen(name)


def split_css_decls(text):
    parts, depth, cur = [], 0, ""
    for ch in text:
        if ch == "(":
            depth += 1
        elif ch == ")":
            depth -= 1
        if ch == ";" and depth == 0:
            parts.append(cur)
            cur = ""
        else:
            cur += ch
    if cur.strip():
        parts.append(cur)
    return parts


def style_object(value):
    items = []
    for decl in split_css_decls(value):
        if ":" not in decl:
            continue
        key, val = (x.strip() for x in decl.split(":", 1))
        if not key or not val:
            continue
        if not key.startswith("--"):
            key = re.sub(r"-([a-z])", lambda m: m.group(1).upper(), key)
        items.append(f"{jdump(key)}: {jdump(val)}")
    return "{{" + ", ".join(items) + "}}"


class Node:
    __slots__ = ("tag", "attrs", "children")

    def __init__(self, tag, attrs):
        self.tag, self.attrs, self.children = tag, attrs, []


class Text:
    __slots__ = ("data",)

    def __init__(self, data):
        self.data = data


class TreeBuilder(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("#root", [])
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node(tag, attrs))

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                return

    def handle_data(self, data):
        self.stack[-1].children.append(Text(data))


def find(node, tag):
    if isinstance(node, Node):
        if node.tag == tag:
            return node
        for c in node.children:
            r = find(c, tag)
            if r is not None:
                return r
    return None


def text_of(node):
    return "".join(c.data if isinstance(c, Text) else text_of(c) for c in node.children)


def collect_styles(node, acc):
    if isinstance(node, Node):
        if node.tag == "style":
            acc.append(text_of(node))
        for c in node.children:
            collect_styles(c, acc)
    return acc


def collect_stylesheets(node, acc):
    if isinstance(node, Node):
        if node.tag == "link":
            a = dict(node.attrs)
            if (a.get("rel") or "").lower() == "stylesheet" and a.get("href"):
                acc.append({"href": a["href"], "media": a.get("media")})
        for c in node.children:
            collect_stylesheets(c, acc)
    return acc


def normalise_route(p):
    """'/a/b/' or '/a/b/index.html' or '/a/b.html' -> '/a/b' ('/' for the root)."""
    if p.endswith("/index.html"):
        p = p[: -len("index.html")]
    elif p.endswith(".html"):
        p = p[: -len(".html")]
    p = p.rstrip("/")
    return p or "/"


def resolve_internal(href, base_dir, routes):
    """Route for a same-app href if that page is converted, else None."""
    if not href or href.startswith(("#", "//", "mailto:", "tel:", "javascript:", "http:", "https:")):
        return None
    if "#" in href:
        return None
    path = href.split("?")[0]
    if not path:
        return None
    full = path if path.startswith("/") else posixpath.normpath(posixpath.join(base_dir, path))
    if not full.startswith("/"):
        full = "/" + full
    full = normalise_route(full)
    return full if full in routes else None


class Converter:
    def __init__(self, routes, base_dir):
        self.routes = routes
        self.base_dir = base_dir
        self.uses_link = False
        self.dropped_scripts = []

    def attrs_jsx(self, attrs, extra):
        parts = []
        seen = set()
        for name, value in list(attrs) + extra:
            # HTML keeps the first of a repeated attribute; React would reject the duplicate.
            if name.lower() in seen:
                continue
            seen.add(name.lower())
            if name in JSX_PASS:
                if value == "__true__":
                    parts.append(f"{name}={{true}}")
                else:
                    parts.append(f"{name}={{{jdump(value)}}}")
                continue
            name = name.lower()
            if name == "style":
                if value is not None:
                    parts.append(f"style={style_object(value)}")
                continue
            jname = attr_name(name)
            if jname is None:
                continue
            if value is None:
                parts.append(f"{jname}={{true}}" if name in BOOL_ATTRS else f'{jname}=""')
            elif '"' in value or "\n" in value or "{" in value or "}" in value:
                parts.append(f"{jname}={{{jdump(value)}}}")
            else:
                parts.append(f'{jname}="{value}"')
        return parts

    def text_jsx(self, data):
        if not data.strip():
            return None if "\n" in data else '{" "}'
        t = re.sub(r"\s+", " ", data)
        lead = data[: len(data) - len(data.lstrip())]
        trail = data[len(data.rstrip()):]
        if "\n" in lead:
            t = t.lstrip()
        if "\n" in trail:
            t = t.rstrip()
        return "{" + jdump(t) + "}"

    def element(self, node, depth):
        ind = "  " * depth
        tag = node.tag
        if tag in DROP_TAGS:
            if tag == "script" and dict(node.attrs).get("src"):
                self.dropped_scripts.append(dict(node.attrs)["src"])
            return []
        if tag == "style":
            return []  # collected separately and injected by ScreenShell

        attrs = list(node.attrs)
        children = list(node.children)
        extra = []
        jtag = SVG_TAG_MAP.get(tag, tag)

        if tag == "a":
            href = dict(attrs).get("href")
            target = resolve_internal(href, self.base_dir, self.routes) if href else None
            if target is not None:
                self.uses_link = True
                jtag = "Link"
                attrs = [(k, v) for k, v in attrs if k.lower() != "href"]
                extra.append(("to", target))

        if tag == "select":
            chosen = [c for c in children if isinstance(c, Node) and c.tag == "option"
                      and any(k.lower() == "selected" for k, _ in c.attrs)]
            if chosen:
                val = dict(chosen[0].attrs).get("value")
                extra.append(("defaultValue", val if val is not None else text_of(chosen[0]).strip()))
                for o in chosen:
                    o.attrs = [(k, v) for k, v in o.attrs if k.lower() != "selected"]

        if tag == "input":
            itype = (dict(attrs).get("type") or "text").lower()
            if itype in ("checkbox", "radio"):
                if any(k.lower() == "checked" for k, _ in attrs):
                    extra.append(("defaultChecked", "__true__"))
                attrs = [(k, v) for k, v in attrs if k.lower() != "checked"]
            elif any(k.lower() == "value" for k, _ in attrs):
                extra.append(("defaultValue", dict(attrs)["value"]))
                attrs = [(k, v) for k, v in attrs if k.lower() != "value"]

        if tag == "textarea":
            extra.append(("defaultValue", text_of(node)))
            children = []

        open_tag = f"<{jtag}"
        attr_parts = self.attrs_jsx(attrs, extra)
        if attr_parts:
            open_tag += " " + " ".join(attr_parts)

        if tag in VOID:
            return [f"{ind}{open_tag} />"]

        inner = []
        for c in children:
            if isinstance(c, Text):
                j = self.text_jsx(c.data)
                if j:
                    inner.append(f"{'  ' * (depth + 1)}{j}")
            else:
                inner.extend(self.element(c, depth + 1))

        if not inner:
            return [f"{ind}{open_tag} />"]
        if len(inner) == 1 and inner[0].lstrip().startswith("{") and "\n" not in inner[0]:
            return [f"{ind}{open_tag}>{inner[0].strip()}</{jtag}>"]
        return [f"{ind}{open_tag}>", *inner, f"{ind}</{jtag}>"]


def page_meta(html, rel):
    """Title and screen code for one legacy page."""
    m = re.search(r"<title>([^<]*)</title>", html, re.I)
    title = unescape(m.group(1) if m else rel.stem).split(" · ")[0].strip()
    c = re.search(r'data-code="([^"]+)"', html[:4000], re.I)
    code = c.group(1) if c else ""
    if not code:
        stem = rel.parent.name if rel.name == "index.html" else rel.stem
        mm = re.match(r"([a-z]+-[a-z0-9]+)", stem)
        code = mm.group(1).upper() if mm else ""
    return title, code


def discover_pages():
    pages = []
    for f in sorted(SOURCE.rglob("*.html")):
        rel = f.relative_to(SOURCE)
        if len(rel.parts) < 2 or rel.parts[0] in {"assets", "css", "js"}:
            continue
        if rel.name.startswith("u-emp-"):  # per-employee copies, not converted
            continue
        pages.append(rel)
    return pages


def strip_converted():
    """Delete legacy HTML only where a React page was generated for it (run after a convert with --keep-html)."""
    removed = 0
    for rel in discover_pages():
        jsx = OUT / Path(*normalise_route("/" + rel.as_posix()).strip("/").split("/")).with_suffix(".jsx")
        if jsx.exists():
            (PUBLIC / rel).unlink()
            removed += 1
    print(f"Removed {removed} converted legacy HTML files from public/.")


def main():
    if "--strip" in sys.argv:
        return strip_converted()
    keep_html = "--keep-html" in sys.argv
    pages = discover_pages()
    if not pages:
        sys.exit("No legacy HTML found in public/. Re-extract the original zip into public/ first.")

    def route_of(rel):
        return normalise_route("/" + rel.as_posix())

    routes = {route_of(p) for p in pages} | {"/"}  # "/" is the React launcher

    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)
    used_names, table = set(), []

    for rel in pages:
        html = (SOURCE / rel).read_text(encoding="utf-8", errors="replace")
        route = route_of(rel)
        is_screen = rel.name == "index.html"
        parent = rel.parent.as_posix()
        base_dir = "/" if parent == "." else "/" + parent + "/"

        tb = TreeBuilder()
        tb.feed(html)
        tb.close()
        head = find(tb.root, "head") or Node("head", [])
        body = find(tb.root, "body") or tb.root

        title, code = page_meta(html, rel)
        sheets = []
        for s in collect_stylesheets(head, []):
            href = s["href"].split("?")[0]
            if not href.endswith(".css"):
                continue
            if not href.startswith(("/", "http", "//")):
                href = posixpath.normpath(posixpath.join(base_dir, href))
            sheets.append({"href": href, "media": s["media"]})
        inline_css = "\n".join(collect_styles(head, []) + collect_styles(body, []))

        conv = Converter(routes, base_dir)
        body_attrs = list(body.attrs) if body is not tb.root else []
        cls = dict(body_attrs).get("class")
        body_node = Node("div", [(k, v) for k, v in body_attrs if k.lower() != "class"] +
                         [("class", "legacy-body" + (" " + cls if cls else ""))])
        body_node.children = list(body.children)
        jsx_lines = conv.element(body_node, 3)

        parts = route.strip("/").split("/")
        name = "".join(pascal(p) for p in parts)
        if name in used_names:
            name += str(len(used_names))
        used_names.add(name)

        out_file = OUT / Path(*parts).with_suffix(".jsx")
        out_file.parent.mkdir(parents=True, exist_ok=True)
        up = "../" * len(parts)

        header = [
            f"// GENERATED from public/{rel.as_posix()} by scripts/convert_legacy.py.",
            "// Markup converted to JSX. Legacy page scripts and inline on* handlers are not ported yet.",
        ]
        if conv.dropped_scripts:
            header.append("// Legacy scripts not ported: " + ", ".join(conv.dropped_scripts))
        imports = []
        if conv.uses_link:
            imports.append(f"import {{ Link }} from '{up}lib/router.jsx';")
        imports.append(f"import ScreenShell from '{up}components/ScreenShell.jsx';")

        inline_js = jdump(inline_css) if inline_css.strip() else "null"
        code_js = "\n".join(header + imports) + f"""

const SHEETS = {json.dumps(sheets, indent=2, ensure_ascii=False)};
const INLINE_CSS = {inline_js};

export default function {name}() {{
  return (
    <ScreenShell title={jdump(title)} sheets={{SHEETS}} inlineCss={{INLINE_CSS}}>
{chr(10).join(jsx_lines)}
    </ScreenShell>
  );
}}
"""
        out_file.write_text(code_js, encoding="utf-8")
        table.append({
            "path": route,
            "file": out_file.relative_to(OUT).as_posix(),
            "kind": "screen" if is_screen else "page",
            "module": parts[0],
            "code": code,
            "title": title,
        })
        if not keep_html and SOURCE == PUBLIC:
            (PUBLIC / rel).unlink()

    entries = []
    for t in sorted(table, key=lambda x: x["path"]):
        entries.append(
            "  { path: %s, kind: %s, module: %s, code: %s, title: %s, load: () => import(%s), component: lazy(() => import(%s)) }"
            % (jdump(t["path"]), jdump(t["kind"]), jdump(t["module"]), jdump(t["code"]),
               jdump(t["title"]), jdump("./screens/" + t["file"]), jdump("./screens/" + t["file"]))
        )
    ROUTES_FILE.write_text(
        "// GENERATED by scripts/convert_legacy.py. Do not edit by hand.\n"
        "import { lazy } from 'react';\n\n"
        "export const routes = [\n" + ",\n".join(entries) + "\n];\n\n"
        "// Start downloading a screen's code before the person clicks it.\n"
        "export function prefetch(path) {\n"
        "  const key = path.replace(/\\/+$/, '') || '/';\n"
        "  const r = routes.find((x) => x.path.replace(/\\/+$/, '') === key);\n"
        "  if (r) r.load();\n"
        "}\n",
        encoding="utf-8",
    )
    screens = sum(1 for t in table if t["kind"] == "screen")
    print(f"Converted {len(table)} pages: {screens} screens + {len(table) - screens} tab/step pages.")


if __name__ == "__main__":
    main()
