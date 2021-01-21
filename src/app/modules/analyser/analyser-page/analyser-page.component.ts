import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ApiDefichainService } from 'src/app/core/services/api-defichain.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ApiStatsModel } from 'src/app/shared/models/api/api-stats.model';

@Component({
  selector: 'app-analyser-page',
  templateUrl: './analyser-page.component.html',
  styleUrls: ['./analyser-page.component.scss']
})
export class AnalyserPageComponent extends BaseComponent implements OnInit {

  public testModel: ApiStatsModel | null | undefined;

  constructor(
    private apiDefichainService: ApiDefichainService
  ) {
    super();
    this.test();
  }

  ngOnInit(): void {
  }

  private test() {
    this.apiDefichainService.getStats().pipe
      (takeUntil(this.ngUnsubscribe))
      .subscribe(
        result => {
          this.testModel = result;
        }
      );
  }
}
