import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { AppConfig } from 'src/app/configs/app.config';
import { ApiDefichainService } from 'src/app/core/services/api-defichain.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ApiAddressModel } from 'src/app/shared/models/api/api-address.model';

@Component({
  selector: 'app-analyser-page',
  templateUrl: './analyser-page.component.html',
  styleUrls: ['./analyser-page.component.scss']
})
export class AnalyserPageComponent extends BaseComponent implements OnInit {

  public testModel: ApiAddressModel[] | null | undefined;
  public responseTextArea: string = '';

  constructor(
    private apiDefichainService: ApiDefichainService
  ) {
    super();
    this.test();
  }

  ngOnInit(): void {
  }

  private test() {
    this.apiDefichainService.getAddressTransactionDetails(AppConfig.testAddress1).pipe
      (takeUntil(this.ngUnsubscribe))
      .subscribe(
        result => {
          this.testModel = result;
          if (result != undefined) {
            this.responseTextArea = JSON.stringify(result);
          }
        }
      );
  }
}
