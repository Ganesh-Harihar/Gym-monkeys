import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [RegisterComponent, AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [AuthComponent, RegisterComponent]
})
export class AuthModule { }
