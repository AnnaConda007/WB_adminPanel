import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
  FinanceService,
  IFinanceData,
  Iquarterly,
} from '../../../../../services/finance.service';

@Component({
  selector: 'app-finance-quarter-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './finance-quarter-table.component.html',
  styleUrls: [
    './finance-quarter-table.component.css',
    '../../../../home/home.component.css',
  ],
})
export class FinanceQuarterTableComponent {
  displayedColumns: string[] = ['quarter', 'revenue', 'expenses', 'profit'];
  dataSource: Iquarterly[];

  constructor(private finData: FinanceService) {
    this.dataSource = finData.financeData.quarterly_reports;
  }
}
