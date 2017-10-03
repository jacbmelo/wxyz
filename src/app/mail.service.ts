import { Injectable, Input } from '@angular/core';

@Injectable()
export class MailService {

  @Input()
  public alerts: Array<IAlert> = [];

  constructor() {
    this.alerts.push({
      id: 1,
      type: 'success',
      message: 'This is an success alert',
    }, {
      id: 2,
      type: 'info',
      message: 'This is an info alert',
    }, {
      id: 3,
      type: 'warning',
      message: 'This is a warning alert',
    }, {
      id: 4,
      type: 'danger',
      message: 'This is a danger alert',
    });
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public update(id, type, message) {
    this.alerts = this.alerts.map(m => m.id === id ? {id, type, message} : m);
  }

}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
