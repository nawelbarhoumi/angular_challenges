import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { Page404Component } from './page404/page404.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/add-post',
    pathMatch: 'full'
  },
  {
    path: 'add-post',
    component: AddPostComponent
  },
  {
    path: 'list-post',
    component: ListPostComponent
  },
  {
    path: 'update-post/:i',
    component: UpdatePostComponent
  },
  { path: 'nom', loadChildren: () => import('./nom/nom.module').then(m => m.NomModule) },
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
