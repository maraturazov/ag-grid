import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import * as moment from 'moment';
import { AppConfig } from '../../shared/constants/app.config';

@Component({
  selector: 'app-published-on-renderer',
  templateUrl: './published-on-renderer.component.html',
  styleUrls: ['./published-on-renderer.component.css'],
})
export class PublishedOnRendererComponent implements ICellRendererAngularComp  {
  params;
  constructor() { }

  agInit(params: any): void {
    this.params = params;
    if (this.params && this.params.hasOwnProperty('value') && this.params.value) {
      const momentDate = moment(this.params.value);
      if (momentDate.isValid()) {
        this.params.value = momentDate.format(AppConfig.dateFormat.US);
      }
    }
  }

  refresh(): boolean {
    return false;
  }
}
