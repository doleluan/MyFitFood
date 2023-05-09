import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe} from "../../model/recipe/Recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailService {
  URL="http://localhost:8080/recipedetail";
  constructor(private httpClient: HttpClient) { }


}
