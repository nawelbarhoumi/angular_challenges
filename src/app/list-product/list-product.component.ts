import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  products: any; //= JSON.parse(localStorage.getItem('products') || '[]');
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }

  deleteProduct(i: any){
   this.productsService.deleteProduct(i);
   this.products = this.productsService.getAllProducts();
  }

}
