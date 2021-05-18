import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAlbumsComponent } from './all-albums/all-albums.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


const routes: Routes = [
  {path:'', redirectTo:'create-user', pathMatch:'full'},
  {path:'users', children:[
    {path:'', component:AllUsersComponent},
    {path:'create',component:CreateUserComponent},
    {path:'update/:id', component:CreateUserComponent},
  ]},
  {path:'albums', children:[
    {path:'', component:AllAlbumsComponent},
    {path:'create', component:CreateAlbumComponent},
    {path:'update/:id', component:CreateAlbumComponent},
  ]},
  {path:'posts', children:[
    {path:'', component:AllPostsComponent},
    {path:'create', component:CreatePostComponent},
    {path:'update/:id', component:CreatePostComponent},
  ]},
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
