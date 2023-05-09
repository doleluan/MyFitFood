import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  URL="http://localhost:8080/gender";
  constructor() { }
}
