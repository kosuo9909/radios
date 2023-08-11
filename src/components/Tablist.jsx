import { Link, useLocation } from 'react-router-dom';
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
        role='tablist'
        aria-label='Navigation Tabs'
        className='tablist-wrapper'
      >
        <Link
          to='/general'
          aria-selected={isActive('/general')}
          className={isActive('/general') ? 'list-active' : ''}
        >
          General
        </Link>
        <Link to='/appearance'>Appearance</Link>
        <Link to='/notifications'>Notifications</Link>
        <Link to='/preferences'>Preferences</Link>
        <Link to='/keyboard'>Keyboard</Link>
      </div>
    </>
  );
};

export default Tablist;
