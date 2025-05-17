// src/components/TaskList.js
import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { List, Collapse } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <List>
      {tasks.map((task) => (
        <Collapse key={task.id} in timeout={300}>
          <TaskItem task={task} />
        </Collapse>
      ))}
    </List>
  );
};

export default TaskList;
