import { Component } from '@angular/core';
import { ReportsCampaignTableComponent } from './sections/reports-campaign-table/reports-campaign-table.component';
import { ReportsService } from '../../../services/reports.service';
@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [ReportsCampaignTableComponent],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css', '../../home/home.component.css'],
})
export class ReportsComponent {
  year!: number;
  constructor(private reportData: ReportsService) {
    this.year = this.reportData.reports.year;
  }
}
