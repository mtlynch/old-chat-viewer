import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  conversations = {};

  selectedConversation: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(environment.logDataUrl)
      .subscribe(data => {
        for (const conversationIndex in data) {
          if (conversationIndex) {
            const conversation = data[conversationIndex];
            this.conversations[conversation.remoteUsername] = conversation;
          }
        }
      });
  }

}
