import { useMemo, useState } from 'react';
import { Link } from '../lib/router.jsx';
import { routes } from '../routes.generated.js';

export default function Launcher() {
  const [query, setQuery] = useState('');

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const screens = routes.filter((r) => r.kind === 'screen');
    const list = q
      ? screens.filter((r) => `${r.code} ${r.title} ${r.module}`.toLowerCase().includes(q))
      : screens;
    const map = new Map();
    for (const r of list) {
      if (!map.has(r.module)) map.set(r.module, []);
      map.get(r.module).push(r);
    }
    return [...map.entries()];
  }, [query]);

  return (
    <div className="pl-page">
      <div className="pl-head">
        <h1>Aviv PMS · Modules</h1>
        <input
          className="pl-search"
          type="search"
          placeholder="Search by screen code or name…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="pl-count">{routes.filter((r) => r.kind === 'screen').length} screens</span>
      </div>

      {groups.length === 0 && <p className="pl-empty">No screens match “{query}”.</p>}

      {groups.map(([module, items]) => (
        <section className="pl-module" key={module}>
          <h2>{module}</h2>
          <ul className="pl-grid">
            {items.map((r) => (
              <li key={r.path}>
                <Link to={r.path.replace(/\/+$/, '')} className="pl-card">
                  <span className="pl-code">{r.code}</span>
                  <span className="pl-title">{r.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
