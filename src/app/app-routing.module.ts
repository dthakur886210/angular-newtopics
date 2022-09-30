import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './person/login/login.component';
import { SignupComponent } from './person/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'lazyadmin',
    loadChildren: () =>
      import('./lazyadmin/lazyadmin.module').then(
        mod => mod.LazyadminModule
      ),
  },
      {
        path: 'lazyuser',
        loadChildren: () =>
          import('./lazyuser/lazyuser.module').then(
            mod => mod.LazyuserModule
          )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
