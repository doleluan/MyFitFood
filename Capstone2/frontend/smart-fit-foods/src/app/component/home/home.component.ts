import {Component, ElementRef, OnInit} from '@angular/core';
import {UserDTO} from "../../dto/UserDTO";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url = 'assets/js/scripts/jquery.js';
  loadAPI: any;
  public loadScript() {
    const node = document.createElement('script');
    node.src = this.url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  constructor(private router: Router,private elRef: ElementRef) { }
  ngOnInit(): void {
    // this.loadAPI = new Promise(resolve => {
    //   this.loadScript();
    // });
    if (!localStorage.getItem('token')){
      this.router.navigate(['/login'])
    }
    // this.loadChatGPT()
  }
    loadChatGPT(){
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
    }
}
