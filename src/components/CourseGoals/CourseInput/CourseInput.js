import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [isValid, setValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) setValid(true);
    setEnteredValue(event.target.value);
  };

  const descriptionInputChangeHandler = event => {
    setEnteredDescription(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue, enteredDescription);
    setEnteredValue('');
    setEnteredDescription('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : 'black' }}>Task Name</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} style={{ borderColor: !isValid ? 'red' : 'black' }} />
      </div>
      <div className="form-control">
        <label>Description</label>
        <input type="text" onChange={descriptionInputChangeHandler} value={enteredDescription} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
