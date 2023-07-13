import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent  implements OnInit {


  color:any;
  closeicon="../assets/images/close.png";
  updatedropdown:boolean = true;
  @ViewChild('myModalClose6') ModalClose6:any;
  @ViewChild("progress") elRef: ElementRef;
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`.progress {
    width: 75%;
    height: 29px;
    margin: auto;
}
.progress-bar {
    font-size: 15px;
}
.progresstitle {
    text-align: center;
    padding: 20px;
    font-size: 20px;
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
}`



  
  progressdata:any;

  constructor(private router: Router, elRef: ElementRef, private commonservice:CommonService) {
    this.elRef = elRef;
  }


  
  ngOnInit() {
    if(localStorage.getItem("progressdata")) {
      var data1:any =  localStorage.getItem("progressdata");
      this.progressdata = JSON.parse(data1);
      
      if(this.progressdata.theme == "dark" || this.progressdata.theme == "blue" || this.progressdata.theme == "purple"){
        this.color = "#fff";
      } else if(this.progressdata.theme == "light"){
        this.color = "#000";
      }   
    }

    this.commonservice.progressstatusdata.subscribe((responsive)=>{
      console.log("responsive",responsive);

      if(responsive.length != 0) {
      this.updatedropdown = false;
      this.progressdata = responsive; 
         if(this.progressdata.theme == "dark" || this.progressdata.theme == "blue" || this.progressdata.theme == "purple"){
          this.color = "#fff";
        } else if(this.progressdata.theme == "light"){
          this.color = "#000";
        }
        setTimeout(() => {
          this.updatedropdown = true;
        }, 0);
      }
    })


  }




  
  close(){
    this.ModalClose6.nativeElement.click();
  }



  backwindow(){
    localStorage.removeItem("progressdata");
    this.router.navigate(['/component/forms']);

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
