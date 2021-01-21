import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConfig } from 'src/app/configs/app.config';
import { ApiAddressModel } from 'src/app/shared/models/api/api-address.model';
import { ApiStatsModel } from 'src/app/shared/models/api/api-stats.model';
import { ApiTxModel } from 'src/app/shared/models/api/api-tx.model';
import { HandleError, HttpErrorHandlerService } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ApiDefichainService {

  private handleError: HandleError;
  private apiUrl: string;
  private apiMainnetUrl: string;

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService,
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('ApiDefichainService');
    this.apiUrl = AppConfig.apiDefichainUrl;
    this.apiMainnetUrl = AppConfig.apiDefichainUrlMainnet;
  }

  public getStats(): Observable<ApiStatsModel | null> {
    return this.http.get<ApiStatsModel | null>(this.apiUrl + '/stats?network=mainnet&q=tokens.supply&pretty')
      .pipe(
        catchError(this.handleError(this.getStats.name, null))
      );
  }

  public getAddressInfoDetails(addressId: string): Observable<ApiAddressModel[] | null> {
    return this.http.get<ApiAddressModel[] | null>(this.apiMainnetUrl + '/address/' + addressId)
      .pipe(
        catchError(this.handleError(this.getAddressInfoDetails.name, null))
      );
  }

  public getTransactionDetails(txId: string): Observable<ApiTxModel[] | null> {
    return this.http.get<ApiTxModel[] | null>(this.apiMainnetUrl + '/tx/' + txId)
      .pipe(
        catchError(this.handleError(this.getStats.name, null))
      );
  }
}
