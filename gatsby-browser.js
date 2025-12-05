// Gatsby browser APIs to control scroll behavior
exports.onClientEntry = () => {
  if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
    try {
      window.history.scrollRestoration = 'manual';
    } catch (e) {
      // some browsers may throw; ignore
    }
  }
};

exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (typeof window !== 'undefined') {
    // minimal production behavior: ensure page starts at top after navigation
    try {
      const docEl = document.documentElement;
      const prev = docEl && docEl.style ? docEl.style.scrollBehavior : '';
      if (docEl && docEl.style) docEl.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      if (typeof requestAnimationFrame !== 'undefined') requestAnimationFrame(() => window.scrollTo(0, 0));
      if (docEl && docEl.style) docEl.style.scrollBehavior = prev || '';
    } catch (e) {
      // ignore
    }
  }
};
