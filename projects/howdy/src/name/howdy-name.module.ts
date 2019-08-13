import {NgModule} from '@angular/core';
import {HowdyNameComponent} from './howdy-name.component';
import {HowdyWeatherModule} from 'howdy/weather';

@NgModule({
  imports: [HowdyWeatherModule],
  declarations: [HowdyNameComponent],
  exports: [HowdyNameComponent]
})
export class HowdyNameModule {
}
