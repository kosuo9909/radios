import './RadioForm.css';

const RadioForm = () => (
  <form className='radio-form'>
    <fieldset className='fieldset-radio'>
      <legend>What is your preferred color?</legend>
      <div className='input-wrapper'>
        <input type='radio' value='test' id='red' name='color'></input>
        <label htmlFor='red'>Red</label>
      </div>
      <div className='input-wrapper'>
        <input type='radio' value='test' id='blue' name='color'></input>
        <label htmlFor='blue'>Blue</label>
      </div>
      <div className='input-wrapper'>
        <input type='radio' value='test' id='green' name='color'></input>
        <label htmlFor='green'>Green</label>
      </div>
    </fieldset>
    <fieldset className='fieldset-radio'>
      <legend>What is your preferred country?</legend>
      <div className='input-wrapper'>
        <input type='radio' value='test' id='greece' name='country'></input>
        <label htmlFor='greece'>Greece</label>
      </div>
      <div className='input-wrapper'>
        <input type='radio' value='test' id='bulgaria' name='country'></input>
        <label htmlFor='bulgaria'>Bulgaria</label>
      </div>
      <div className='input-wrapper'>
        <input type='radio' value='test' id='romania' name='country'></input>
        <label htmlFor='romania'>Romania</label>
      </div>
    </fieldset>
    <fieldset className='fieldset-radio'>
      <legend>What is your preferred phone?</legend>
      <div className='input-wrapper'>
        <input type='radio' value='apple' id='apple' name='phone'></input>
        <label htmlFor='apple'>Apple</label>
      </div>
      <div className='input-wrapper'>
        <input type='radio' value='samsung' id='samsung' name='phone'></input>
        <label htmlFor='samsung'>Samsung</label>
      </div>
      <div className='input-wrapper'>
        <input type='radio' value='motorola' id='motorola' name='phone'></input>
        <label htmlFor='motorola'>Motorola</label>
      </div>
    </fieldset>
    <fieldset className='fieldset-radio'>
      <legend>What is your preferred car?</legend>
      <div className='input-wrapper'>
        <input type='radio' value='vw' id='vw' name='car'></input>
        <label htmlFor='vw'>VW</label>
      </div>
      <div className='input-wrapper'>
        <input type='radio' value='mercedes' id='mercedes' name='car'></input>
        <label htmlFor='mercedes'>Mercedes</label>
      </div>
      <div className='input-wrapper'>
        <input type='radio' value='bmw' id='bmw' name='car'></input>
        <label htmlFor='bmw'>BMW</label>
      </div>
    </fieldset>
    <fieldset className='fieldset-radio'>
      <legend>What is your preferred pet?</legend>
      <div className='input-wrapper'>
        <input type='radio' value='cat' id='cat' name='pet'></input>
        <label htmlFor='cat'>Cat</label>
      </div>
      <div className='input-wrapper'>
        <input type='radio' value='dog' id='dog' name='pet'></input>
        <label htmlFor='dog'>Dog</label>
      </div>
      <div className='input-wrapper'>
        <input type='radio' value='goldfish' id='goldfish' name='pet'></input>
        <label htmlFor='goldfish'>Goldfish</label>
      </div>
    </fieldset>
    <fieldset className='fieldset-radio'>
      <legend>What is your preferred food?</legend>
      <div className='input-wrapper'>
        <input type='radio' value='fries' id='fries' name='food'></input>
        <label htmlFor='fries'>Fries</label>
      </div>
      <div className='input-wrapper'>
        <input type='radio' value='icecream' id='icecream' name='food'></input>
        <label htmlFor='icecream'>Ice Cream</label>
      </div>
      <div className='input-wrapper'>
        <input type='radio' value='burger' id='burger' name='food'></input>
        <label htmlFor='burger'>Burger</label>
      </div>
    </fieldset>
  </form>
);

export default RadioForm;
