import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from './components/sections/reports/reports.component';
import { ProductsComponent } from './components/sections/products/products.component';
import { UsersComponent } from './components/sections/users/users.component';
import { FinanceComponent } from './components/sections/finance/finance.component';
import { AnalyticsComponent } from './components/sections/analytics/analytics.component';
  
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'section', 
        children: [
          { path: 'reports', component: ReportsComponent },
          { path: 'products', component: ProductsComponent },
          { path: 'users', component: UsersComponent },
          { path: 'finance', component: FinanceComponent },
          { path: 'analytics', component: AnalyticsComponent }
        ]
      }
    ],
  },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
