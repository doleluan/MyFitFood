import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Food} from "../../model/food/Food";
import {Post} from "../../model/post/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  URL="http://localhost:8080/post";
  constructor(private httpClient: HttpClient) { }
  getAll(){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    };
    return this.httpClient.get<Post[]>(`${this.URL}`,{headers:headers})
  }
  addPost(post){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    };
    return this.httpClient.post(`${this.URL}/add`,post,{headers:headers})
  }
}
