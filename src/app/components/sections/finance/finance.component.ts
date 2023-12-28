import { Component } from '@angular/core';
import {
  FinanceService,
  IFinanceData,
} from '../../../services/finance.service';
import { FinanceQuarterTableComponent } from './financeSections/finance-quarter-table/finance-quarter-table.component';
import { FinanceAnnualSummaryTableComponent } from './financeSections/finance-annual-summary-table/finance-annual-summary-table.component';
import { FinanceShareholdersTableComponent } from './financeSections/finance-shareholders-table/finance-shareholders-table.component';
@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [
    FinanceQuarterTableComponent,
    FinanceAnnualSummaryTableComponent,
    FinanceShareholdersTableComponent,
  ],
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css', '../../home/home.component.css'],
})
export class FinanceComponent {
  finance!: IFinanceData;
  year!: number;
  constructor(private finData: FinanceService) {
    this.finance = finData.financeData;
    this.year = finData.financeData.year;
  }
}
