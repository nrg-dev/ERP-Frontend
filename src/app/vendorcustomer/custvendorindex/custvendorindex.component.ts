import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custvendorindex',
  templateUrl: './custvendorindex.component.html',
  styleUrls: ['./custvendorindex.component.css']
})
export class CustvendorindexComponent implements OnInit {
  checked1=true;
  checked2=false;
  constructor() { }

  ngOnInit() {
  }

  openCity(id : string) {
    // alert(""+id);
    if(id=="checked1")  {this.checked1=true;this.checked2=false;}
    if(id=="checked2")  {this.checked1=false;this.checked2=true;}

  }
}
