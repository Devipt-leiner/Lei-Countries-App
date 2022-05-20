import { Component, Input, OnInit } from '@angular/core';

import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [`
    @media screen and (max-width: 768px) {
      .container-table {
        width: 100%;
        overflow-x: scroll;
      }
    }

    .container-table {
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
  `]
})
export class CountryTableComponent {

  @Input() countries: Country[] = [];

}
