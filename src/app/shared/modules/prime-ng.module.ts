import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    RippleModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    RippleModule,
  ],
})

export class PrimeNgModule { }
