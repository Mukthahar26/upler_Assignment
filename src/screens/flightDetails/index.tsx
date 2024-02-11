import React from 'react';
import ContainerView from '../../components/baseComponents/ContainerView';
import ImageViewer from '../../components/baseComponents/imageViewer';
import {
  FLIGHT_ICON_URI,
  REUPEES_SYMBOL,
  screenNames,
} from '../../constants/constants';
import {RootStackParams} from '../../navigators/rootNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AppText from '../../components/baseComponents/AppText';
import styles from './styles';
import {View} from 'react-native';
import {formatDateTime, toastMessage} from '../../utilities/utils';
import UnderLine from '../../components/baseComponents/underLine';
import {FlightIcon} from '../../utilities/iconPaths';
import Card from '../../components/baseComponents/card';
import EnquireInputs from '../../components/blockComponents/enquireInputs';

type Props = NativeStackScreenProps<RootStackParams, screenNames.FLIGHTDETAILS>;

const FlightDetails = ({route}: Props) => {
  const {fare, displayData, uri} = route.params.flightDetails;
  const {source, airlines, stopInfo, destination, totalDuration} = displayData;
  const {
    airport: {airportName, cityName, countryName},
    depTime,
  } = source;
  const {
    airport: {
      airportName: desAirportName,
      cityName: desCityName,
      countryName: desCountryName,
    },
    arrTime,
  } = destination;

  const onPress = (form: any) => {
    toastMessage('Thank you for choosing our service');
  };
  return (
    <ContainerView>
      <ImageViewer uri={uri ? uri : ''} />
      <AppText
        style={styles.price}>{`INR ${REUPEES_SYMBOL} : ${fare}`}</AppText>
      <Card style={styles.card}>
        <View style={styles.stopInfo}>
          <AppText>{stopInfo}</AppText>
          <UnderLine style={styles.underline1} />
          <AppText>{totalDuration}</AppText>
        </View>
        <View style={styles.TravelDetails}>
          <View style={styles.col1}>
            <AppText style={styles.date}>{formatDateTime(depTime)}</AppText>
            <AppText>{airportName}</AppText>
            <AppText>{cityName}</AppText>
            <AppText>{countryName}</AppText>
          </View>
          <UnderLine uri={FLIGHT_ICON_URI} style={styles.underline} />
          <View style={[styles.col1, styles.col2]}>
            <AppText style={[styles.rightLabel, styles.date]}>
              {formatDateTime(depTime)}
            </AppText>
            <AppText style={styles.rightLabel}>{desAirportName}</AppText>
            <AppText style={styles.rightLabel}>{desCityName}</AppText>
            <AppText style={styles.rightLabel}>{desCountryName}</AppText>
          </View>
        </View>
      </Card>
      <Card style={styles.airlinesDetails}>
        <AppText style={styles.airlinesLabel}>AIRLINES</AppText>
        {airlines &&
          airlines.map(item => {
            const {airlineName, flightNumber, airlineCode} = item;
            return (
              <View style={styles.airline}>
                <AppText
                  style={styles.italic}>{`No : ${flightNumber}`}</AppText>
                <AppText
                  style={styles.italic}>{`Name : ${airlineName}`}</AppText>
                <AppText
                  style={styles.italic}>{`Code : ${airlineCode}`}</AppText>
              </View>
            );
          })}
      </Card>
      <EnquireInputs onPress={onPress} />
    </ContainerView>
  );
};

export default FlightDetails;
