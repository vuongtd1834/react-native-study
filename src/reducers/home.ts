import {createSlice} from '@reduxjs/toolkit';

type HomeState = {state: 'loading'} | {state: 'finished'; data: object};

const initialState = {state: 'loading'};

const homeSlice = createSlice({
  name: 'homeData',
  initialState: initialState as HomeState,
  reducers: {
    fetchHome: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

const {actions, reducer} = homeSlice;
export const {fetchHome} = actions;
export default reducer;
