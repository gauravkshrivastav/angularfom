import { Component ,ElementRef,OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent  implements OnInit{

  closeicon="../assets/images/close.png"; 
  theme:any;
  alertdetails:any;
  selectedtitle:any;
  alertdatas:any;
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`
  
#info-header {
  background-color: #018df0;
}

#info-button:hover {
  color: white;
  background-color: #018df0;
}

#confirm-header {
  background-color: #fcba03;
}

#confirm-button:hover {
  color: white;
  background-color: #fcba03;
}

#success-header {
  background-color: #01f084;
}

#success-button:hover {
  color: white;
  background-color: #01f084;
}

#error-header {
  background-color: #f03101;
}

#error-button:hover {
  color: white;
  background-color: #f03101;
}


// .alert {
//     // display: none;
//     position: fixed;
//     z-index: 1;
//     padding-top: 150px;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     overflow: auto;
//     background-color: rgba(0,0,0,0.7);
//     font-family: Arial, Helvetica, sans-serif;
// }
.alert {
  padding: 0;
  border: none; 
  margin: auto;
  width: 100%;
}
.alertmodal.modal-dialog {
  background: transparent;
}


div#success {
  border-right: 1px solid rgb(1 240 132 / 19%);
  border-left: 1px solid rgb(1 240 132 / 19%);
}

div#confirm {
  border-right: 1px solid #ffc8003d;
  border-left: 1px solid #ffc8003d;
} 
div#info {
  border-right: 1px solid rgb(1 141 240 / 28%);
  border-left: 1px solid rgb(1 141 240 / 28%);
}
div#error {
  border-right: 1px solid #f0310124;
  border-left: 1px solid #f0310124;
}

.alert-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border-radius: 3px;
  // width: 40%;
  // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: alert-transition;
  -webkit-animation-duration: 0.4s;
  animation-name: alert-transition;
  animation-duration: 0.4s
}
.alertmodal .modal-content {
  min-height: auto;
}

.alert-title {
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
}

.alert-text {
  text-align: center;
  font-size: 1rem;
  margin: 1rem 0;
}
.alertdiv {
  margin: auto;
  text-align: center;
  margin-top: 5%;
}
.alertmodal.modal-dialog .modal-content {
  background: #eeeeee;
  border: none;
}
button.alertbutton {
  width: 150px;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  border-radius: 3px;
  border: none;
  transition: all .2s cubic-bezier(.22, .61, .36, 1);
  background: #ffff;
  box-shadow: 1px 1px 3px 0px #0000003b;
}
// .alert-close { 

// }

.alert-close:hover,
.alert-close:focus {
  color: rgb(218, 218, 218);
  text-decoration: none;
  cursor: pointer;
}

.alert-body {
  padding: 2px 16px;
}
.alert-body {
  text-align: center;
}
.alert-body i {
  text-align: center;
  margin: 15px auto;
  padding: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center; 
  border-radius: 50%;
}

.alert-body i.fa.fa-check{
  background: #01f084;
  color: #fff;
}

.alert-body i.fa.fa-info-circle{
  background: #2196f3;
  color: #fff;
}
.alert-body i.fa.fa-exclamation-circle{
  background: orange;
  color: #fff;
}
.alert-body i.fa.fa-exclamation-triangle{
  background: #f03101;
  color: #fff;
}
.alert-header {
  padding: 10px 16px;
  color: white; 
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
}
span.alert-close img.closeicon {
  width: 16px;
}
.alert-actions {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 10px 0px;
}

.alert-button {
  width: 150px;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  border-radius: 3px;
  border: none;
  transition: all .2s cubic-bezier(.22, .61, .36, 1);
}

.alert-button:hover {
  transform: translateY(-2px);
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
  .width100{
      width: 100% !important;
  }
  h4.subheader {
      margin: 0px;
      font-size: 1.2rem;
  }
  section.main header {
      padding: 1rem .85rem;
  }
  .modaldialog-width { 
      max-width: 100% !important;
  }
}`
  @ViewChild('myModalClose1') modalClose1:any;
  
  @ViewChild("alert") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  } 
 
  ngOnInit() {
    if(localStorage.getItem("alertdata")) {
      var data1:any =  localStorage.getItem("alertdata");
      this.alertdatas = JSON.parse(data1);
    console.log(">>>>>>>>>>>>>>>>>get data",this.alertdatas);
  
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
