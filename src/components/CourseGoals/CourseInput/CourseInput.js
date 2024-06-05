import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setValid]=useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0)setValid(true)
    setEnteredValue(event.target.value);
  };


  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setValid(false)
      return;}
    props.onAddGoal(enteredValue);
    setEnteredValue("")
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValid?'red':'black'}}>Task Name</label>
        <input type="text" onChange={goalInputChangeHandler} style={{borderColor: !isValid?'red':'black'}} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
