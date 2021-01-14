import {combineReducers} from '@reduxjs/toolkit';
import homeReducer from './home';

const rootReducer = combineReducers({
  home: homeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
