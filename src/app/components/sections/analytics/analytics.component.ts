import { Component } from '@angular/core';
import { AnalyticsMonthlySalesTableComponent } from './analiticsSections/analytics-monthly-sales-table/analytics-monthly-sales-table.component';
import { AnalyticsService } from '../../../services/analytics.service';
import { AnalyticsTopSellingTableComponent } from './analiticsSections/analytics-top-selling-table/analytics-top-selling-table.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    AnalyticsMonthlySalesTableComponent,
    AnalyticsTopSellingTableComponent,
  ],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css', "../../home/home.component.css"],
})
export class AnalyticsComponent {
  year!: number;

  constructor(private analyticsService: AnalyticsService) {
    this.year = this.analyticsService.analytics_data.year;
  }
}
