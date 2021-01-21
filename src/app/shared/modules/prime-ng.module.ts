import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    ButtonModule,
    InputTextModule,
    RippleModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    RippleModule,
  ],
})

export class PrimeNgModule { }
