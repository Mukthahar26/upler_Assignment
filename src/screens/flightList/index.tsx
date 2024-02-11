import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import BGImageWithDetails from '../../components/blockComponents/bgImageWithDetails';
import {flightImagesList, screenNames} from '../../constants/constants';
import SearchedFlightDetails from '../../components/blockComponents/searchedFlightDetails';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import ContainerView from '../../components/baseComponents/ContainerView';
import {fetchSearchedFlights} from '../../redux/fetchCalls/fetchFlights';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigators/rootNavigator';
import {FlightItemType} from '../../redux/slicers/searchedFlightSlice';
import AppText from '../../components/baseComponents/AppText';

type Props = NativeStackScreenProps<RootStackParams, screenNames.FLIGHTLIST>;

const FlightList = ({navigation}: Props) => {
  const AppDispatch = useAppDispatch();
  const {searchedFlight, searchedFlightError, searchedFlightLoading} =
    useAppSelector(state => state.searchedFlights);

  useEffect(() => {
    AppDispatch(fetchSearchedFlights());
  }, []);

  const navigateTo = (item: FlightItemType) => {
    navigation.navigate(screenNames.FLIGHTDETAILS, {
      flightDetails: item,
    });
  };

  return (
    <ContainerView
      isBorderPaddingRequired={false}
      isHeaderRequired={false}
      loading={searchedFlightLoading}>
      {/* <BGImageWithDetails
        url={flightImagesList[3]}
        heading="Search List"
        description="The new Generation of Private Jet"
      /> */}
      <SearchedFlightDetails
        onPress={navigateTo}
        error={searchedFlightError}
        data={searchedFlight}
      />
    </ContainerView>
  );
};

export default FlightList;
