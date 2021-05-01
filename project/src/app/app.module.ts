import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUserComponent } from './create-user/create-user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {UserServiceService} from './appServices/user-service.service';
import {AlbumServiceService} from './appServices/album-service.service';
import { PostServiceService } from './appServices/post-service.service';

import { HttpClientModule } from '@angular/common/http';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { AllAlbumsComponent } from './all-albums/all-albums.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    AllUsersComponent,
    PageNotFoundComponent,
    CreateAlbumComponent,
    AllAlbumsComponent,
    CreatePostComponent,
    AllPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule

  ],
  providers: [UserServiceService, AlbumServiceService, PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
