import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyserPageComponent } from './analyser-page/analyser-page.component';

const routes: Routes = [
  { path: '', component: AnalyserPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AnalyserRoutingModule { }
