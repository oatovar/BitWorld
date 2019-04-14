import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BitFeedComponent } from './bit-feed/bit-feed.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'feed', component: BitFeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
