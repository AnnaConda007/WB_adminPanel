import { Component } from '@angular/core';
import {
  ProductService,
  IproductList,
} from '../../../services/productsList.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
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
    console.log(this.products);
    this.dataSource = this.products;
  }

  delitePoduct(id: number): void {
    this.productList.products = this.productList.products.filter(
      (product) => product.id != id
    );
    this.dataSource = this.productList.products;
  }
}
