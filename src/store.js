import { configureStore } from '@reduxjs/toolkit';
import taskReducer, { persistTasksMiddleware } from './features/tasks/taskSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistTasksMiddleware),
});

export default store;
