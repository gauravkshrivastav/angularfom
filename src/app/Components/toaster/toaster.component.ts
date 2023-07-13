import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common-service';


@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit  {



  toasterdata:any;
  color:any;
  closeicon="../assets/images/close.png";

   htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=` button.toaster_btn {
    // color: #fff;
    padding: 10px 40px;
    border-radius: 5px;
    text-transform: capitalize;
}


.htmlelement{
    background-color: var(--color-white);;
    overflow-y: scroll;
    width:90%;
    height:350px;
    margin: auto;
    margin-top: 30px;
    padding-top: 30px;
}
.copybutton{
    text-align: end;
        margin-right: 40px;
        button{
            border: 1.5px solid black;
            background: transparent;
            border-radius: 10px;
            padding: 5px 10px;
        }
        .copyicon{
            margin-right: 5px;
        }
}

.error{
    color: var(--color-red);
}
.top-header{
    h4{
        color: var(--color-wbh-blue);
        span{
            color:var(--color-white);
        }
    }
}
.backbutton{
    border-radius: 8px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    color: var(--color-white) !important;
    background-color: var(--color-wbh-blue) !important;
}
.tabs{
    width: 100%;
    text-align: center;
    margin-top: 30px;
    label{
        margin-right: 10px;
    }
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
}

.active{
    border-bottom: 1px solid black !important;
    padding-bottom: 5px !important;
}`
  @ViewChild('myModalClose7') modalClose7:any;
 
  @ViewChild("toster") elRef: ElementRef;
 
  constructor(private router: Router, elRef: ElementRef, private toastr: ToastrService, private commonservice:CommonService) {
    this.elRef = elRef;
    // this.value = header.getHtmlContent();
  }
  
  ngOnInit() {
    if(localStorage.getItem("toasterdata")) {
      var data1:any =  localStorage.getItem("toasterdata");
      this.toasterdata = JSON.parse(data1);
      if(this.toasterdata.theme == "dark" || this.toasterdata.theme == "blue" || this.toasterdata.theme == "purple"){
        this.color = "#fff";
      } else if(this.toasterdata.theme == "light"){
        this.color = "#000";
      }

    }

    this.commonservice.toasterstatusdata.subscribe((responsive)=>{
      console.log("responsive",responsive);

      if(responsive.length != 0) {
         this.toasterdata = responsive;
         if(this.toasterdata.theme == "dark" || this.toasterdata.theme == "blue" || this.toasterdata.theme == "purple"){
          this.color = "#fff";
        } else if(this.toasterdata.theme == "light"){
          this.color = "#000";
        }
      }
    })

  }


  showmessage(data:any) {
    console.log("vishnu Data",this.toasterdata.message);
    console.log("vishnu Data",this.toasterdata.direction);


    if(data == "success") {
      this.toastr.success(this.toasterdata.message, this.toasterdata.title, {
        positionClass:this.toasterdata.direction
      });

    } else if(data == "warning") {
      this.toastr.warning(this.toasterdata.message, this.toasterdata.title, {
        positionClass:this.toasterdata.direction 

      });

    } else if(data == "information") {
      this.toastr.info(this.toasterdata.message, this.toasterdata.title,{
        positionClass:this.toasterdata.direction 
      });

    } else if(data == "error") {
      this.toastr.error(this.toasterdata.message, this.toasterdata.title,{
        positionClass:this.toasterdata.direction 
      });

    }
 
    console.log(">>>>selectedtitle",data);
  }

  
  close(){
    this.modalClose7.nativeElement.click();
  }


  backwindow(){
    this.router.navigate(['/modal']);
    localStorage.removeItem("toasterdata")
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
