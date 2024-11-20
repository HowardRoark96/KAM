export const SexType = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
};

export type SexType = (typeof SexType)[keyof typeof SexType];
