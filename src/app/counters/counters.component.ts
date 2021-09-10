import { MessageServiceService } from './../message-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  counters = [
    { value: 4, id: 1 },
    { value: 5, id: 2 },
    { value: 6, id: 3 },
    { value: 1, id: 4 },
  ]
  constructor(private data: MessageServiceService) { }

  ngOnInit(): void {
    this.newMessage();
  }

  doDelete(id) {
    console.log('delete called with id: ', id)
    this.counters = this.counters.filter(x => x.id != id);
    this.newMessage();

  }

  resetAll() {
    this.counters.forEach(x => x.value = 0)
  }

  newMessage() {
    this.data.changeMessage(this.counters.length);
  }
}
