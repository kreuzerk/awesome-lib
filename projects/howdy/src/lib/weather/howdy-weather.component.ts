import {Component, Input} from '@angular/core';

@Component({
  selector: 'howdy-weather',
  template: `<h1>Hello the weather is {{weather}}</h1>`
})
export class HowdyWeatherComponent {
  @Input() weather: string;
}
