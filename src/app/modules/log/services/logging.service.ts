import { Injectable } from '@angular/core';
import { UserService } from '../../auth/services/user.service';
import { ILog, ILogData } from '../models/log';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {

  logList: ILogData[] = []

  constructor(protected userService: UserService) {}

  start() {
    return `log.${this.getUser().login}${
      this.getUser().password
    }.start`;
  } 
  end() {
    return `log.${this.getUser().login}${this.getUser().password}.end`;
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem('currentUser') || '');
    return user;
  }
  setLog(id: string, log: ILog) {
    localStorage.setItem(this.formId(id), JSON.stringify(log));
  }
  getLog(id: string): ILog {

    const data = localStorage.getItem(this.formId(id)) || '';

    return JSON.parse(data);
  }

  editLog(id: string, data: ILogData) {
    const log = this.getLog(id)
    log.data = data
    localStorage.setItem(this.formId(id), JSON.stringify(log))
  }

  setItem(key: string, data: string) {
    localStorage.setItem(key, data);
  }

  getItem(key: string) {
    return localStorage.getItem(key) || '';
  }

  getStart() {
    return this.getItem(this.start());
  }

  getEnd() {
    return this.getItem(this.end());
  }

  formId(id: string) {
    return `log.${this.userService.user.login}${this.userService.user.password}.${id}`;
  }

  /**
   * Log is a two-way list
   */
  addLog(data: ILogData) {
    const id = this.makeid(10);

    const log: ILog = {
      id,
      prev: '',
      next: '',
      data,
    };
    if (this.getStart() === '') {
      this.setItem(this.start(), id);
      this.setItem(this.end(), id);
      this.setLog(id, log);
    } else {
      log.data = data;
      log.prev = this.getItem(this.end());
      log.next = '';
      let lastLog = this.getLog(this.getItem(this.end()));
      lastLog.next = id;
      this.setLog(this.getItem(this.end()), lastLog);
      this.setItem(this.end(), id);
      this.setLog(id, log);
    }

    return 'OK';
  }

  listLog() {
    const res: ILogData[] = [];
    let cursor = this.getStart();
    while (cursor) {
      let log = this.getLog(cursor);
      log.data.id = log.id;
      res.push(log.data);
      cursor = log.next;
    }
    return res;
  }

  renderLog() {
    this.logList = this.listLog()
  }
  removeLog(id: string) {
    /* {1} -> {2} -> {3} 
    =>
     {1} -> {3} */
    const log = this.getLog(id);

    if (log.prev !== '') {
      const prevLog = this.getLog(log.prev);
      prevLog.next = log.next;
      this.setLog(log.prev, prevLog);
    } else {
      localStorage.setItem(this.start(),log.next)
    }

    if (log.next !== '') {
      const nextLog = this.getLog(log.next);
      nextLog.prev = log.prev;
      this.setLog(log.next, nextLog);
    } else {
      localStorage.setItem(this.end(),log.prev)
    }
    
    localStorage.removeItem(this.formId(id));

    return 'OK';
  }

  dropLog() {
    let cursor = this.getStart();
    while (cursor) {
      let log = this.getLog(cursor);
      try {
        this.removeLog(log.prev);
      } catch (e) {
        console.error(e, log.prev);
      }
      cursor = log.next;
    }
    localStorage.removeItem(this.formId('start'));
    localStorage.removeItem(this.formId('end'));
  }

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
