import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  term!: string;
  thereIsError?: boolean;

  constructor (private countryService: CountryService) { }

  search () {
    this.thereIsError = false;

    this.countryService.searchCountry(this.term).subscribe((response) => {
      console.log(response);
    }, (error) => {
      this.thereIsError = true;
    });
  }

}
