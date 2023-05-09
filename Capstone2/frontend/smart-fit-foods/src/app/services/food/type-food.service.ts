import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TypeFood} from "../../model/food/TypeFood";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TypeFoodService {
  URL = "http://localhost:8080/typeFood"
  constructor(private httpClient: HttpClient) {

  }
  getAll(){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    };
    return this.httpClient.get<TypeFood[]>(`${this.URL}`,{headers:headers});
  }
}
