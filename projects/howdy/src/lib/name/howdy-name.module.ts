import {NgModule} from '@angular/core';
import {HowdyNameComponent} from './howdy-name.component';
import {HowdyTimeModule} from 'howdy/lib/time';

@NgModule({
  imports: [HowdyTimeModule],
  declarations: [HowdyNameComponent],
  exports: [HowdyNameComponent]
})
export class HowdyNameModule {
}
