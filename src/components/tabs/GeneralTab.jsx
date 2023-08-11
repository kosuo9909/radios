import { useRef } from 'react';
import './GeneralTab.css';
import { useEffect } from 'react';
const GeneralTab = () => {
  const firstElementRef = useRef();

  useEffect(() => {
    firstElementRef.current.focus();
  });
  return (
    <div role="tabpanel">
      <form className="general-tab-form">
        <label htmlFor="name">Name: </label>
        <input placeholder="Test" id="name" ref={firstElementRef}></input>
        <label htmlFor="email">Email: </label>
        <input placeholder="Test" id="email"></input>
        <div className="general-tab-buttons-group">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </form>
      <form className="general-tab-form">
        <label htmlFor="name">Name: </label>
        <input placeholder="Test" id="name"></input>
        <label htmlFor="email">Email: </label>
        <input placeholder="Test" id="email"></input>
        <div className="general-tab-buttons-group">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </form>
      <form className="general-tab-form">
        <label htmlFor="name">Name: </label>
        <input placeholder="Test" id="name"></input>
        <label htmlFor="email">Email: </label>
        <input placeholder="Test" id="email"></input>
        <div className="general-tab-buttons-group">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default GeneralTab;
