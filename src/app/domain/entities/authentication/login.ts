export interface LoginReq {
  user: string;
  mt1: string;
}

export interface LoginRes {
  id: string;
  names: string;
  surnames: string;
  country: string;
  mail: string;
  status: string;
  level: string;
  avatar: string;
  scope: string[];
  token: string;
}
