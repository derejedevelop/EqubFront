import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateFormComponent } from './components/user-create-form/user-create-form.component';

const routes: Routes = [
  {
    path: 'user/create',
    component: UserCreateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
