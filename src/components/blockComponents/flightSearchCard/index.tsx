import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {FlightItemType} from '../../../redux/slicers/searchedFlightSlice';
import FastImage from 'react-native-fast-image';
import Card from '../../baseComponents/card';
import {REUPEES_SYMBOL, flightImagesList} from '../../../constants/constants';
import AppText from '../../baseComponents/AppText';
import {formatDateTime} from '../../../utilities/utils';
import AppButtonCenterText from '../../baseComponents/appButtonCenterText';

type Props = {
  item: FlightItemType;
  onPress: (item: FlightItemType) => void;
};
const FlightSearchCard = ({item, onPress}: Props) => {
  const {fare, displayData} = item;
  const {source, stopInfo, totalDuration} = displayData;
  const {
    airport: {airportName, cityName, countryName},
    depTime,
  } = source;

  return (
    <Card style={styles.container}>
      <FastImage
        style={styles.image}
        source={{
          uri: flightImagesList[1],
          priority: FastImage.priority.normal,
        }}
      />
      <View style={styles.details}>
        <AppText
          style={styles.price}>{`INR ${REUPEES_SYMBOL} : ${fare}`}</AppText>
        <AppText>Location : </AppText>
        <AppText style={styles.locationInfo}>{airportName}</AppText>
        <AppText
          style={styles.locationInfo}>{`${cityName}, ${countryName}`}</AppText>
        <AppText
          style={[
            styles.stopsInfo,
            styles.padding3,
          ]}>{`No of Stops : ${stopInfo}`}</AppText>
        <AppText style={styles.padding3}>{`Departure : ${formatDateTime(
          depTime,
        )}`}</AppText>
        <AppText
          style={
            styles.padding3
          }>{`Total Flight Time : ${totalDuration}`}</AppText>
        <AppText style={styles.locationInfo}>(Estimated Time)</AppText>
      </View>
      <AppButtonCenterText
        buttonStyle={styles.button}
        label="View Details"
        onPress={() => onPress(item)}
      />
    </Card>
  );
};

export default FlightSearchCard;
