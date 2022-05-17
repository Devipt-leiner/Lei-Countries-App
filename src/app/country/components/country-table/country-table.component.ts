import { Component, Input, OnInit } from '@angular/core';

import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [
  ]
})
export class CountryTableComponent {

  @Input() countries: Country[] = [];

}
