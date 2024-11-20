export const RoleType = {
  SYSTEM: 'SYSTEM',
  USER: 'USER',
};

export type RoleType = (typeof RoleType)[keyof typeof RoleType];
