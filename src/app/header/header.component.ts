import { MessageServiceService } from './../message-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  countersCount;

  constructor(private data: MessageServiceService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.countersCount = message);
  }

}
