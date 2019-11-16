import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendoraddComponent } from './vendoradd/vendoradd.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'vendoradd', component: VendoraddComponent },

];


@NgModule({
  declarations: [VendoraddComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes) 

  ]
})
export class VendorcustomerModule { }
