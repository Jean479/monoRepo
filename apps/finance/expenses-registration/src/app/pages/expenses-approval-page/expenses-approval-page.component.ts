import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '@bt-libs/shared/ui/common-components';

@Component({
  selector: 'app-expenses-approval-page',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './expenses-approval-page.component.html',
  styleUrl: './expenses-approval-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpensesApprovalPageComponent {

  handleDataChange($event: any) {
    console.log(' change $event', $event)
  }

}
