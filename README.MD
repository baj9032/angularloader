# angularloader

## Installation

To install this library globally, run:

```bash
$ npm install angularloader --save -g
```

To install this library locally, run:

```bash
$ npm install angularloader
```

## Consuming our library

and then from our Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import our library
import { LoaderModule } from 'angularloader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify our library as an import
    LoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once our library is imported, you can use component in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<aj-loader [isLoaderVisible]='isshowloader'></aj-loader>
```

Now you can use isshowloader variable in app.component.ts:
If you want to display loader then set isshowloader variable to true otherwise false

```typescript
class AppComponent {
  isshowloader: boolean = false;
}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [ankit bhanderi](mailto:baj9032@gmail.com)
