import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../views/pages/Salary/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});