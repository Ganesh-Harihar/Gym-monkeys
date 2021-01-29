import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/404.component';
import { AuthComponent } from './auth/auth.component';
import { AboutComponent } from './about/about.component';
import { NavGymClassesComponent } from './nav-gym-classes/nav-gym-classes.component';
import { GallaryComponent } from './gallary/gallary.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: environment.defaultPostLoginPath,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'classes',
    component: NavGymClassesComponent
  },
  {
    path: 'gallary',
    component: GallaryComponent
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: '404 - Page not found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
