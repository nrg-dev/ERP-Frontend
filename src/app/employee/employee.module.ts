import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeereportComponent } from './employeereport/employeereport.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'employeeadd', component: EmployeeaddComponent },
  { path: 'employeelist', component: EmployeelistComponent },
  { path: 'employeereport', component: EmployeereportComponent }
];


@NgModule({
  declarations: [EmployeeaddComponent, EmployeelistComponent, EmployeereportComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes) 
  ]
})
export class EmployeeModule { }
