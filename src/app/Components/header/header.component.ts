import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title = "";
  img1="../assets/images/WellBeingHubLogo.png";
  img2="../assets/images/notify.png";
  img3="../assets/images/cg_logo.svg";
  img4="../assets/images/Capgemini white logo.png";
  whitewbh="../assets/images/WBH logo-on dark surface.png";
  closeicon="../assets/images/close.png";

  headerdata:any;
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`.header
  { 
      height:75px ; 
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%; 
  }
  .div1{ 
      display: flex;
      align-items: center;
  }
  .sub-div{
      padding-right: 0.85rem;
      display: flex;
      align-items: center;
  }
  .img1
  {
      padding-left: 24px; 
      height: 45px;  
  }
  
  .label1
  {
      color: var(--color-wbh-blue); 
      margin-left: 13px;  
      font-size:24px;  
      font-family:Ubuntu;
  }
  
  .img2
  {
      height:22px;  
  }
  
  .label2
  {
      color: var(--color-wbh-blue); 
      margin-left: 8px;
      font-size: 20px;
      font-family: Ubuntu;
  }
  .img3
  {
      height:35px;  
      margin-left:23px;
  }
  
  h4.subheader {
      margin-left: 8px;
  }
  .username {
      display: flex;
      align-items: center;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 768px) {
      .top-header{
          display: block;
          box-shadow: none;
          .button-sec{
              position: absolute;
              right: 12px;
              top: 12px;
          }
      }
      h4.subheader {
          margin-left: 0px;
          font-size: 1.2rem;
      }
      .username {
          display: flex;
          text-align: center;
          .img2 {
              height: 22px;
              margin: auto;
          }
          .label2 {  
              font-size: 15px; 
          }
      }
      .header{
          display: flex;
          width: 100%;
          justify-items: center; 
          justify-content: space-between;
          .div1{
              width: 100%;
              // display: grid;
              // width: 100%;
              // justify-items: center;
              .subdiv{
                  .img1 {
                      padding-left: 0.85rem;
                      height: 2.2rem; 
                  }
              }
          }
          .img3{
              margin-left: 10px;
              width: 120px;
              height: initial;
          }
          .div2{
              .sub-div{
                   
                 .capgeminilogo{
                  display: none;
                 }
              }
          }
          .label1{
              color: var(--color-wbh-blue);
              margin-left: 6px;
              font-size: 20px;
              font-family: Ubuntu;
          }
      }
      section.main header {
          padding: 1rem .85rem;
      }
      .modal-dialog { 
          max-width: 100% !important;
      }
  }
  
  @media screen and (min-device-width: 320px) and (max-device-width: 350px) {
      .username {
          display: inline-block;
      }
  }`

  @ViewChild('myModalClose1') modalClose1:any;
  @ViewChild("myheader") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  }
  
  ngOnInit() {
    if(localStorage.getItem("data")) {
      var data1:any =  localStorage.getItem("data");
      this.headerdata = JSON.parse(data1);
    // console.log(">>>>>>>>>>>>>>>>>headerdata",this.headerdata);

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

