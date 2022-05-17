import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  term!: string;
  thereIsError?: boolean;
  countries: Country[] = [];

  constructor (private countryService: CountryService) { }

  search (term: string) {
    this.thereIsError = false;
    this.term = term;

    this.countryService.searchCountry(term).subscribe((response) => {
      this.countries = response;
    }, (error) => {
      this.thereIsError = true;
      this.countries = [];
    });
  }

}
