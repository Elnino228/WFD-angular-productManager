import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {stringify} from 'querystring';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  @Input()
  actionName: string;
  @Output()
  press = new EventEmitter<string>();

  keyword: string;

  constructor() {
  }

  ngOnInit() {
  }

  doAction() {
    this.press.emit(this.keyword);
  }

}
