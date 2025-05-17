import { createSlice } from '@reduxjs/toolkit';

const loadTasks = () => {
  try {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  } catch {
    return [];
  }
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: loadTasks(),
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;

export const persistTasksMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  const tasks = storeAPI.getState().tasks;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return result;
};

export default taskSlice.reducer;

