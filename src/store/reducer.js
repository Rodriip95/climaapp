import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  myLocation: {},
  tempMyLocation: {},
  tempMyLocationDailys: [],
  cities: [],
};

export const locationSlice = createSlice({
  name: 'locationReducer',
  initialState,
  reducers: {
    dispatchMyLocation: (state, action) => {
      state.myLocation = action.payload;
    },
    dispatchTempMyLocation: (state, action) => {
      state.tempMyLocation = action.payload;
    },
    dispatchTempMyLocationDailys: (state, action) => {
      state.tempMyLocationDailys = action.payload;
    },
    dispatchCity: (state, action) => {
      state.cities.push(action.payload)
    },
  },
});

export const {
  dispatchMyLocation,
  dispatchTempMyLocation,
  dispatchTempMyLocationDailys,
  dispatchCity,
} = locationSlice.actions;

export default locationSlice.reducer;
