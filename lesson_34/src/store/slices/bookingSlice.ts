import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotels: [],
  destinations: [],
  loading: false,
  isHotelsLoading: false,
  error: null
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setHotels: (state, action) => {
      state.hotels = action.payload;
    },
    setDestinations: (state, action) => {
      state.destinations = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setHotelsLoading: (state, action) => {
      state.isHotelsLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setHotels, setDestinations, setLoading, setError, setHotelsLoading } =
  bookingSlice.actions;

export default bookingSlice.reducer;
