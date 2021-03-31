import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddListComponent } from './add-list/add-list.component';
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
    path: 'add-list',
    component: AddListComponent
  },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
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
