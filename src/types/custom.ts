export type LOGIN_ACCOUNT = {
  username: string;
  password: string;
};

export type UPDATE_ACCOUNT = {
  username?: string;
  password?: string;
};

export type REGISTER_ACCOUNT = {
  email: string;
  username: string;
  password: string;
};
