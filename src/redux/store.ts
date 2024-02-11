import {combineReducers, configureStore} from '@reduxjs/toolkit';
import searchedFlightSlice from './slicers/searchedFlightSlice';

export const rootReducers = combineReducers({
  searchedFlights: searchedFlightSlice,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
