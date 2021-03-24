import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { Page404Component } from './page404/page404.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/add-product',
    pathMatch: 'full'
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'list-product',
    component: ListProductComponent
  },
  {
    path: 'update-product/:i',
    component: UpdateProductComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
