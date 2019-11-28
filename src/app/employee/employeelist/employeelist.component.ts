import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  user:User;
  model: any = {};
  public empdetails = false;
  employeeList : any = [ 
    {
      empCode:'emp01',
      name :'alex',
      rank: 'Owner',
      contactNumber : '112233'
    },
    {
      empCode:'emp02',
      name :'nisho',
      rank: 'CEO',
      contactNumber : '123123'
    },
    {
      empCode:'emp03',
      name :'josni',
      rank: 'Director',
      contactNumber : '223344',
    },
    {
      empCode:'emp04',
      name :'employee 1',
      rank: 'Managing Director',
      contactNumber : '121212'
    },
    {
      empCode:'emp05',
      name :'employee 2',
      rank: 'Branch Manager',
      contactNumber : '321321'
    },
    {
      empCode:'emp06',
      name :'employee 3',
      rank: 'CEO',
      contactNumber : '159951'
    },
    {
      empCode:'emp01',
      name :'alex',
      rank: 'Owner',
      contactNumber : '112233'
    },
    {
      empCode:'emp02',
      name :'nisho',
      rank: 'CEO',
      contactNumber : '123123'
    },
    {
      empCode:'emp03',
      name :'josini',
      rank: 'Director',
      contactNumber : '223344',
    },
    {
      empCode:'emp04',
      name :'employee 1',
      rank: 'Managing Director',
      contactNumber : '121212'
    },
    {
      empCode:'emp05',
      name :'employee 2',
      rank: 'Branch Manager',
      contactNumber : '321321'
    },
    {
      empCode:'emp06',
      name :'employee 3',
      rank: 'CEO',
      contactNumber : '159951'
    },
  ];

  emptempid = null;

  constructor() { }

  ngOnInit() {

  }

  employeeDetails(empCode:string){
    if(this.emptempid!==null){
      document.getElementById(this.emptempid).style.backgroundColor='white';
      this.emptempid=null;
    }
    this.emptempid = empCode;
    document.getElementById(this.emptempid).style.backgroundColor='#ccc';
    this.empdetails = true;
    if(empCode == "emp01"){
      this.model.empCode = "emp01";
      this.model.name = "alex";
      this.model.rank = "Owner";
      this.model.contactNumber = "112233";
    }else if(empCode == "emp02"){
      this.model.empCode = "emp02";
      this.model.name = "nisho";
      this.model.rank = "CEO";
      this.model.contactNumber = "123123";
    }
    else if(empCode == "emp03"){
      this.model.empCode = "emp03";
      this.model.name = "josni";
      this.model.rank = "Director";
      this.model.contactNumber = "223344";
    }
    else if(empCode == "emp04"){
      this.model.empCode = "emp04";
      this.model.name = "employee 1";
      this.model.rank = "Managing Director";
      this.model.contactNumber = "121212";
    }else if(empCode == "emp05"){
      this.model.empCode = "emp05";
      this.model.name = "employee 2";
      this.model.rank = "Branch Manager";
      this.model.contactNumber = "321321";
    }
    else if(empCode == "emp06"){
      this.model.empCode = "emp06";
      this.model.name = "employee 3";
      this.model.rank = "CEO";
      this.model.contactNumber = "159951";
    }
  }

}