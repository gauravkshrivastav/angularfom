import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent  implements OnInit {
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS:any;
  
  @ViewChild('myModalClose2') modalClose1:any;
  @ViewChild("buttons") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
    // this.value = header.getHtmlContent();
  }
  buttondesign:any;
  
  closeicon="../assets/images/close.png";

  ngOnInit() {
  if(localStorage.getItem("button")) {
    var data1:any =  localStorage.getItem("button");
    this.buttondesign = JSON.parse(data1);
  console.log(">>>>>>>>>>>>>>>>>get data",this.buttondesign);
  this.CSS=`
  .subheader{
    color: #0070ad;
}
.btncmp{
    color: black;
}

.backbutton{
    border-radius: 8px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    color: white !important;
    background-color: #0070ad !important;
}
.htmlelement{
    background-color: white;
    overflow-y: scroll;
    width:90%;
    height:400px;
    margin: auto;
    margin-top: 30px;
}
.closeicon{
    cursor: pointer;
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
@media only screen and (max-width: 767px) {
    section.main header {
        padding: 1rem .85rem;
    }
    h4.subheader {
        margin: 0px;
        font-size: 1.2rem;
    }
    .text-center.main-page {
        line-break: anywhere;
    }
    .top-header button { 
        margin-left: 8px;
    }
    .modaldialog-width {
        margin-top: 60px;
        max-width: 100% !important;
    }
} 
Button dynamic CSS
  background:${this.buttondesign.bgcolor},
  color:${this.buttondesign.color}, 
  width:${this.buttondesign.btnwitdth}, 
  border-radius:${this.buttondesign.buttondesign.borderradius}px, 
  border-width:${this.buttondesign.buttondesign.borderwidth}px, 
  padding:${this.buttondesign.btnpadding},
  box-shadow:${this.buttondesign.boxshadow}`;
  }
}
close(){
  this.modalClose1.nativeElement.click();
}
backwindow(){
  this.router.navigate(['/modal']);
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
