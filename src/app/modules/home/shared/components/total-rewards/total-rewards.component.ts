import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { AppConfig } from 'src/app/configs/app.config';
import { ApiDefichainService } from 'src/app/core/services/api-defichain.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-total-rewards',
  templateUrl: './total-rewards.component.html',
  styleUrls: ['./total-rewards.component.scss']
})
export class TotalRewardsComponent extends BaseComponent implements OnInit {

  public responseTextArea: string = '';

  constructor(
    private apiDefichainService: ApiDefichainService
  ) {
    super();
    this.loadRewards();
  }

  ngOnInit(): void {
  }

  private loadRewards(): void {
    this.apiDefichainService.getAccountDetails(AppConfig.testAddress1).pipe
      (takeUntil(this.ngUnsubscribe))
      .subscribe(
        result => {
          if (result != undefined) {
            this.responseTextArea = JSON.stringify(result) + '\n\n';
          }
        }
      );
  }

}
