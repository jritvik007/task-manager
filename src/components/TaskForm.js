import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { TextField, Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const TaskForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <TextField
        label="New Task"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        <AddIcon/>
        Add
      </Button>
    </Box>
  );
};

export default TaskForm;
