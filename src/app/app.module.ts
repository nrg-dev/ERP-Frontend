import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
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
import { UsermgtModule } from './usermgt/usermgt.module';
import { ReportModule } from './report/report.module';
//import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './_directives/index';
import { AlertService, AuthenticationService,UserService,ServerURL } from './_services/index';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    HeaderComponent,
    LeftmenuComponent,
    LandingpageComponent,    
    DashboardComponent
  ], 
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    EmployeeModule,
    VendorcustomerModule,
    CategoryproductModule,
    PurchaseModule,
    SalesModule,
    FinanceModule,
    StockModule,
    ReportModule,
    UsermgtModule
    
  ], 
 providers: [AlertService,AuthenticationService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
