import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {ChatService, Message} from '../chatbot.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
  @ViewChild('msg') msg: ElementRef;

  messages:Observable<Message[]>;
  formValue:string;
  user:boolean;
  constructor(public chat: ChatService) { }

  ngOnInit() {
    //appends to array after each new message is added to feed
    this.user = false;
    this.messages=this.chat.conversation.asObservable();
    //concat old array with new array
    this.scrollToBottom();
    console.log("ngoninit: "+this.messages );
  }

  sendMessage(){
    console.log("in sendmessage with form value of: "+this.formValue);
    this.chat.converse(this.formValue);
    this.formValue='';
    if(this.user==true){
      this.user=false;
    }
    else{
      this.user=true;
    }
    this.scroll();
  }

  ngAfterViewChecked(){
    //this.scrollToBottom();
    //this.scroll();
  }

  scrollToBottom(): void{
    try{
      this.msg.nativeElement.scrollTop=this.msg.nativeElement.scrollHeight;
    }catch(err){ }
  }

  scroll(){
    console.log("in scroll");
    var elemnt = document.getElementById("chatBox");
    elemnt.scrollIntoView();
  }
}
