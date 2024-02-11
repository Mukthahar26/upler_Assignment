import React, {useEffect, useState} from 'react';
import BGImageWithDetails from '../../components/blockComponents/bgImageWithDetails';
import {
  flightImagesList,
  screenNames,
  sortingEnums,
} from '../../constants/constants';
import SearchedFlightDetails from '../../components/blockComponents/searchedFlightDetails';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import ContainerView from '../../components/baseComponents/ContainerView';
import {fetchSearchedFlights} from '../../redux/fetchCalls/fetchFlights';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigators/rootNavigator';
import {FlightItemType} from '../../redux/slicers/searchedFlightSlice';
import Filters from '../../components/blockComponents/filter';
import {getFilterData, isArray} from '../../utilities/utils';
import {checkList} from '../../components/blockComponents/filter/props';

type Props = NativeStackScreenProps<RootStackParams, screenNames.FLIGHTLIST>;

const FlightList = ({navigation}: Props) => {
  const AppDispatch = useAppDispatch();

  const [filterList, setFilterList] = useState<checkList[]>([]);
  const [sorting, setSorting] = useState<number>(sortingEnums.NORMAL);
  const [searchedFlightsList, setSearchedFlightList] = useState<
    FlightItemType[]
  >([]);
  const {searchedFlight, searchedFlightError, searchedFlightLoading} =
    useAppSelector(state => state.searchedFlights);

  useEffect(() => {
    AppDispatch(fetchSearchedFlights());
  }, []);

  useEffect(() => {
    if (isArray(searchedFlight) && searchedFlight.length) {
      const filterData = getFilterData(searchedFlight);
      setSearchedFlightList(searchedFlight);
      if (filterData) setFilterList(filterData);
    }
  }, [searchedFlight]);

  useEffect(() => {
    filterAndSorting();
  }, [filterList, sorting]);

  const filterAndSorting = () => {
    const filterChecked = filterList.some(item => item.isChecked);
    if (filterChecked && sorting)
      setSearchedFlightList(sortingData(applyingFilter(searchedFlight)));
    else if (filterChecked)
      setSearchedFlightList(applyingFilter(searchedFlight));
    else if (sorting) setSearchedFlightList(sortingData(searchedFlight));
  };

  const applyingFilter = (filterData: FlightItemType[]) => {
    const labels = filterList
      .filter(item => item.isChecked)
      .map(item => item.label);
    filterData = searchedFlight.filter(item =>
      item.displayData.airlines.some(item => labels.includes(item.airlineName)),
    );
    return filterData;
  };

  const sortingData = (data: FlightItemType[]) =>
    [...data].sort((a, b) =>
      sorting === sortingEnums.LOWTOHIGHT ? a.fare - b.fare : b.fare - a.fare,
    );

  const navigateTo = (item: FlightItemType) => {
    navigation.navigate(screenNames.FLIGHTDETAILS, {
      flightDetails: item,
    });
  };

  const onChange = (checkedItem: checkList) => {
    const data = filterList.map(data => ({
      ...data,
      isChecked:
        data.label === checkedItem.label ? !data.isChecked : data.isChecked,
    }));
    setFilterList(data);
  };

  return (
    <ContainerView
      isBorderPaddingRequired={false}
      isHeaderRequired={false}
      loading={searchedFlightLoading}>
      <BGImageWithDetails
        url={flightImagesList[3]}
        heading="Search List"
        description="The new Generation of Private Jet"
      />
      <Filters
        onClickSorting={setSorting}
        onChange={onChange}
        checkList={filterList}
        sorting={sorting}
      />
      <SearchedFlightDetails
        onPress={navigateTo}
        error={searchedFlightError}
        data={searchedFlightsList}
      />
    </ContainerView>
  );
};

export default FlightList;
