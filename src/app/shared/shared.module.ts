import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './404.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [NotFoundComponent]
})
export class SharedModule { }
