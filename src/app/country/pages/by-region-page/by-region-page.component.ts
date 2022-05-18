import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActivated: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  regionActive (region: string) {
    if (region === this.regionActivated) {return;}
    this.regionActivated = region;

    this.countryService.getCountriesByRegion(region).subscribe(response => {
      this.countries = response;
    });
  }
}
