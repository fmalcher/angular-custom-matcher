import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment, UrlMatcher } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const productMatcher: UrlMatcher = (url: UrlSegment[]) => {
  const path = url[0].path;
  if (url.length === 1 && path.includes('-') && path.endsWith('.html')) {
    const [identifier, skuDotHtml] = url[0].path.split('-').slice(-2);

    if (identifier  === 'p') {
      const sku = skuDotHtml.split('.')[0]; // 123.html => 123
      return {
        consumed: url,
        posParams: {
          sku: new UrlSegment(sku, {})
        }
      };
    }
  }
};


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    matcher: productMatcher,
    loadChildren: () => import('./product-page/product-page.module').then(m => m.ProductPageModule)
  },
  {
    path: ':categorySlug/c',
    loadChildren: () => import('./category-page/category-page.module').then(m => m.CategoryPageModule)
  },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
