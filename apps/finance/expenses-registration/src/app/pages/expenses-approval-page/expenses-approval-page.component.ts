import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '@bt-libs/shared/ui/common-components';
import { BetterLoggerService } from '../../services/better-logger.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-expenses-approval-page',
  standalone: true,
  imports: [CommonModule, TableComponent],
  providers: [
    {provide: LoggerService, useExisting: BetterLoggerService}
  ],
  templateUrl: './expenses-approval-page.component.html',
  styleUrl: './expenses-approval-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpensesApprovalPageComponent implements OnInit {


  private loggerService = inject(LoggerService);

  data = 'initData';

  handleDataChange($event: any) {
    console.log(' change $event', $event);

    console.log('expenses data:', this.data);
  }

  ngOnInit(): void {
    this.loggerService.info('Message à logger ExpensesApprovalPageComponent');
    this.loggerService.list();
  }

}
