import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  reports: Ireport = {
    year: 2023,
    marketing_campaigns: [
      {
        campaign_name: 'Летняя Распродажа',
        start_date: '2023-06-01',
        end_date: '2023-07-31',
        budget: 50000,
        revenue_generated: 200000,
        new_customers_acquired: 15000,
      },
      {
        campaign_name: 'Черная Пятница',
        start_date: '2023-11-25',
        end_date: '2023-11-29',
        budget: 75000,
        revenue_generated: 350000,
        new_customers_acquired: 25000,
      },
      {
        campaign_name: 'Осенняя Рекламная Акция',
        start_date: '2023-09-01',
        end_date: '2023-10-31',
        budget: 60000,
        revenue_generated: 250000,
        new_customers_acquired: 18000,
      },
      {
        campaign_name: 'Новогодняя Распродажа',
        start_date: '2023-12-01',
        end_date: '2024-01-31',
        budget: 70000,
        revenue_generated: 300000,
        new_customers_acquired: 20000,
      },
    ],
  };
}

export interface Ireport {
  year: number;
  marketing_campaigns: Icampaign[];
}

export interface Icampaign {
  campaign_name: string;
  start_date: string;
  end_date: string;
  budget: number;
  revenue_generated: number;
  new_customers_acquired: number;
}
