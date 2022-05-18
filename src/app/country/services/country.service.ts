import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private URL: string = 'https://restcountries.com/v3.1'

  constructor (private http: HttpClient) { }

  searchCountry (term: string): Observable<Country[]> {
    const URL = `${this.URL}/name/${term}`;
    return this.http.get<Country[]>(URL);
  }

  searchCountryByCapital (term: string): Observable<Country[]> {
    const URL = `${this.URL}/capital/${term}`;
    return this.http.get<Country[]>(URL);
  }

  getCountryByCode (term: string): Observable<Country> {
    const URL = `${this.URL}/alpha?codes=${term}`;
    return this.http.get<Country>(URL);
  }

}
