import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  logData;

  selectedConversation: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(environment.logDataUrl)
      .subscribe(data => {
        this.logData = data;
      });
  }

}
