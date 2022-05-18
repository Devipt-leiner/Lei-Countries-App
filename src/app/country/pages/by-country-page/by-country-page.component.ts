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

  countriesSuggested: Country[] = [];
  showSuggestions: boolean = false;

  constructor (private countryService: CountryService) { }

  search (term: string) {
    this.thereIsError = false;
    this.showSuggestions = false;
    this.term = term;

    this.countryService.searchCountry(term).subscribe((response) => {
      this.countries = response;
    }, (error) => {
      this.thereIsError = true;
      this.countries = [];
    });
  }

  suggestions (term: string) {
    this.thereIsError = false;
    this.term = term;

    this.countryService.searchCountry(term).subscribe({
      next: (response) => {
        this.countriesSuggested = response.splice(0,5);
      },
      error: (error) => {
        this.thereIsError = true;
        this.countriesSuggested = [];
      }
    });
  }

  searchSuggested (term: string) {
    this.search(term);
  }

}
