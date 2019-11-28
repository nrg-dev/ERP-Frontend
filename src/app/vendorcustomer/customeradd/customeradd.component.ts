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
    name :'alex',
    contactNumber : '1233'
  },
  {vendorcode:'02',
  name :'nisho',
  contactNumber : '121222'
},
 {vendorcode:'03',
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
  {vendorcode:'07',
  name :'nisho',
  contactNumber : '121222'
},
{vendorcode:'08',
name :'nisho',
contactNumber : '121222'
},
{vendorcode:'09',
name :'nisho',
contactNumber : '121222'
},
{vendorcode:'10',
name :'nisho',
contactNumber : '121222'
},
{vendorcode:'11',
name :'nisho',
contactNumber : '121222'
},
{vendorcode:'12',
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
      document.getElementById(this.tempid).style.backgroundColor='#ccc';
      this.vendordetails = true;
      if(vendorcode == "01"){
        this.model.vendorcode = "01";
        this.model.name = "alex";
        this.model.contactNumber = "112233";
      }else if(vendorcode == "02"){
        this.model.vendorcode = "02";
        this.model.name = "nisho";
        this.model.contactNumber = "123123";
      }
      else if(vendorcode == "03"){
        this.model.vendorcode = "03";
        this.model.name = "josni";
        this.model.contactNumber = "223344";
      }
    }
    
  }
