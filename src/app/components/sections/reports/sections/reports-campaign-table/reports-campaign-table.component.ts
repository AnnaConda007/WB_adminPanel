import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
  Icampaign,
  ReportsService,
} from '../../../../../services/reports.service';

@Component({
  selector: 'app-reports-campaign-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './reports-campaign-table.component.html',
  styleUrls: [
    './reports-campaign-table.component.css',
    '../../../../home/home.component.css',
  ],
})
export class ReportsCampaignTableComponent {
  displayedColumns: string[] = [
    'campaign_name',
    'start_date',
    'end_date',
    'budget',
    'revenue_generated',
    'new_customers_acquired',
  ];
  dataSource: Icampaign[];

  constructor(private reportData: ReportsService) {
    this.dataSource = this.reportData.reports.marketing_campaigns;
  }
}
