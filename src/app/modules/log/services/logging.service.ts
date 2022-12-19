import { Injectable } from '@angular/core';
import { UserService } from '../../auth/services/user.service';
import { ILog, ILogData } from '../models/log';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  start = `log.${this.userService.user.password}.start`;
  end = `log.${this.userService.user.password}.end`;

  constructor(protected userService: UserService) {}

  setLog(key: string, log: ILog) {
    localStorage.setItem(key, JSON.stringify(log));
  }
  getLog(id: string): ILog {
    const data = localStorage.getItem(this.formId(id)) || '';
    return JSON.parse(data);
  }

  setItem(key: string, data: string) {
    localStorage.setItem(key, data);
  }

  getItem(key: string) {
    return localStorage.getItem(key) || '';
  }

  getStart() {
    return this.getItem(this.start);
  }

  getEnd() {
    return this.getItem(this.end);
  }

  formId(id: string) {
    return `log.${this.userService.user.password}.${id}`;
  }

  /**
   * Log is a two-way list
   */
  addLog(data: ILogData) {
    const id = this.makeid(10);

    const log: ILog = {
      prev: '',
      next: '',
      data,
    };
    if (this.getStart() === '') {
      this.setItem(this.start, id);
      this.setItem(this.end, id);
      this.setLog(this.formId(id), log);
    } else {
      log.data = data;
      log.prev = this.getItem(this.end);
      log.next = '';
      let lastLog = this.getLog(this.getItem(this.end));
      lastLog.next = id;
      this.setLog(this.formId(this.getItem(this.end)),lastLog)
      this.setItem(this.end, id);
     
      this.setLog(this.formId(id), log);
    }

    return 'OK';
  }

  removeLog(id: string) {}

  makeid(length: number): string {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
