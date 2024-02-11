import moment from 'moment';
import Toast from 'react-native-simple-toast';
import {FlightItemType} from '../redux/slicers/searchedFlightSlice';

export const toastMessage = (text: string) =>
  Toast.showWithGravity(text, Toast.LONG, Toast.BOTTOM);

export const isArray = (arr: any) => Array.isArray(arr);

/**  It will return false if field has falsy values.
Because, if it returns empty string then App crash because it can render empty string. */

export const isFieldEmpty = (text: string | undefined) =>
  text && text.trim() ? false : true;

export const formatDateTime = (date: string, format = 'DD MMM, YYYY hh:mm A') =>
  moment(date).format(format);

export const getFilterData = (data: FlightItemType[]) => {
  const labels = data.flatMap(item =>
    item.displayData.airlines.map(airline => airline.airlineName),
  );
  const uniques = labels.reduce((data: any, item) => {
    data[item] = data[item]
      ? {label: item, count: data[item].count + 1}
      : {label: item, count: 1};
    return data;
  }, {});
  return Object.keys(uniques).map(item => ({
    label: `${uniques[item].label}`,
    count: uniques[item].count,
    isChecked: false,
  }));
};

export const randomNumber = (num: number = 4) => Math.ceil(Math.random() * num);
