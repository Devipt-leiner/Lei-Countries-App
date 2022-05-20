import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-view-country-page',
  templateUrl: './view-country-page.component.html',
  styles: [`

  `]
})
export class ViewCountryPageComponent implements OnInit {

  country!: Country[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {

    // Recibe un observable y retorna otro observable
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.getCountryByCode(id) ),
        tap(console.log)
      )
      .subscribe(response => this.country = response);

    // this.activateRoute.params.subscribe(({id}) => {
    //   console.log(id);

    //   this.countryService.getCountryByCode(id).subscribe(country => {
    //     console.log(country);
    //   })

    // })
  }

}
