import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomePageComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', component: HomePageComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}
