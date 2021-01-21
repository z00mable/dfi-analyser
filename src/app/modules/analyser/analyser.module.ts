import { NgModule } from '@angular/core';
import { ApiDefichainService } from 'src/app/core/services/api-defichain.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnalyserPageComponent } from './analyser-page/analyser-page.component';
import { AnalyserRoutingModule } from './analyser-routing.module';

@NgModule({
  declarations: [
    AnalyserPageComponent,
  ],
  imports: [
    AnalyserRoutingModule,
    SharedModule,
  ],
  providers: [
    ApiDefichainService,
  ]
})

export class AnalyserModule { }
