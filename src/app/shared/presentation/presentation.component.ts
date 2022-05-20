import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styles: [`
    .img-fluid {
      box-shadow: #0d6efd 0px 0px 0px 3px !important;
    }
  `]
})
export class PresentationComponent {

  @Output() showApp = new EventEmitter<boolean>();

  constructor() { }

  getStarted () {
    this.showApp.emit(true);
  }

}
