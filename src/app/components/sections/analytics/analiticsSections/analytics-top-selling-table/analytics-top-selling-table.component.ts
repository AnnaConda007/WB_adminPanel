import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
  AnalyticsService,
  Itop_selling_product,
} from '../../../../../services/analytics.service';

@Component({
  selector: 'app-analytics-top-selling-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './analytics-top-selling-table.component.html',
  styleUrls: [
    './analytics-top-selling-table.component.css',
    '../../../../home/home.component.css',
  ],
})
export class AnalyticsTopSellingTableComponent {
  displayedColumns: string[] = ['name', 'sales_count'];
  dataSource: Itop_selling_product[];

  constructor(private analyticsService: AnalyticsService) {
    this.dataSource = this.analyticsService.analytics_data.top_selling_products;
  }
}
