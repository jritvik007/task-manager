import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../features/tasks/taskSlice';
import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      sx={{
        borderBottom: '1px solid #eee',
        '&:last-child': { borderBottom: 'none' },
      }}
      disablePadding
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => dispatch(deleteTask(task.id))}
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
        sx={{ ml: 1 }}
      />
      <ListItemText
        primary={
          <Typography
            sx={{
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'text.secondary' : 'text.primary',
            }}
          >
            {task.text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default TaskItem;
