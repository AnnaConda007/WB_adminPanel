import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
  FinanceService,
  Innual_summary,
} from '../../../../../services/finance.service';

@Component({
  selector: 'app-finance-annual-summary-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './finance-annual-summary-table.component.html',
  styleUrls: [
    './finance-annual-summary-table.component.css',
    '../../../../home/home.component.css',
  ],
})
export class FinanceAnnualSummaryTableComponent {
  displayedColumns: string[] = [
    'total_revenue',
    'total_expenses',
    'net_profit',
  ];
  dataSource: Innual_summary[];

  constructor(private finData: FinanceService) {
    this.dataSource = [finData.financeData.annual_summary];
  }
}
