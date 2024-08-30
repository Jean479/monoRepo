import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SampleServiceService } from '../../services/sample-service.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-expenses-overview-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './expenses-overview-page.component.html',
  styleUrl: './expenses-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpensesOverviewPageComponent implements OnInit {

  private sampleServiceService = inject(SampleServiceService);
  private loggerService = inject(LoggerService);
 
  ngOnInit(): void {
    console.log(' sampleServiceService', this.sampleServiceService.data);
    this.loggerService.info('Message à logger ExpensesOverviewPageComponent');
    this.loggerService.list();

  }
}
