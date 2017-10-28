/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LoaderModule }  from 'angularloader';

@Component({
  selector: 'app',
  template: `<button (click)=start()>start</button>
  <aj-loader [isLoaderVisible]='isshowloader'></aj-loader> `
})
class AppComponent {

  isshowloader: boolean = false;
  
   start() {
     this.isshowloader = true;
 
     let that = this;
     setTimeout(function () {
       that.isshowloader = true;
     }, 1000);
   }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, LoaderModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
