import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  financeData: IFinanceData = {
    year: 2023,
    quarterly_reports: [
      {
        quarter: 1,
        revenue: 1250000,
        expenses: 950000,
        profit: 300000,
      },
      {
        quarter: 2,
        revenue: 1400000,
        expenses: 980000,
        profit: 420000,
      },
      {
        quarter: 3,
        revenue: 1520000,
        expenses: 1050000,
        profit: 470000,
      },
      {
        quarter: 4,
        revenue: 1600000,
        expenses: 1100000,
        profit: 500000,
      },
    ],
    annual_summary: {
      total_revenue: 5770000,
      total_expenses: 4080000,
      net_profit: 1690000,
    },
    shareholders: [
      {
        name: 'Иванов Иван',
        shares_held: 30,
      },
      {
        name: 'Петров Петр',
        shares_held: 25,
      },
      {
        name: 'Сидорова Ольга',
        shares_held: 20,
      },
      {
        name: 'Козлов Дмитрий',
        shares_held: 15,
      },
      {
        name: 'Смирнова Екатерина',
        shares_held: 10,
      },
    ],
  };

  constructor() {}
}

export interface IFinanceData {
  year: number;
  quarterly_reports: Iquarterly[];
  annual_summary: Innual_summary;
  shareholders: Ishareholder[];
}
export interface Iquarterly {
  quarter: number;
  revenue: number;
  expenses: number;
  profit: number;
}

export interface Innual_summary {
  total_revenue: number;
  total_expenses: number;
  net_profit: number;
}

export interface Ishareholder {
  name: string;
  shares_held: number;
}
