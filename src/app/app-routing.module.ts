import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PdfViewerComponent} from './pdf-master';

const routes: Routes = [
  {path: 'viewer', component: PdfViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
