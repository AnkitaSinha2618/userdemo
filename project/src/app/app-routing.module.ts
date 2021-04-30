import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


const routes: Routes = [
  {path:'', redirectTo:'create-user', pathMatch:'full'},
  {path:'create-user', component:CreateUserComponent},
  {path:'update-user/:id', component:CreateUserComponent},
  {path:'all-users', component:AllUsersComponent},
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
