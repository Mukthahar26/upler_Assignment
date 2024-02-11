import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {FlightItemType} from '../../../redux/slicers/searchedFlightSlice';
import {isArray} from '../../../utilities/utils';
import AppText from '../../baseComponents/AppText';
import FlightSearchCard from '../flightSearchCard';

type Props = {
  data: FlightItemType[];
  error: string | undefined;
  onPress: (item: FlightItemType) => void;
};

const SearchedFlightDetails = ({data, error, onPress}: Props) => {
  const isDataExist = isArray(data) && data.length > 0;

  const renderItem = ({item}: {item: FlightItemType}) => {
    return <FlightSearchCard onPress={onPress} item={item} />;
  };

  if (error)
    return (
      <>
        <AppText>Error while searching flighta</AppText>
        <AppText>{JSON.stringify(error)}</AppText>
      </>
    );
  return (
    <View style={styles.container}>
      {isDataExist ? (
        <FlatList
          nestedScrollEnabled
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <AppText>No Search result found. Please refind your filter</AppText>
      )}
    </View>
  );
};

export default SearchedFlightDetails;
