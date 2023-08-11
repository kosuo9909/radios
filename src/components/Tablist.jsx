import { Link, Outlet, useLocation } from 'react-router-dom';
import './Tablist.css';
import { useRef } from 'react';
import { useEffect } from 'react';

const Tablist = () => {
  const location = useLocation();
  const linksRef = useRef([]);
  const isActive = (pathName) => {
    return pathName === location.pathname;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const currentActiveIndex = linksRef.current.findIndex(
        (link) => link.pathname === location.pathname
      );
      let newActiveIndex = currentActiveIndex;

      if (e.key === 'ArrowDown') {
        newActiveIndex =
          currentActiveIndex + 1 > linksRef.current.length - 1
            ? currentActiveIndex
            : currentActiveIndex + 1;
      } else if (e.key === 'ArrowUp') {
        newActiveIndex =
          currentActiveIndex - 1 < 0
            ? currentActiveIndex
            : currentActiveIndex - 1;
      }

      if (newActiveIndex !== currentActiveIndex) {
        if (linksRef.current[newActiveIndex]) {
          linksRef.current[newActiveIndex].click();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [location.pathname]);

  const links = [
    { to: '/general', label: 'General' },
    { to: '/appearance', label: 'Appearance' },
    { to: '/notifications', label: 'Notifications' },
    { to: '/preferences', label: 'Preferences' },
    { to: '/keyboard', label: 'Keyboard' },
  ];

  return (
    <>
      <h2>Settings</h2>
      <div
        role="tablist"
        aria-multiselectable="true"
        aria-label="Navigation Tabs"
        className="tablist-wrapper"
        aria-orientation="vertical"
      >
        {links.map((link, index) => (
          <Link
            key={link.to}
            to={link.to}
            role="tab"
            aria-selected={isActive(link.to)}
            // aria-label={`${link.label} tab ${index} of ${links.length}`}
            className={isActive(link.to) ? 'list-active' : ''}
            ref={(element) => (linksRef.current[index] = element)}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default Tablist;
