import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImprintComponent } from './components/imprint/imprint.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PrimeNgModule } from './modules/prime-ng.module';

@NgModule({
  declarations: [
    ImprintComponent,
    NavigationComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    // Modules
    CommonModule,
    FormsModule,
    PrimeNgModule,
    ReactiveFormsModule,
    RouterModule,

    // Shared Components
    ImprintComponent,
    NavigationComponent,
    SearchBarComponent,
  ],
})

export class SharedModule { }
