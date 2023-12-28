import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  analytics_data: Ianalytics = {
    year: 2023,
    monthly_sales: {
      January: 120000,
      February: 145000,
      March: 160000,
      April: 155000,
      May: 170000,
      June: 185000,
      July: 190000,
      August: 195000,
      September: 180000,
      October: 165000,
      November: 150000,
      December: 140000,
    },
    top_selling_products: [
      {
        product_name: '4K Смарт ТВ Sony Bravia',
        sales_count: 3500,
      },
      {
        product_name: 'Планшет Apple iPad Air',
        sales_count: 3200,
      },
      {
        product_name: 'Цифровая камера Canon EOS 90D',
        sales_count: 3100,
      },
      {
        product_name: 'Смартфон Xiaomi Mi 11',
        sales_count: 3000,
      },
      {
        product_name: 'Смартфон Samsung Galaxy S21 Ultra',
        sales_count: 2800,
      },
    ],
  };

  constructor() {}
}
export interface Ianalytics {
  year: number;
  monthly_sales: { [month: string]: number };
  top_selling_products: Itop_selling_product[];
}

export interface Itop_selling_product {
  product_name: string;
  sales_count: number;
}
