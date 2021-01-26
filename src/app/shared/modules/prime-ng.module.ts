import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    RippleModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    RippleModule,
  ],
})

export class PrimeNgModule { }
