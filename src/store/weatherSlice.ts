import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface WeatherData {
  city: string;
  forecast: any[];
  loading: boolean;
  error: string | null;
}

const initialState: WeatherData = {
  city: '',
  forecast: [],
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess(state, action: PayloadAction<any[]>) {
      state.forecast = action.payload;
      state.loading = false;
    },
    fetchWeatherFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
  },
});

export const {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
  setCity,
} = weatherSlice.actions;

export default weatherSlice.reducer;
