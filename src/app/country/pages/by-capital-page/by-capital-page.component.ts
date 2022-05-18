import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  term!: string;
  thereIsError?: boolean;
  countries: Country[] = [];

  constructor (private countryService: CountryService) { }

  search (term: string) {
    this.thereIsError = false;
    this.term = term;

    this.countryService.searchCountryByCapital(term).subscribe({
      next: (response) => {
        this.countries = response;
      },
      error: (error) => {
        this.thereIsError = true;
        this.countries = [];
      }
    });
  }
}
