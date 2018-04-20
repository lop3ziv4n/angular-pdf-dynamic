import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PdfViewerComponent, PdfGenerateComponent} from './pdf-master';

const routes: Routes = [
  {path: 'viewer', component: PdfViewerComponent},
  {path: 'generate', component: PdfGenerateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
