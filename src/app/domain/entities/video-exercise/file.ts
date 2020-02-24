export interface FileReq {
  file: any;
  description: string;
}


export interface FileRes {
  level: string;
  number: string;
  dataVideo: [DataVideo];
}

export class DataVideo {
  _id: string;
  filename: string;
  description: string;
  path: string;
}

//////
export interface ParamsReq {
  level: Number;
  exercise: Number;
  _id?: string;
}
