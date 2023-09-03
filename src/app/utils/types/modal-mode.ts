export const ModalModeType = {
  CREATE: 'CREATE',
  EDIT: 'EDIT',
};

export type ModalModeType = (typeof ModalModeType)[keyof typeof ModalModeType];
