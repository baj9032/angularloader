import {Component, Input} from '@angular/core';

@Component({selector: 'aj-loader', templateUrl: `./loader.html`})

export class LoaderComponent {
  @Input()isLoaderVisible : boolean;
}
