import { MessageServiceService } from './../message-service.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

 //https://stackoverflow.com/questions/35328652/angular-pass-callback-function-to-child-component-as-input-similar-to-angularjs
  @Input() value: number;
  @Input() id: number;
  @Output() newDeleteEvent = new EventEmitter();
  @Output() increment = new EventEmitter();
  @Output() reset = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // increment() {
  //   this.value = this.value + 1;
  //   this.changeEvent.emit();
  // }

  // reset() {
  //   this.value = 0;
  //   this.changeEvent.emit();
  // }


  doIncrement(id) {
    this.increment.emit(id);
  }

  doReset(id) {
    this.reset.emit(id);
  }

  delete(id) {
    this.newDeleteEvent.emit(id);
  }

}
