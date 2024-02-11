export type Props = {
  checkList: checkList[];
  onChange: (check: checkList) => void;
  isSortingRequired: boolean;
  onClickSorting: (type: number) => void;
  sorting: number;
};

export type checkList = {
  isChecked: boolean;
  label: string;
  count: number;
};
