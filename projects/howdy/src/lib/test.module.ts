import {NgModule} from '@angular/core';
import {TestComponent} from 'howdy/lib/test.component';
import {HowdyWeatherModule} from './weather';

@NgModule({
  imports: [HowdyWeatherModule],
  declarations: [TestComponent],
  exports: [TestComponent]
})
export class TestModule {
}
