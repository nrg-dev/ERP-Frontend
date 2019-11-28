import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-vendoradd',
  templateUrl: './vendoradd.component.html',
  styleUrls: ['./vendoradd.component.css']
})
export class VendoraddComponent implements OnInit {

  public vendordetails = false;
  model:any ={};

  vendorList : any = [ {
    vendorcode:'No 2, North Street,jakarta,Indonesia',
    name :'Alex Ubalton',
    contactNumber : '1233',
    country :  'India'
  },
  {vendorcode:' No 2, North Street,jakarta,India',
  name :'Nisholine',
  contactNumber : '121222',
  country :  'India'
},
 {vendorcode:' No 2, North Street,jakarta,Indonesia',
  name :'josini',
  contactNumber : '1233',
},
  {vendorcode:'04',
    name :'nisho',
    contactNumber : '121222'
},
{vendorcode:'05',
    name :'nisho',
    contactNumber : '121222'
},
{vendorcode:'06',
    name :'nisho',
    contactNumber : '121222'
},

];

  constructor() { }

  ngOnInit() {
  }
   tempid=null;
  vendorDetails(vendorcode:string){
    if(this.tempid!==null){
      document.getElementById(this.tempid).style.backgroundColor='white';
      this.tempid=null;

    }
    this.tempid=vendorcode;
    document.getElementById(this.tempid).style.backgroundColor='#DDEDF9';

    this.vendordetails = true;
    if(vendorcode == "01"){
      this.model.vendorcode = "No 2, Est street , Jakarta , India";
      this.model.name = "alex";
      this.model.contactNumber = "112233";
      this.model.country = "India";
    }else if(vendorcode == "02"){
      this.model.vendorcode = "02";
      this.model.name = "nisho";
      this.model.contactNumber = "123123";
    }
    else if(vendorcode == "03"){
      this.model.vendorcode = "emp03";
      this.model.name = "josni";
      this.model.contactNumber = "223344";
    }
  }
  
}