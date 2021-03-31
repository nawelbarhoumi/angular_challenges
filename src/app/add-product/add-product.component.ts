import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
// import { matchNameDescriptionValidator } from '../validators/user-name.validator';
// import { forbiddenProductNameValidator } from '../validators/user-name.validator';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  submitted = false;
  addProductForm: FormGroup = new FormGroup({
    productName: new FormControl('', [Validators.required, /*forbiddenProductNameValidator(/coka/)*/]),
    productDescription: new FormControl('', [Validators.required, Validators.minLength(8)]),
    quantity: new FormControl('', [Validators.required]),
  }, {validators: [/*matchNameDescriptionValidator*/]})
  constructor( private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct()
  {
    this.submitted = true;
    if(this.addProductForm.invalid)
    {
      return ;
    }

    // let products = JSON.parse(localStorage.getItem('products') || '[]');
    // products.push(this.addProductForm.value);
    // localStorage.setItem('products', JSON.stringify(products));
    let productData = this.addProductForm.value;

    this.productsService.addProduct(productData)

    this.addProductForm.reset();
    this.submitted = false;

    this.router.navigate(['/list-product'])
  }

}