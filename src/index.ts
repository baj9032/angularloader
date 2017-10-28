import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './loader.component';

export * from './loader.component';

@NgModule({imports: [CommonModule], declarations: [LoaderComponent], exports: [LoaderComponent]})
export class LoaderModule {
  static forRoot() : ModuleWithProviders {
    return {ngModule: LoaderModule};
  }
}
