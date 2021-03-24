import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  index: any;
  submitted = false;
  updateProductForm: FormGroup= new FormGroup({
    productName: new FormControl('', [Validators.required]),
    productDescription: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private ProductsService:ProductsService) { }

  ngOnInit(): void {
    this.index = this.activatedRoute.snapshot.params['i'];
    console.log(this.index);
    
    this.loadProductData();
  }

  loadProductData()
  {
    // let products = JSON.parse(localStorage.getItem('products') || '[]');
    // let productData = products[this.index];
    let productData = this.ProductsService.getProductByIndex(this.index);
    this.updateProductForm.patchValue(productData);
  }

  saveProduct()
  {
    this.submitted = true;
    if(this.updateProductForm.invalid)
    {
      return ;
    }

    // let products = JSON.parse(localStorage.getItem('products') || '[]');
    // products.splice(this.index, 1, this.updateProductForm.value);
    // localStorage.setItem('products', JSON.stringify(products));

    let updateProductData = this.updateProductForm.value;

    this.ProductsService.updateProductByIndex(this.index, updateProductData);

    this.updateProductForm.reset();
    this.submitted = false;

   
     this.router.navigate(['/list-product'])

}
}
