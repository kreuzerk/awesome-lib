import {Component, Input, OnInit} from '@angular/core';
import moment from 'moment';
import {Foo} from 'howdy/src/lib/shared';

@Component({
  selector: 'howdy-time',
  template: `<h1>Hello today is the {{time}}</h1>`
})
export class HowdyTimeComponent implements OnInit {
  time: string;
  something: Foo;

  ngOnInit(): void {
    this.time = moment().format('DD.MM.YYYY');
  }
}
