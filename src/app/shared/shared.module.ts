import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PrimeNgModule } from './modules/prime-ng.module';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgModule,
  ],
  exports: [
    CommonModule,
    NavigationComponent,
    PrimeNgModule
  ],
})

export class SharedModule { }
