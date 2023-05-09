import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FoodDetail} from "../../model/food/FoodDetail";

@Injectable({
  providedIn: 'root'
})
export class FoodDetailService {
  URL="http://localhost:8080/fooddetail";
  constructor(private httpClient: HttpClient) { }
  getAll(){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    };
    return this.httpClient.get<FoodDetail[]>(`${this.URL}`,{headers:headers})
  }
}
