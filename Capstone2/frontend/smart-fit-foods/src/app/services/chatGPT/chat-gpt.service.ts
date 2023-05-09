import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatGPTService {
  URL="https://api.openai.com/v1/completions";
  message: string;
  changeMessage: EventEmitter<String> = new EventEmitter<String>();
  constructor(private httpClient: HttpClient) { }
  askQuestion(question: string): Observable<any> {
    const requestBody = {
      model: "text-davinci-003",
      prompt: `${question}. Trả lời cụ thể`,
      max_tokens: 500,
      temperature: 0.5
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    };
    return this.httpClient.post<any>(this.URL, requestBody, { headers });
  }
  askMenu(): Observable<any> {
    const requestBody = {
      model: "text-davinci-003",
      prompt: `${this.getMessage()} nên ăn với thực phẩm gì? Trả lời cụ thể`,
      max_tokens: 500,
      temperature: 0.5
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    };

    return this.httpClient.post<any>(this.URL, requestBody, { headers });
  }
  setMessage(message: string) {
    this.message = message;
    console.log("thay doi sẻvice")
    this.changeMessage.emit(this.message);
  }

  getMessage(): string {
    return this.message;
  }
}
