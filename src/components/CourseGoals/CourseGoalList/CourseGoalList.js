import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          Task Name: {goal.text} <br />
          Description: {goal.description}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
