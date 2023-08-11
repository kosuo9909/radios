const NotificationsTab = () => {
  return (
    <div role="tabpanel">
      <form className="general-tab-form">
        <label htmlFor="name">First Name: </label>
        <input placeholder="Test" id="name"></input>
        <label htmlFor="email">Last Name: </label>
        <input placeholder="Test" id="email"></input>
        <div className="general-tab-buttons-group">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </form>
      <form className="general-tab-form">
        <label htmlFor="name">First Name: </label>
        <input placeholder="Test" id="name"></input>
        <label htmlFor="email">Last Name: </label>
        <input placeholder="Test" id="email"></input>
        <div className="general-tab-buttons-group">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </form>
      <form className="general-tab-form">
        <label htmlFor="name">First Name: </label>
        <input placeholder="Test" id="name"></input>
        <label htmlFor="email">Last Name: </label>
        <input placeholder="Test" id="email"></input>
        <div className="general-tab-buttons-group">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NotificationsTab;
