import { useEffect, useRef, useState } from 'react';
import './DialogTestVanilla.css';
import { svgStore } from './helpers/svg';
const DialogTestVanilla = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const allSettingsButtonRef = useRef();

  const handleDialogClick = () => {
    setIsDialogOpen((prevIsDialogOpen) => !prevIsDialogOpen);
  };

  useEffect(() => {
    if (isDialogOpen) {
      allSettingsButtonRef.current.focus();
    }
  }, [isDialogOpen]);
  return (
    <div className="dialog-wrapper">
      <button
        className="settings-button"
        onClick={handleDialogClick}
        aria-expanded={isDialogOpen}
      >
        Quick Settings
      </button>
      <div className="dialog-wrapper">
        <div
          role="dialog"
          className={isDialogOpen ? 'custom-dialog open' : 'custom-dialog'}
        >
          {' '}
          <div className></div>
          <p className="quick-settings-title">Quick Settings</p>
          <button ref={allSettingsButtonRef} className="all-settings-button">
            All Settings
          </button>
          <div className="quick-settings-wrapper">
            <div className="quick-settings-item-wrapper">
              {svgStore['pin']} <span>Pin to sidebar</span>
            </div>
            <div className="quick-settings-item-wrapper">
              <input id="favorite" type="checkbox"></input>
              <label htmlFor="favorite">
                {svgStore['favorite']} <span>Favourites</span>
              </label>
            </div>
            <div className="quick-settings-item-wrapper">
              <input type="checkbox" id="people"></input>
              <label htmlFor="people">
                {svgStore['people']} <span>People</span>
              </label>
            </div>
            <div className="quick-settings-item-wrapper">
              <input type="checkbox" className="invisible"></input>

              {svgStore['three dots']}
              <span>More Options</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogTestVanilla;
