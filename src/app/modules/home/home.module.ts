import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ]
})

export class HomeModule { }
