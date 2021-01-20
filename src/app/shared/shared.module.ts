import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PrimeNgModule } from './modules/prime-ng.module';

@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NavigationComponent,
    PrimeNgModule,
    ReactiveFormsModule,
  ],
})

export class SharedModule { }
