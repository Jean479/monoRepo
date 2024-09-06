import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TableComponent } from '@bt-libs/shared/ui/common-components';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-expenses-approval-page',
  standalone: true,
  imports: [CommonModule, TableComponent],
  providers: [
    DatePipe
  ],
  // providers: [
  //   {provide: LoggerService, useExisting: BetterLoggerService}
  // ],
  templateUrl: './expenses-approval-page.component.html',
  styleUrl: './expenses-approval-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpensesApprovalPageComponent implements OnInit {


  private loggerService = inject(LoggerService);

  private datePipe = inject(DatePipe);

  data = 'initData';

  handleDataChange($event: any) {
    console.log(' change $event', $event);

    console.log('expenses data:', this.data);
  }

  ngOnInit(): void {
    this.loggerService.info('Message à logger ExpensesApprovalPageComponent');
    this.loggerService.list();

    
    const dd = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
    console.log(' dd:', dd);
    
  }

}
