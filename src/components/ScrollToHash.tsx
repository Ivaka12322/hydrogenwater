import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's no hash, scroll to the top of the page
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Attempt to find the element with the matching ID
    const id = hash.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      // Use a small timeout to ensure the DOM has rendered if navigating from another page
      const timeoutId = setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [pathname, hash]);

  return null;
}
