import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AuthModule } from '../auth/auth.module';
import { LayoutsModule } from 'src/components/layouts/layouts.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    LayoutsModule,
    AuthModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
