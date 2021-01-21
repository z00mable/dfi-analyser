import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig, APP_CONFIG } from './configs/app.config';
import { CoreModule } from './core/core.module';
import { HttpErrorHandlerService } from './core/services/http-error-handler.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    HttpErrorHandlerService,
  ],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule { }
