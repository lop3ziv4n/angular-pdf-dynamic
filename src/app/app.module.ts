import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {NavbarComponent} from './layouts';
import {AppRoutingModule} from './app-routing.module';
import {PdfViewerComponent} from './pdf-master';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
