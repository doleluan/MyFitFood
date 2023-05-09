import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  URL="http://localhost:8080/comment";
  constructor() { }
}
