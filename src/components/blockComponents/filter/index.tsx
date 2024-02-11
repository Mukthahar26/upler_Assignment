import React from 'react';
import Card from '../../baseComponents/card';
import AppText from '../../baseComponents/AppText';
import UnderLine from '../../baseComponents/underLine';
import styles from './styles';
import CheckboxWithLabel from '../../baseComponents/checkBoxWithLabel';
import {Props} from './props';
import {sortingEnums} from '../../../constants/constants';

const Filters = ({
  checkList,
  onChange,
  isSortingRequired,
  onClickSorting,
  sorting,
}: Props) => {
  return (
    <Card style={styles.card}>
      <AppText style={styles.filterLabel}>Filter By</AppText>
      <UnderLine />
      <AppText style={styles.airlinesLabel}>AIRLINES</AppText>
      {checkList &&
        checkList.map(item => {
          const {label, isChecked, count} = item;
          return (
            <CheckboxWithLabel
              style={styles.checkBox}
              label={`${label} (${count})`}
              isChecked={isChecked}
              onToggle={onChange}
            />
          );
        })}
      <UnderLine style={styles.underline} />
      {isSortingRequired && (
        <>
          <AppText style={styles.airlinesLabel}>SORT BY</AppText>
          <AppText
            onPress={() => onClickSorting(sortingEnums.LOWTOHIGHT)}
            style={[
              styles.airlinesLabel,
              sorting === sortingEnums.LOWTOHIGHT && styles.highlight,
            ]}>
            Low - High
          </AppText>
          <AppText
            onPress={() => onClickSorting(sortingEnums.HIGHTOLOW)}
            style={[
              styles.airlinesLabel,
              sorting === sortingEnums.HIGHTOLOW && styles.highlight,
            ]}>
            High - Low
          </AppText>
        </>
      )}
    </Card>
  );
};
Filters.defaultProps = {
  isSortingRequired: true,
};

export default Filters;
