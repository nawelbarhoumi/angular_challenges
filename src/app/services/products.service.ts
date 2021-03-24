import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  // Add new product (used in add-product component)
  addProduct(productData: any){
    let products = JSON.parse(localStorage.getItem('products') || '[]');
    products.push(productData);
    localStorage.setItem('products', JSON.stringify(products));
  }

  // Get all products (used in list-products component)
  getAllProducts(){
    let products = JSON.parse(localStorage.getItem('products') || '[]');
    return products;
  }

  // Get product by index (used in update-product component)
  getProductByIndex(i: any){
    let products = JSON.parse(localStorage.getItem('products') || '[]');
    let productData = products[i];
    return productData;
  }

  // Update product by index (used in update-product component)
  updateProductByIndex(index: any, updateProductData: any){
    let products = JSON.parse(localStorage.getItem('products') || '[]');
    products.splice(index, 1, updateProductData);
    localStorage.setItem('products', JSON.stringify(products));

  }
  deleteProduct(i: any){
    let products = JSON.parse(localStorage.getItem('products') || '[]');
    products.splice(i, 1);
    localStorage.setItem('products', JSON.stringify(products))
  }
}
