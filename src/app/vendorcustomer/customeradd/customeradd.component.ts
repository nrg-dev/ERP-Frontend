import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customeradd',
  templateUrl: './customeradd.component.html',
  styleUrls: ['./customeradd.component.css']
})
export class CustomeraddComponent implements OnInit {
  public vendordetails = false;
  model:any ={};

  vendorList : any = [ {
    vendorcode:'01',
    name :' Ubalton',
    contactNumber : '1233',
    address : 'No 2, North Street,jakarta,Indonesia',
    country :  'India',
    email : 'alex@gmail.com'
  },
  {vendorcode:'02',
  name :'Nisho',
  contactNumber : '121222',
  address : 'No 2, North Street,jakarta,India',
  country :  'china',
  email : 'nisho@gmail.com'
},
 {vendorcode:'03',
  name :'josini',
  contactNumber : '1233',
  address : 'No 2, North Street,jakarta,Indonesia',
  country :  'dubai',
  email : 'josini@gmail.com'
},
  {vendorcode:'04',
    name :'nisho',
    contactNumber : '121222',
    address : 'No 2, North Street,jakarta,Indonesia',
    country :  'uk',
    email : 'Nisholin@gmail.com'
},
{vendorcode:'05',
    name :'hendry',
    contactNumber : '121222',
    address : 'No 2, North Street,jakarta,Indonesia',
    country :  'us',
    email : 'hendry@gmail.com'
},
{vendorcode:'06',
    name :'robert',
    contactNumber : '121222',
    address : 'No 2, North Street,jakarta,Indonesia',
    country :  'malysia',
    email : 'robert@gmail.com'
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
        this.model.vendorcode = "01";
        this.model.name = "ubalton";
        this.model.contactNumber = "112233";
        this.model.address = 'No 2, North Street,jakarta,Indonesia';
        this.model.country = "India";
        this.model.email = "alex@gmail.com";
      }else if(vendorcode == "02"){
        this.model.vendorcode = "02";
        this.model.name = "nisholin";
        this.model.address = 'No 2, North Street,jakarta,India';
        this.model.contactNumber = "123123";
        this.model.email = "nisho@gmail.com";
      }
      else if(vendorcode == "03"){
        this.model.vendorcode = "03";
        this.model.name = "josni";
        this.model.address = 'No 2, North Street,jakarta,Indonesia';
        this.model.contactNumber = "223344";
        this.model.email = "josini@gmail.com";
      }
    }
    
  }