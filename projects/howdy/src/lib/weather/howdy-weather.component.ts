import {Component, Input} from '@angular/core';

@Component({
  selector: 'howdy-weather',
  template: `
      <h1>The weather is {{weather}}</h1>
      <a href="https://weather.com/de-CH/wetter/heute/l/SZXX0006:1:SZ"></a>
  `,
  styleUrls: ['./howdy-weather.component.css']
})
export class HowdyWeatherComponent {
  @Input() weather: string;
}
