export interface ILog {
  prev: string;
  next: string;
  data: ILogData;
}

export interface ILogData {
  caller: string;
  type: string;
  duration: number;
  beginingTime: number;
  endingTime: number;
}
