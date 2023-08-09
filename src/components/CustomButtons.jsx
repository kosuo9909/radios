import './CustomButtons.css';
import { svgStore } from './helpers/svg';

const CustomButtons = () => {
  return (
    <div className="custom-button-wrapper">
      <button className="custom-button">
        {svgStore['earth']}
        <div className="custom-button-item-wrapper">
          <span className="font-weight-bold">Public</span>
          <span className="grey-medium">
            Open space for anyone, best for communities
          </span>
        </div>
      </button>
      <button className="custom-button">
        {svgStore['private']}
        <div className="custom-button-item-wrapper">
          <span className="font-weight-bold">Private</span>
          <span className="grey-medium">
            Invite only, best for yourself or teams
          </span>
        </div>
      </button>
    </div>
  );
};

export default CustomButtons;
