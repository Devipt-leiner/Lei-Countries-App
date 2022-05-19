import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app.routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    PresentationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    PresentationComponent
  ]
})
export class SharedModule { }
