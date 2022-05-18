import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styles: [
  ]
})
export class InputCountryComponent implements OnInit {

  @Input() placeHolder!: string;
  @Output() onEnter = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();

  // Crear observable manual
  debouncer: Subject<string> = new Subject;

  term: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( value => {
        this.onDebounce.emit(value);
      });
  }

  search () {
    this.onEnter.emit(this.term);
  }

  keyPressed () {
    this.debouncer.next(this.term);
  }

}
