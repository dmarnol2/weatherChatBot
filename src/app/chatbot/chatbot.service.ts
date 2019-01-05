import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {ApiAiClient} from 'api-ai-javascript';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class Message{
  constructor(public content: string, public sentBy: string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({accessToken: this.token});
  conversation = new BehaviorSubject<Message[]>([]);

  constructor() { }

  // adds message to source
  update(msg: Message){
    console.log("in update from converse with msg[] "+msg.content);
    this.conversation.next([msg]);
  }

  // sends and receives messages from Dialogflow
  converse(msg: string){
    console.log("in chat service converse with passed param "+msg);
    const userMsg = new Message(msg,'user');
    this.update(userMsg);
    console.log("back in converse before return statement with token: "+this.token);
    return this.client.textRequest(msg).then(res=>{
      const speech = res.result.fulfillment.speech;
      const botMessage = new Message(speech, 'bot');
      this.update(botMessage);
    });
  }

  
}
