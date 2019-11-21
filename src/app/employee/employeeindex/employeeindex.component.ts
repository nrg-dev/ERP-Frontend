import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-employeeindex',
  templateUrl: './employeeindex.component.html',
  styleUrls: ['./employeeindex.component.css']
})
export class EmployeeindexComponent implements OnInit {
  
  asyncTabs: Observable<ExampleTab[]>;
  ngOnInit() {
  }
  constructor() { 
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([ 
          {label: 'First', content: 'Content 1'},
          {label: 'Second', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]); 
      }, 1000);
    });
  }

  

 


 

}
