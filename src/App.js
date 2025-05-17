import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import {
  Container,
  Typography,
  Paper,
  Box,
  IconButton,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function App({ toggleTheme, mode }) {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2, position: 'relative' }}>
        <IconButton
          onClick={toggleTheme}
          sx={{ position: 'absolute', top: 16, right: 16 }}
          color="inherit"
        >
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Task Manager
        </Typography>
        <Box sx={{ mt: 2 }}>
          <TaskForm />
          <TaskList />
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
