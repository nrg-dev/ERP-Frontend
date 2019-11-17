import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { HeaderComponent} from './header';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesModule } from './sales/sales.module';
import { EmployeeModule } from './employee/employee.module';
import { VendorcustomerModule } from './vendorcustomer/vendorcustomer.module';
import { CategoryproductModule } from './categoryproduct/categoryproduct.module';
import { PurchaseModule } from './purchase/purchase.module';
import { FinanceModule } from './finance/finance.module';
import { StockModule } from './stock/stock.module';
import { ReportModule } from './report/report.module';
import { UsermgtModule } from './usermgt/usermgt.module';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'landingpage', component: LandingpageComponent,
    children: [
     // { path: '', redirectTo: 'child-one', pathMatch: 'full' },
   //   { path: 'employee', component: EmployeeComponent },
//      { path: '', loadChildren: './sales/sales.module#SalesModule' }
      { path: '', loadChildren: () => EmployeeModule },
      { path: '', loadChildren: () => VendorcustomerModule },
      { path: '', loadChildren: () => CategoryproductModule },
      { path: '', loadChildren: () => PurchaseModule },
      { path: '', loadChildren: () => SalesModule },
      { path: '', loadChildren: () => FinanceModule },
      { path: '', loadChildren: () => StockModule },
      { path: '', loadChildren: () => ReportModule },
      { path: '', loadChildren: () => UsermgtModule }
    
    ],
    
  },
  
  
  // otherwise redirect to login
  //{ path: '**', redirectTo: '' }
  { path: '**', redirectTo: 'login' }

];

@NgModule({
//  imports: [RouterModule.forRoot(routes)],
 imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],

  exports: [RouterModule]
})

export class AppRoutingModule { }
