import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ByCapitalPageComponent } from "./country/pages/by-capital-page/by-capital-page.component";

import { ByCountryPageComponent } from "./country/pages/by-country-page/by-country-page.component";
import { ByRegionPageComponent } from "./country/pages/by-region-page/by-region-page.component";
import { ViewCountryPageComponent } from "./country/pages/view-country-page/view-country-page.component";

const routes: Routes = [
  {
    path: '',
    component: ByCountryPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: ByRegionPageComponent,
  },
  {
    path: 'capital',
    component: ByCapitalPageComponent,
  },
  {
    path: 'country/:id',
    component: ViewCountryPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule ({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
