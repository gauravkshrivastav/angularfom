import { Component ,ElementRef,OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-dynamictabs',
  templateUrl: './dynamictabs.component.html',
  styleUrls: ['./dynamictabs.component.scss']
})
export class DynamictabsComponent implements OnInit  {

  dynamictabsdata:any;
  color:any;
  dynamicdata:any = [];
  tabdata:any = []
  closeicon="../assets/images/close.png";
  updatedropdown:boolean = true;
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`.nav.nav-tabs li {
    padding: 10px 5px;
    cursor: pointer;
    width: 12%;
    text-align: center;
}

.tab-content {
    padding: 20px 0px;
}

.dynamics_tab{
    padding: 20px 20px;
    background-color: #fff;
    margin: 30px 0px;
}
.dynamics_tab h3 {
    text-decoration: underline;
    padding: 20px 0px;
}


.Active.dark {
    background-color: #000;
    color: #fff;
}
.Active.blue {
    background-color: #0070ad;
    color: #fff;
}
.Active.purple {
    background-color: #2b0a3d;
    color: #fff;
}
.Active.light {
    background-color: #ebebeb;
    color: #000;
}

.nav-tabs li.Inactive:hover{
    background-color: #737272;

}


.nav-tabs li.Active{
    border-bottom: 2px solid #d6aaaa;
}

.nav-tabs li.Inactive{
    background-color: #ccc;

}


@media only screen and (max-width: 767px) {
    .nav.nav-tabs li {
        width: 100%;
    }
}
`;

  @ViewChild('myModalClose7') modalClose7:any;
  @ViewChild("tabs") elRef: ElementRef;

  constructor(private router : Router, private commonservice:CommonService, elRef: ElementRef) {
    this.elRef = elRef;
  }

  

  ngOnInit() {

    
    if(localStorage.getItem("dynamictabsdata")) {
      var data1:any =  localStorage.getItem("dynamictabsdata");
      this.dynamictabsdata = JSON.parse(data1);
      this.selectloaddata();
      // this.tabdata =  this.dynamictabsdata?.dynamicdata;
      // var uniqueSet = new Set();
    // console.log(">>>>>>>>>>>>>>>>>headerdata",this.carddata.uploadimage);
    this.tabdata.forEach((element:any) => {
      if(element.id == 1) {
        element.Isvisible = true;
        element.class = "Active";

      }
    });

    }

    this.commonservice.tabsstatusdata.subscribe((responsive)=>{

      if(responsive.length != 0) {
       this.updatedropdown = false;
      this.dynamictabsdata = responsive;
      this.selectloaddata();
      // this.tabdata =  responsive?.dynamicdata;
      // var uniqueSet = new Set();
    // console.log(">>>>>>>>>>>>>>>>>headerdata",this.carddata.uploadimage);
    
    setTimeout(() => {
      this.updatedropdown = true;
    }, 0);

    
    this.tabdata && this.tabdata.forEach((element:any) => {
      if(element.id == 1) {
        element.Isvisible = true;
        element.class = "Active";

      }
    });

  }

    });



  }


  selectloaddata(){
    this.dynamicdata = [];
    if(this.dynamictabsdata.helpertext1) {
      this.dynamicdata.push({id:1,Isvisible:false,class:"Inactive","label":this.dynamictabsdata.helpertext1,"description":this.dynamictabsdata.description1})
    } 
    if(this.dynamictabsdata.helpertext2) {
      this.dynamicdata.push({id:2,Isvisible:false,class:"Inactive","label":this.dynamictabsdata.helpertext2,"description":this.dynamictabsdata.description2})
    }
    if(this.dynamictabsdata.helpertext3) {
      this.dynamicdata.push({id:3,Isvisible:false,class:"Inactive","label":this.dynamictabsdata.helpertext3,"description":this.dynamictabsdata.description3})
    }
    if(this.dynamictabsdata.helpertext4) {
      this.dynamicdata.push({id:4,Isvisible:false,class:"Inactive","label":this.dynamictabsdata.helpertext4,"description":this.dynamictabsdata.description4})
    }


    const unique = [...new Map(this.dynamicdata.map((m:any) => [m.id, m])).values()];

    console.log(">>>>>>>>>>>>>>>>",unique);
    this.tabdata = unique;
  }

  
  close(){
    this.modalClose7.nativeElement.click();
  }

  onClick(tabid:any){
    
    this.tabdata.forEach((element:any) => {
      if(element.id == tabid) {
        element.Isvisible = true;
        element.class = "Active";
      } else {
        element.Isvisible = false;
        element.class = "Inactive";


      }
      
    });

  }


  backwindow(){
    this.router.navigate(['/modal']);
    localStorage.removeItem("dynamictabsdata");

  }

  getHtmlContent() {
    //This will return '<p> Text </p>' as a string
    const html = this.elRef.nativeElement.innerHTML;
    const lines = html.split('>');
    var indentSize = 2;
    for (let i = 0; i < lines.length - 1; i++) {
      if (i >= 1 && i < lines.length - 2) {
        // indentSize++;
        // lines[i] = ' '.startsWith('</')
        lines[i] = ' '.repeat(indentSize) + lines[i].trim() + '>';
      } else {
        lines[i] = lines[i].trim() + '>';
      }
    }
    const formattedCode = lines.join('\n');
    // console.log(formattedCode);
    return formattedCode;
  }openhtml(){
    this.htmlcontent = "active";
    this.csscontent = "noactive";
  }

  opencss(){
    this.csscontent = "active";
    this.htmlcontent = "noactive";
  }

  copy(){
    this.Copy="copied!!";
    setTimeout(()=>{
        this.Copy="Copy";
    }, 2000);
  }
}
