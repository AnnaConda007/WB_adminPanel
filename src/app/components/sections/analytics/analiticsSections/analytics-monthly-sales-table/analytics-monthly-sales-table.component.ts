import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AnalyticsService } from '../../../../../services/analytics.service';

@Component({
  selector: 'app-analytics-monthly-sales-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './analytics-monthly-sales-table.component.html',
  styleUrls: [
    './analytics-monthly-sales-table.component.css',
    '../../../../home/home.component.css',
  ],
})
export class AnalyticsMonthlySalesTableComponent {
  displayedColumns: string[] = ['month', 'total_revenue'];
  dataSource: ImonthAnalityc[];

  constructor(private analyticsService: AnalyticsService) {
    const monthlySales = this.analyticsService.analytics_data.monthly_sales;
    this.dataSource = Object.keys(monthlySales).map((month) => {
      return {
        month: month,
        total_revenue: monthlySales[month],
      };
    });
  }
}
interface ImonthAnalityc {
  month: string;
  total_revenue: number;
}
