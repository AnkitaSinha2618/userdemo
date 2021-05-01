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
  {path:'create-user', component:CreateUserComponent},
  {path:'update-user/:id', component:CreateUserComponent},
  {path:'all-users', component:AllUsersComponent},
  {path:'create-album', component:CreateAlbumComponent},
  {path:'update-album/:id', component:CreateAlbumComponent},
  {path:'all-albums', component:AllAlbumsComponent},
  {path:'create-post', component:CreatePostComponent},
  {path:'update-post/:id', component:CreatePostComponent},
  {path:'all-posts', component:AllPostsComponent},
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
