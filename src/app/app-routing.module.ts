import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product/new-product.component';




const routes: Routes = [
{
    path:'product',
    component:ProductComponent
  },
  {
    path:'new-product',
    component:NewProductComponent
  },
  {
    path: '', redirectTo: '/product', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
