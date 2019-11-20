import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product',
    loadChildren: () => import('./product-page/product-page.module').then(m => m.ProductPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category-page/category-page.module').then(m => m.CategoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
