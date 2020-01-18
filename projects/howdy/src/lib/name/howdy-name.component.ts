import {Component, Input} from '@angular/core';
import {Foo} from 'howdy/src/lib/shared';

@Component({
  selector: 'howdy-name',
  template: `<h1>Hello {{name}}</h1>`
})
export class HowdyNameComponent {
  @Input() name: string;
  something: Foo;
}
