import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { NavGymClassesComponent } from './nav-gym-classes/nav-gym-classes.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LayoutsModule } from 'src/components/layouts/layouts.module';
import { GallaryComponent } from './gallary/gallary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavGymClassesComponent,
    AboutComponent,
    HomeComponent,
    GallaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
