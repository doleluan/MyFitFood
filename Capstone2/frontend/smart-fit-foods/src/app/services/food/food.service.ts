import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Food} from "../../model/food/Food";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  URL="http://localhost:8080/food";
  constructor(private httpClient : HttpClient) { }

  getAll(){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    };
    return this.httpClient.get<Food[]>(`${this.URL}`,{headers:headers})
  }
}
