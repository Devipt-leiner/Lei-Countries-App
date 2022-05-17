import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styles: [
  ]
})
export class InputCountryComponent {

  @Output() onEnter = new EventEmitter<string>();
  term: string = '';

  search () {
    this.onEnter.emit(this.term);
  }

}
