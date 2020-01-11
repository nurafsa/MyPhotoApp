import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Photo } from './Photo';
import { Comment } from './Comment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiBaseUrl = "http://ec2-54-218-206-93.us-west-2.compute.amazonaws.com:7000/api";
  
  idToken= localStorage.getItem('idToken');

  constructor(private http: HttpClient) { }
  
  public savePhoto(fileId, albumId){
    
    var fileUrl = this.apiBaseUrl + "/files/show/"+fileId;
    console.log("Id token inside Photo service", this.idToken);
    console.log("File Url inside Photo service", fileUrl);
    console.log("Album Id inside Photo service", albumId);
    
    var photo: Photo = {
      id: "",
      albumId: albumId,
      fileId: "",
      thumbnailUrl: fileUrl,
      photoUrl: fileUrl,
      dateCreated: "",
      createdBy: "",
    };
    var headers = this.getHeaders();
    return this.http.post(this.apiBaseUrl + "/photos", photo, {headers});
    
  }

  public saveComment(photoId, commentText, emailAddress){
    
    var commentData: Comment = {
      comment: commentText,
      photoId: photoId,
      id: "",
      dateCreated: emailAddress,
      createdBy: "",       
    };
    var headers = this.getHeaders();
    return this.http.post(this.apiBaseUrl + "/photos/comments", commentData, {headers});
    
  }

  public getAllComments(photoId){
    var headers = this.getHeaders();
    return this.http.get(this.apiBaseUrl + "/photos/"+photoId+"/comments", {headers});
  }

  public getHeaders(){
    var headers = {
      'idToken': this.idToken
    };
    return headers;
  }

}


