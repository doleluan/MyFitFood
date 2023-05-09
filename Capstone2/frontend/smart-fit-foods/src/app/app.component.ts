import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ChatGPTService} from "./services/chatGPT/chat-gpt.service";
import {UserDTO} from "./dto/UserDTO";
import {UserService} from "./services/person/user.service";
import {HttpEvent} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  answer:string[]=[];
  question:string[]=[];
  userCurrent: UserDTO;
  title = 'smart-fit-foods';
  url = 'assets/js/scripts/jquery.js';
  loadAPI: any;
  currentDateTime: string;
  constructor(private elRef: ElementRef,private chatGPTService: ChatGPTService,private userService: UserService,private router: Router) {
     let now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    this.currentDateTime = now.toLocaleDateString('en-US', options);

  }
  public loadScript() {
    const node = document.createElement('script');
    node.src = this.url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit(): void {
    this.loadAPI = new Promise(resolve => {
      this.loadScript();
    });

    this.chatGPTService.changeMessage.subscribe(data=>{
      this.chatGPTService.askMenu().subscribe(data=>{
        this.answer.push(data.choices[0].text.trim());
      })
    });
    this.getCurentUser();
    this.loadChatGPT();

  }

  loadChatGPT(){
    window.addEventListener("DOMContentLoaded", (event) => {
      const iconChatbotEl = this.elRef.nativeElement.querySelector('.icon-chatbot');
      const chatbotContainerEl = this.elRef.nativeElement.querySelector('.chatbot-container');

      iconChatbotEl.addEventListener('click', () => {
        if (window.getComputedStyle(chatbotContainerEl).getPropertyValue('opacity') === '0') {
          chatbotContainerEl.style.animation = 'show 0.5s ease-in-out forwards';
        } else {
          chatbotContainerEl.style.animation = 'hide 0.5s ease-in-out forwards';
        }
      });
      const closeChatEl = this.elRef.nativeElement.querySelector('.close-chat');
      const avatarEl = this.elRef.nativeElement.querySelector('.avatar');
      const dropDownMenuEl = this.elRef.nativeElement.querySelector('.drop-down-menu');

      closeChatEl.addEventListener('click', () => {
        this.elRef.nativeElement.querySelector('.chatbot-container').style.animation = 'hide 0.5s ease-in-out forwards';
      });

      avatarEl.addEventListener('click', () => {
        dropDownMenuEl.slideToggle();
      });
    });

  }

  getGPT(value: string) {
    this.question.push(value);
    (document.getElementById("questionGPTId") as HTMLInputElement).value="";
  this.chatGPTService.askQuestion(value).subscribe(data=>{
    this.answer.push(data.choices[0].text.trim());
  })
  }
  getCurentUser(){
    if(localStorage.getItem('token')){
      this.userService.getUserCurrent().subscribe(data=>{
        this.userCurrent = data;
      })
    }
    }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(["/login"]);
  }
}
