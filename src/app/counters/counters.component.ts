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
    this.counters = this.counters.filter(x => x.id != id);
    this.newMessage();
  }

  resetAll() {
    this.counters.forEach(x => x.value = 0)
    this.newMessage();
  }

  newMessage() {
    console.log("I got called")
    this.data.changeMessage(this.counters.filter(x=> x.value>0).length);
  }

  increment(id) {
    this.counters.map(x=> x.id ===id ? x.value+=1 : x);
    this.newMessage();
  }

  reset(id) {
    this.counters.map(x=> x.id ===id ? x.value = 0: x);
    this.newMessage();
  }
}
