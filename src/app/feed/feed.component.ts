import { Component, OnInit } from '@angular/core';
import { Album } from '../Album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

   albums: Album[] = [];

  constructor( 
    private albumService: AlbumService,
  ) { }

  ngOnInit() {
       
    this.albumService.getAllAlbums()
    .subscribe(
      result => this.albums = (<Album[]>result).slice(-10, -1),
      err => console.error('Got an error: ' + err),
      () => console.log('Got a complete notification')
    );
  }
}
