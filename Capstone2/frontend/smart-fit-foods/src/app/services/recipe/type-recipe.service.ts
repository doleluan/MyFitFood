import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeRecipeService {
  URL="http://localhost:8080/typerecipe";
  constructor() { }
}
