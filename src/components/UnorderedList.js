import { callsItemsMock } from '../storage/callsItemsMock';
import { composerItems } from '../storage/composerItemsMock';
import { messageItemsMock } from '../storage/messageItemsMock';
import './UnorderedList.css';

const UnorderedList = () => {
  return (
    <div className='unordered-list-wrapper'>
      <h2
        aria-label={`Composer is related to a list of ${
          Object.keys(composerItems).length
        } elements.`}
        tabIndex={0}
      >
        Composer
      </h2>

      <ul className='ul-wrapper'>
        {Object.keys(composerItems).map((item) => (
          <>
            <li className='span-wrapper' tabIndex={0}>
              <span>{item}</span>
              <span>{composerItems[item]}</span>
            </li>
          </>
        ))}
      </ul>

      <h2
        aria-label={`Messages is related to a list of ${
          Object.keys(messageItemsMock).length
        } elements.`}
        tabIndex={0}
      >
        Messages
      </h2>
      <ul className='ul-wrapper'>
        {Object.keys(messageItemsMock).map((item) => (
          <>
            <li className='span-wrapper' tabIndex={0}>
              <span>{item}</span>
              <span>{messageItemsMock[item]}</span>
            </li>
          </>
        ))}
      </ul>
      <h2
        aria-label={`Composer is related to a list of ${
          Object.keys(callsItemsMock).length
        } elements.`}
        tabIndex={0}
      >
        Calls
      </h2>
      <ul className='ul-wrapper'>
        {Object.keys(callsItemsMock).map((item) => (
          <>
            <li className='span-wrapper' tabIndex={0}>
              <span>{item}</span>
              <span>{callsItemsMock[item]}</span>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default UnorderedList;
