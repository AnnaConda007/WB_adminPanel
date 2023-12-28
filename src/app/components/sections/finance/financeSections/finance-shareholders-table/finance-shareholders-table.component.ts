import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
  FinanceService,
  Ishareholder,
} from '../../../../../services/finance.service';

@Component({
  selector: 'app-finance-shareholders-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './finance-shareholders-table.component.html',
  styleUrls: [
    './finance-shareholders-table.component.css',
    '../../finance.component.css',
  ],
})
export class FinanceShareholdersTableComponent {
  displayedColumns: string[] = ['name', 'shares_held'];
  dataSource: Ishareholder[];

  constructor(private finData: FinanceService) {
    this.dataSource = finData.financeData.shareholders;
  }
}
