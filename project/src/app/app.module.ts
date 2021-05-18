import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';  

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
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    AllUsersComponent,
    PageNotFoundComponent,
    CreateAlbumComponent,
    AllAlbumsComponent,
    CreatePostComponent,
    AllPostsComponent,
    DeleteConfirmDialogComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatExpansionModule,
    HttpClientModule,
    MatTooltipModule,
    MatDialogModule

  ],
  providers: [UserServiceService, AlbumServiceService, PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
