import { callsItemsMock } from '../storage/callsItemsMock';
import { composerItems } from '../storage/composerItemsMock';
import { messageItemsMock } from '../storage/messageItemsMock';
import './UnorderedList.css';

const UnorderedList = () => {
  return (
    <div className='unordered-list-wrapper'>
      <h2>Composer</h2>

      <ul tabIndex={0} className='ul-wrapper' id='ul-wrapper' title='Composer'>
        {Object.keys(composerItems).map((item) => (
          <>
            <li className='span-wrapper'>
              <span>{item}</span>
              <span>{composerItems[item]}</span>
            </li>
          </>
        ))}
      </ul>

      <h2>Messages</h2>
      <ul tabIndex={0} className='ul-wrapper' title='Messages'>
        {Object.keys(messageItemsMock).map((item) => (
          <>
            <li className='span-wrapper'>
              <span>{item}</span>
              <span>{messageItemsMock[item]}</span>
            </li>
          </>
        ))}
      </ul>
      <h2>Calls</h2>
      <ul tabIndex={0} className='ul-wrapper' title='Calls'>
        {Object.keys(callsItemsMock).map((item) => (
          <>
            <li className='span-wrapper'>
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
