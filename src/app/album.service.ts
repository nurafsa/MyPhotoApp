import { Injectable } from '@angular/core';
import { Album } from './Album';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  
  constructor(private http: HttpClient) { }

  private albums: Album [] = [{
    id: "1",
    title: "Album 1",
    coverPhotoUrl: "https://cdn2.outdoorphotographer.com/2017/03/P_150127-_JBA2734-815x1024.jpg", 
    creationDate: "",
    createdBy:"",
  },
  {
    id: "2",
    title: "Album 2",
    coverPhotoUrl: "https://cdn2.outdoorphotographer.com/2017/03/P_150127-_JBA2734-815x1024.jpg", 
    creationDate: "",
    createdBy:"", 
  },
  {
    id: "3",
    title: "Album 3",
    coverPhotoUrl: "https://cdn2.outdoorphotographer.com/2017/03/P_150127-_JBA2734-815x1024.jpg", 
    creationDate: "",
    createdBy:"",
  },
];

  public getAllAlbums(){

    var idToken= localStorage.getItem('idToken');
    console.log("Id token inside Album service", idToken);

    const headers = {
      'idToken': idToken
    };

   
    return this.http.get("http://ec2-54-218-206-93.us-west-2.compute.amazonaws.com:7000/api/albums",{headers});
  }

  public getAlbumDetails(id){
     return this.albums[id-1];
  }
}
