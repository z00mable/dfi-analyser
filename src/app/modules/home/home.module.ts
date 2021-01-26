import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { BalanceComponent } from './shared/components/balance/balance.component';
import { TotalRewardsComponent } from './shared/components/total-rewards/total-rewards.component';

@NgModule({
  declarations: [
    HomePageComponent,
    BalanceComponent,
    TotalRewardsComponent,
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ]
})

export class HomeModule { }
