import { Component ,ElementRef,OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

carddata:any;
img:any;
defaultimage="../assets/images/card.jpg";
cardwidth:any;
cardheight:any;
backgroundcard:any;
backgroundbtn:any;
cardcolor:any;
btncolor:any;
nodefaultimage:any;
description:any;
closeicon="../assets/images/close.png";
htmlcontent="active";
csscontent:any;
Copy="Copy";
CSS=`.container{ 
  .card{
      .card-body{
          padding: 0px !important;
          .defaultimage{
              // background-size: cover;
          }
          .card-title{
              margin-top: 15px;
              padding-left: 20px;
          }
          .card-text{
              padding-left: 20px;
              padding-right: 20px;
          }
      }
      .card-footer1{
          width: 100%;
          .footerright{
              float: right;
              padding: 20px;
              .text1{
                  border-radius: 5px;
                  padding: 5px;
                  border:1px solid var(--color-white) ;
              }
              .gap{
                  margin-right: 10px;
              }
          }
      }
  }
}

.cardfotter button.text1.gap {
  padding: 5px 15px !important;
}
@media screen and (min-device-width: 320px) and (max-device-width: 768px) {
  
  section.main header {
      padding: 1rem .85rem;
  }
  .modal-dialog { 
      max-width: 100% !important;
  }
}`


@ViewChild('myModalClose1') modalClose1:any;

@ViewChild("cards") elRef: ElementRef;
constructor(private router : Router, private sanitizer: DomSanitizer,elRef: ElementRef){
  this.elRef = elRef;
}

  
  ngOnInit() {
    if(localStorage.getItem("carddata")) {
      var data1:any =  localStorage.getItem("carddata");
      this.carddata = JSON.parse(data1);
    // console.log(">>>>>>>>>>>>>>>>>headerdata",this.carddata.uploadimage);
      if(this.carddata.cardwidth == "100%"){
        this.cardwidth = 100;
        this.cardheight=250;
        this.description= this.carddata.welcome;
      } else if(this.carddata.cardwidth == "25%"){
        this.cardwidth = 100;
        this.cardheight=150;
        const truncate =(str:any) => {
          return str.length > 10 ? str.substring(0, 65): str;
        };
        this.description= truncate(this.carddata.welcome) + "...";
      } else if(this.carddata.cardwidth == "75%"){
        this.cardwidth = 100;
        this.cardheight=250;
        this.description= this.carddata.welcome;
      } else if(this.carddata.cardwidth == "50%"){
        this.cardwidth = 100;
        this.cardheight=200;
        const truncate =(str:any) => {
          return str.length > 10 ? str.substring(0, 145): str;
        };
        this.description= truncate(this.carddata.welcome) + "...";
      }

      if(this.carddata.theme == "blue"){
        this.backgroundcard = "#0070ad";
        this.cardcolor="white";
        this.backgroundbtn = "white";
        this.btncolor="black";
      } else if(this.carddata.theme == "purple"){
        this.backgroundcard = "#2b0a3d";
        this.cardcolor="white";
        this.backgroundbtn = "white";
        this.btncolor="black";
      } else if(this.carddata.theme == "dark"){
        this.backgroundcard = "black";
        this.cardcolor="white";
        this.backgroundbtn = "white";
        this.btncolor="black";
      } else if(this.carddata.theme == "light"){
        this.backgroundcard = "transparent";
        this.cardcolor="black";
        this.backgroundbtn = "#0070ad";
        this.btncolor="white";
      }

    }
  }

  close(){
    this.modalClose1.nativeElement.click();
  }

  backwindow(){
    this.router.navigate(['/modal']);
  }
  getHtmlContent() {
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

