import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { UploadPhotosComponent } from './upload-photos/upload-photos.component';
import { FeedComponent } from './feed/feed.component';
import { PhotoComponent } from './photo/photo.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateAlbumComponent } from './create-album/create-album.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/create', component: CreateAlbumComponent },
  { path: 'album/:albumId/:albumTitle', component: AlbumDetailsComponent },
  { path: 'upload-photo/:albumId/:albumTitle', component: UploadPhotosComponent },
  { path: 'photo/:photoId/:photoUrl', component: PhotoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
