import {createSlice} from '@reduxjs/toolkit';
import {fetchSearchedFlights} from '../fetchCalls/fetchFlights';
import {flightImagesList} from '../../constants/constants';
import {randomNumber} from '../../utilities/utils';

export type FlightItemType = {
  id: string;
  fare: number;
  uri?: string;
  displayData: {
    source: {
      airport: {
        cityCode: string;
        cityName: string;
        terminal: string;
        airportCode: string;
        airportName: string;
        countryCode: string;
        countryName: string;
      };
      depTime: string;
    };
    airlines: {
      airlineCode: string;
      airlineName: string;
      flightNumber: string;
    }[];
    stopInfo: string;
    destination: {
      airport: {
        cityCode: string;
        cityName: string;
        terminal: string;
        airportCode: string;
        airportName: string;
        countryCode: string;
        countryName: string;
      };
      arrTime: string;
    };
    totalDuration: string;
  };
};
type searchJetsStateType = {
  searchedFlightLoading: boolean;
  searchedFlight: FlightItemType[];
  searchedFlightError: string | undefined;
};

const searchFlightState: searchJetsStateType = {
  searchedFlightLoading: false,
  searchedFlight: [],
  searchedFlightError: undefined,
};

const searchedFlightSlice = createSlice({
  name: 'searchedFlight',
  initialState: searchFlightState,
  reducers: {
    data: state => {
      state.searchedFlight = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSearchedFlights.pending, state => {
        state.searchedFlightLoading = true;
        state.searchedFlight = [];
        state.searchedFlightError = undefined;
      })
      .addCase(fetchSearchedFlights.fulfilled, (state, action) => {
        state.searchedFlightLoading = false;
        state.searchedFlight = action.payload.map((item: any) => ({
          ...item,
          uri: flightImagesList[randomNumber()],
        }));
        state.searchedFlightError = undefined;
      })
      .addCase(fetchSearchedFlights.rejected, (state, action) => {
        state.searchedFlightLoading = false;
        state.searchedFlight = [];
        state.searchedFlightError = action.error.message;
      });
  },
});
export const {data} = searchedFlightSlice.actions;
export default searchedFlightSlice.reducer;
