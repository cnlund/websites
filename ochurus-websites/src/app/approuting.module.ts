import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OchuruswebComponent } from './ochurusweb/ochurusweb.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: "", component: OchuruswebComponent}
    ])
  ],
  exports: [RouterModule]
})
export class ApproutingModule { }
