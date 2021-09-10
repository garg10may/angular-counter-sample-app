import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() value: number;
  @Input() id: number;
  @Output() newDeleteEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.value = this.value + 1;
  }

  reset() {
    this.value = 0;
  }

  delete(id) {
    this.newDeleteEvent.emit(id);
  }
}
