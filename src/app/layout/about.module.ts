import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    SharedModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
