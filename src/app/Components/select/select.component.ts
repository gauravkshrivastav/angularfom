import { Component ,ElementRef,OnInit, ViewChild } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  closeicon="../assets/images/close.png";
  color:any;
  selectdata:any;
  dropdownList:any = []; 
  selectedItems:any = [];
  dynamicdata:any  = [];
  updatedropdown:boolean = true;
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`.select_container {

    padding: 20px 20px;
    text-transform: capitalize;
}

.select_container label {
    padding: 5px 0px;
}

.list-inline {
    padding-left: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    li:first-child{
        margin-right: 10px;
    }
    li{
        cursor: pointer;
        button{
            border: none;
            background: transparent;
            padding: 0px;
        }
    }
}`;

  @ViewChild('myModalClose3') modalClose3:any;
  @ViewChild("selector") elRef: ElementRef;

  dropdownSettings:IDropdownSettings={
    singleSelection:false,
    idField: 'id',
    textField: 'helpertext',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 10,
    allowSearchFilter: true,
    defaultOpen:false
  };


  constructor(private router: Router, private commonservice:CommonService, elRef: ElementRef) {
    this.elRef = elRef;
  }


  
   
  ngOnInit() {


    if(localStorage.getItem("selectdata")) {
      var data1:any =  localStorage.getItem("selectdata");
      this.selectdata = JSON.parse(data1);
      this.selectdata.showmultiselct = this.selectdata.selector == "multiselect" ? true : false;
      // var uniqueSet = new Set();
      // this.selectloaddata();
      this.dropdownList = this.selectdata.selectordata;
      // console.log(">>>>>",this.dropdownList);
    // console.log(">>>>>>>>>>>>>>>>>headerdata",this.carddata.uploadimage);
    if(this.selectdata.theme == "dark" || this.selectdata.theme == "blue" || this.selectdata.theme == "purple"){
      this.color = "#fff";
    } else if(this.selectdata.theme == "light"){
      this.color = "#000";
    }
    }

    this.commonservice.selectorstatusdata.subscribe((responsive)=>{
      if(responsive.length != 0) {
       this.updatedropdown = false;
        console.log("selectdata",responsive);
         this.selectdata = responsive;
          this.dropdownList =  this.selectdata.selectordata;

         setTimeout(() => {
          this.selectdata.showmultiselct = this.selectdata.selector == "multiselect" ? true : false;
        }, 0);
        // this.selectloaddata();
         if(this.selectdata.theme == "dark" || this.selectdata.theme == "blue" || this.selectdata.theme == "purple"){
          this.color = "#fff";
        } else if(this.selectdata.theme == "light"){
          this.color = "#000";
        }
        console.log("selectdata",this.dropdownSettings.singleSelection );

      setTimeout(() => {
        this.updatedropdown = true;
      }, 0);



      }
    })

  }

  
  // selectloaddata(){
  //   if(this.selectdata.helpertext1) {
  //     this.dynamicdata.push({id:1,Isvisible:false,class:"Inactive","label":this.selectdata.helpertext1,"description":this.selectdata.description1})
  //   } 
  //   if(this.selectdata.helpertext2) {
  //     this.dynamicdata.push({id:2,Isvisible:false,class:"Inactive","label":this.selectdata.helpertext2,"description":this.selectdata.description2})
  //   }
  //   if(this.selectdata.helpertext3) {
  //     this.dynamicdata.push({id:3,Isvisible:false,class:"Inactive","label":this.selectdata.helpertext3,"description":this.selectdata.description3})
  //   }
  //   if(this.selectdata.helpertext4) {
  //     this.dynamicdata.push({id:4,Isvisible:false,class:"Inactive","label":this.selectdata.helpertext4,"description":this.selectdata.description4})
  //   }


  //   const unique = [...new Map(this.dynamicdata.map((m:any) => [m.id, m])).values()];

  //   this.dropdownList = unique;
  // }


  close(){
    this.modalClose3.nativeElement.click();
  }

  backwindow(){
    localStorage.removeItem("selectdata");
    this.router.navigate(['/component/forms']);

  }


  onItemSelect(item: any) {
    console.log(item);
    console.log(">>>>>>>>>>>>>",this.selectedItems);


  }


  onSelectAll(items: any) {
    console.log(items);
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
  }
  openhtml(){
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
