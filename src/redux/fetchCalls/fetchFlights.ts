import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchGetRequest} from '../../axios/axiosInstance';
import Config from 'react-native-config';
import {FETCH_FLIGHTS} from '../../axios/endpoints';

export const fetchSearchedFlights = createAsyncThunk(
  `searchedFlightSlice/${FETCH_FLIGHTS}`,
  async () => {
    const response = await fetchGetRequest(
      `${Config.BASE_URL}/${FETCH_FLIGHTS}`,
    );
    return response.data.data.result;
  },
);
