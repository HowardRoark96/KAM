import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthorizeComponent } from './authorize.component';
import { SignInComponent } from './pages/sign-in';
import { SignUpComponent } from './pages/sign-up';
import { RecoverAccountComponent } from './pages/recover-account';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-up',
  },
  {
    path: '',
    component: AuthorizeComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'recover-account',
        component: RecoverAccountComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizeRoutingModule {}
