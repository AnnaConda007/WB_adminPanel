import { Component } from '@angular/core';
import {
  ProductService,
  IproductList,
} from '../../../services/productsList.service';
import { MatTableModule } from '@angular/material/table';
import { DeliteBtnComponent } from '../../delite-btn/delite-btn.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatTableModule, DeliteBtnComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products!: IproductList[];
  displayedColumns: string[] = [
    'name',
    'price',
    'description',
    'manufacturer',
    'id',
    'delite',
  ];
  dataSource: IproductList[] = [];

  constructor(private productList: ProductService) {
    this.products = this.productList.products;
     this.dataSource = this.products;
  }

  delitePoduct(id: number): void {
    this.dataSource = this.productList.delitePoduct(id);
  }
}
