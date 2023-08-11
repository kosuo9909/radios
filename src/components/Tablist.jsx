import { Link, Outlet, useLocation } from 'react-router-dom';
import './Tablist.css';

const Tablist = () => {
  const location = useLocation();
  const isActive = (pathName) => {
    return pathName === location.pathname;
  };
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
        <Link
          to="/general"
          role="tab"
          aria-selected={isActive('/general')}
          className={isActive('/general') ? 'list-active' : ''}
        >
          General
        </Link>
        <Link
          to="/appearance"
          role="tab"
          aria-selected={isActive('/appearance')}
          className={isActive('/appearance') ? 'list-active' : ''}
        >
          Appearance
        </Link>
        <Link
          to="/notifications"
          role="tab"
          aria-selected={isActive('/notifications')}
          className={isActive('/notifications') ? 'list-active' : ''}
        >
          Notifications
        </Link>
        <Link
          to="/preferences"
          role="tab"
          aria-selected={isActive('/preferences')}
          className={isActive('/preferences') ? 'list-active' : ''}
        >
          Preferences
        </Link>
        <Link
          to="/keyboard"
          role="tab"
          aria-selected={isActive('/keyboard')}
          className={isActive('/keyboard') ? 'list-active' : ''}
        >
          Keyboard
        </Link>
      </div>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default Tablist;
