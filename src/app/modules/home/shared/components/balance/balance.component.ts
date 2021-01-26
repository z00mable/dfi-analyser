import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { AppConfig } from 'src/app/configs/app.config';
import { ApiDefichainService } from 'src/app/core/services/api-defichain.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { TokenBalanceModel } from '../../models/token-balance.model';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent extends BaseComponent implements OnInit {

  public balance: string[] = [];
  public tokens: TokenBalanceModel[] = [];

  constructor(
    private apiDefichainService: ApiDefichainService
  ) {
    super();
    this.loadBalance();
  }

  ngOnInit(): void {
  }

  private loadBalance(): void {
    this.balance = [];
    this.tokens = [];
    this.apiDefichainService.getAccountDetails(AppConfig.testAddress1).pipe
      (takeUntil(this.ngUnsubscribe))
      .subscribe(
        result => {
          if (result != undefined) {
            this.balance = result;
            this.getTokenBalances();
          }
        }
      );
  }

  private getTokenBalances(): void {
    let regexBalance = /\d+\.\d+/;
    let regexCurrency = /[A-Z-]+/;
    this.balance.forEach(
      element => {
        let tokenBalance = element.match(regexBalance);
        let token = element.match(regexCurrency);
        if (token && tokenBalance) {
          let model: TokenBalanceModel = {
            balance: +tokenBalance.toString(),
            name: token.toString(),
          }
          this.tokens.push(model);
        }
      }
    );
  }

}
