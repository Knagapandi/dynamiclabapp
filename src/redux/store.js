
import { configureStore } from '@reduxjs/toolkit';
import labsReducer from './labsSlice';

const store = configureStore({
  reducer: {
    labs: labsReducer,
  },
});

export default store;
