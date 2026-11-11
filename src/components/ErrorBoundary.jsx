import { Component } from 'react';

// Shows the real error instead of a blank or endlessly "Loading" page.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Screen failed to render:', error, info?.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="pl-page">
          <h2>This screen could not be opened</h2>
          <p className="pl-empty">{String(this.state.error?.message || this.state.error)}</p>
          <p className="pl-empty">Open the browser console (F12) for details, then reload.</p>
          <a href="/">Back to all modules</a>
        </div>
      );
    }
    return this.props.children;
  }
}
