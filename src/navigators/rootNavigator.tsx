import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../constants/constants';
import FlightList from '../screens/flightList';
import FlightDetails from '../screens/flightDetails';
import {FlightItemType} from '../redux/slicers/searchedFlightSlice';

export type RootStackParams = {
  [screenNames.FLIGHTLIST]: undefined;
  [screenNames.FLIGHTDETAILS]: {
    flightDetails: FlightItemType;
  };
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name={screenNames.FLIGHTLIST} component={FlightList} />
      <RootStack.Screen
        name={screenNames.FLIGHTDETAILS}
        component={FlightDetails}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
