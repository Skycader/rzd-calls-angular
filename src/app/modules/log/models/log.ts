export interface ILog {
  id: string;
  prev: string;
  next: string;
  data: ILogData;
}

export interface ILogData {
  id?: string;
  caller: string;
  type: string;
  duration: number;
  begining: number;
  ending: number;
}
