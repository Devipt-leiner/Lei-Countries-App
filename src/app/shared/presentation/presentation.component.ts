import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styles: [`

    `]
})
export class PresentationComponent {

  @Output() showApp = new EventEmitter<boolean>();

  constructor() { }

  getStarted () {
    this.showApp.emit(true);
  }

}
