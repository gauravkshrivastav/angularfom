import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breakpoint',
  templateUrl: './breakpoint.component.html',
  styleUrls: ['./breakpoint.component.scss']
})
export class BreakpointComponent {

  breakdata:any;
  closeicon="../assets/images/close.png";
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  bgcolor:any;
  color:any;
  CSS=`
  .row{
      margin-top: 20px;
      margin-left: 10px;
      margin-right: -2px;
  }
  .column{
      border: 1px solid black;
      // padding: 10px;
  }
  .desc{
     padding: 10px;
      margin: 0px;
      background-color: white;
  }
  .title{
      padding: 10px;
      margin-bottom: 0px;
  }
  
  .copybutton{
      text-align: end;
          margin-right: 40px;
          margin-top: 30px;
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
  .htmlelement {
      background-color: var(--color-white);
      overflow-y: scroll;
      width: 90%;
      height: 400px;
      margin: auto;
      margin-top: 30px;
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
  }
  
  
  @media screen and  (min-width: 768px){
          .col-md-4 {
              flex: 0 0 auto;
              width: 33.33333333%;
              padding-left: 0px;
          }
  }`

  @ViewChild("myModalClose8") ModalClose8:any;
  @ViewChild("breakpoint") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  }

  ngOnInit(){
    if(localStorage.getItem("breakdata")) {
      var data1:any =  localStorage.getItem("breakdata");
      this.breakdata = JSON.parse(data1);

      if(this.breakdata.color == "dark"){
        this.bgcolor="black";
        this.color="white";
      } else if(this.breakdata.color == "blue"){
        this.bgcolor="#0070ad";
        this.color="white";
      } else if(this.breakdata.color == "purple"){
        this.bgcolor="#2b0a3d";
        this.color="white";
      } else if(this.breakdata.color == "light"){
        this.bgcolor="#B7C9E2";
        this.color="black";
      }
    }
  }

  backwindow(){
    this.router.navigate(['/modal']);
  }

  close(){
    this.ModalClose8.nativeElement.click();
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
