import { MockedData } from './interfaces';
import { NzSelectOptionInterface } from 'ng-zorro-antd/select/select.types';

export const getSelectMockedData = (): MockedData<NzSelectOptionInterface[]> => {
  return {
    data: [
      { label: 'A3', value: 11, groupLabel: 'Audi' },
      { label: 'A4', value: 12, groupLabel: 'Audi' },
      { label: 'A5', value: 13, groupLabel: 'Audi' },
      { label: 'A7', value: 14, groupLabel: 'Audi' },
      { label: 'Q5', value: 15, groupLabel: 'Audi' },
      { label: 'X1', value: 21, groupLabel: 'BMW' },
      { label: 'X2', value: 22, groupLabel: 'BMW' },
      { label: 'X3', value: 23, groupLabel: 'BMW' },
      { label: 'X4', value: 24, groupLabel: 'BMW' },
      { label: 'X5', value: 25, groupLabel: 'BMW' },
      { label: 'Accord', value: 31, groupLabel: 'Honda' },
      { label: 'Civic 4D', value: 32, groupLabel: 'Honda' },
      { label: 'Civic 5D', value: 33, groupLabel: 'Honda' },
      { label: 'CR-V.', value: 34, groupLabel: 'Honda' },
      { label: 'Crosstour', value: 35, groupLabel: 'Honda' },
    ],
  };
};
