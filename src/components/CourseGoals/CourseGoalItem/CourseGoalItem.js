import React from 'react';
import { MdOutlineDelete } from "react-icons/md";
import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item">
      {props.children}
      <MdOutlineDelete onClick={deleteHandler}  size={20} />
    </li>
  );
};

export default CourseGoalItem;
