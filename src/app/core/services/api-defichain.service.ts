import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConfig } from 'src/app/configs/app.config';
import { ApiAddressModel } from 'src/app/shared/models/api/api-address.model';
import { ApiBlockHashModel } from 'src/app/shared/models/api/api-block-hash.model';
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

  public getAccountDetails(addressId: string): Observable<string[] | null> {
    return this.http.get<string[] | null>(this.apiUrl + '/getaccount?owner=' + addressId)
      .pipe(
        catchError(this.handleError(this.getAccountDetails.name, null))
      );
  }

  public getAddressDetails(addressId: string): Observable<ApiAddressModel[] | null> {
    return this.http.get<ApiAddressModel[] | null>(this.apiMainnetUrl + '/address/' + addressId)
      .pipe(
        catchError(this.handleError(this.getAddressDetails.name, null))
      );
  }

  public getAddressTransactionDetails(addressId: string): Observable<ApiAddressModel[] | null> {
    return this.http.get<ApiAddressModel[] | null>(this.apiMainnetUrl + '/address/' + addressId + '/txs?limit=1000')
      .pipe(
        catchError(this.handleError(this.getAddressTransactionDetails.name, null))
      );
  }

  public getTransactionDetails(txId: string): Observable<ApiTxModel[] | null> {
    return this.http.get<ApiTxModel[] | null>(this.apiMainnetUrl + '/tx/' + txId)
      .pipe(
        catchError(this.handleError(this.getTransactionDetails.name, null))
      );
  }

  public getTransactionDetailsForBlockHash(blockHashId: string): Observable<ApiTxModel[] | null> {
    return this.http.get<ApiTxModel[] | null>(this.apiMainnetUrl + '/tx?blockHash=' + blockHashId)
      .pipe(
        catchError(this.handleError(this.getTransactionDetailsForBlockHash.name, null))
      );
  }

  public getBlockHashDetails(blockHashId: string): Observable<ApiBlockHashModel[] | null> {
    return this.http.get<ApiBlockHashModel[] | null>(this.apiMainnetUrl + '/block/' + blockHashId)
      .pipe(
        catchError(this.handleError(this.getBlockHashDetails.name, null))
      );
  }
}
