import { Component ,ElementRef,OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

   
  @ViewChild("checkbox") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  } 

  checkboxdata:any;

  closeicon="../assets/images/close.png";
 
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`.new {
    padding: 50px; 
    text-align: center;
  }
  
  .new .form-group {
    display: block;
    padding: 6px 0;
    margin: 0 15px 0 0 ;
  }
  
  .new form {
    border: 1px solid;
    display: block;
    width: 50%;
    margin: auto;
    text-align: left;
    padding: 15px;
    position: relative;
  }
  
  label.type-checkbox {
    position: absolute;
    top: -18px;
    background: #eef2f8;
    padding: 2px 8px;
  }
  
  label.type-checkbox span {
    color: red;
  }
  
  .new .form-group label {    
     text-transform: capitalize;
     display: flex;
     align-items: center; 
     position: relative;
  }
  .new .radioclass .form-group label {   
     margin-left: 25px; 
  }
  
  .checkbox-box .form-group label {
    position: relative;
    cursor: pointer;
  }
  
  .checkbox-box .form-group input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }
  
  .checkbox-box .form-group label:before {
    content: '';
    -webkit-appearance: none;
    background-color: transparent; 
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 8px;
    display: inline-block;
    position: relative;
    vertical-align: inherit;
    border-radius: 3px;
    cursor: pointer;
    margin-right: 5px;
  }
  
  
  .checkbox-box .form-group input:checked+label:after {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    left: 8px; 
    width: 5px;
    height: 13px; 
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  .purplecolor .checkbox-box .form-group label:before {
   border: 2px solid #2b0a3d;
  }
  .purplecolor .checkbox-box .form-group input:checked+label:after { 
   content: '';
    border: solid #2b0a3d;  
    border-width: 0 2px 2px 0; 
  }
  .bluecolor .checkbox-box .form-group label:before {
   border: 2px solid #0079bf;
  }
  .bluecolor .checkbox-box .form-group input:checked+label:after { 
   content: '';
    border: solid #0079bf;  
    border-width: 0 2px 2px 0; 
  }
  .darkcolor .checkbox-box .form-group label:before {
   border: 2px solid #000;
  }
  .darkcolor .checkbox-box .form-group input:checked+label:after { 
   content: '';
    border: solid #000;  
    border-width: 0 2px 2px 0; 
  }
  .lightcolor .checkbox-box .form-group label:before {
   border: 2px solid #fff;
  }
  .lightcolor .checkbox-box .form-group input:checked+label:after { 
   content: '';
    border: solid #fff;  
    border-width: 0 2px 2px 0; 
  }
  
  
  .radioclass .form-group input[type="radio"],
  .checkbox input[type="checkbox"] {
    display: none;
  }
  
  .radioclass .form-group label span,
  .checkbox label span{
    position: relative;
    display: flex;
    width: 18px;
    height: 18px;
    border-radius:50%;
    box-sizing: border-box;
    align-items: center;
  }
  
  .radioclass .form-group label span {
   position: absolute;
   left: -25px;
   top: 4px;
  }
  
  
  .radioclass .form-group label span::before,
  .checkbox label span::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: transparent;
    transform: translate(-50%, -50%);
    transition: background-color 0.25s;
  }
  
  
  .darkcolor .radioclass .form-group label span,
  .checkbox label span{ 
   border: 2px solid #000; 
  }
  .bluecolor .radioclass .form-group label span,
  .checkbox label span{ 
   border: 2px solid #0070ad; 
  }
  .purplecolor .radioclass .form-group label span,
  .checkbox label span{ 
   border: 2px solid #2b0a3d; 
  }
  .lightcolor .radioclass .form-group label span,
  .checkbox label span{ 
   border: 2px solid #fff; 
  }
  
  
  
  .darkcolor .radioclass .form-group :checked~label span::before,
  .checkbox :checked~label span::before {
    background-color: #000;
  }
  .bluecolor .radioclass .form-group :checked~label span::before,
  .checkbox :checked~label span::before {
    background-color: #0070ad;
  }
  .purplecolor .radioclass .form-group :checked~label span::before,
  .checkbox :checked~label span::before {
    background-color: #2b0a3d;
  }
  .lightcolor .radioclass .form-group :checked~label span::before,
  .checkbox :checked~label span::before {
    background-color: #fff;
  }
  
  
  
  .htmlelement {
    background-color: var(--color-white);
    overflow-y: scroll;
    width: 90%;
    height: 400px;
    margin: auto;
    margin-top: 30px;
  }
  
  .copybutton {
    text-align: end;
    margin-right: 40px;
    margin-top: 30px;
  
    button {
      border: 1.5px solid black;
      background: transparent;
      border-radius: 10px;
      padding: 5px 10px;
    }
  
    .copyicon {
      margin-right: 5px;
    }
  }
  
  .list-inline {
    padding-left: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    margin-top: 30px;
  
    li:first-child {
      margin-right: 10px;
    }
  
    li {
      cursor: pointer;
  
      button {
        border: none;
        background: transparent;
        padding: 0px;
      }
    }
  }
  
  .active {
    border-bottom: 1px solid black !important;
    padding-bottom: 5px !important;
  }
  
  
  @media only screen and (max-width: 767px) {
    .width100 {
      width: 100% !important;
    }
     
    .top-header div:first-child {
      width: 50%;
    }
  
    .new {
      padding: 40px 15px;
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

  @ViewChild ("myModalClose2") modalClose2:any;
  ngOnInit(){
    if(localStorage.getItem("checkboxdata")) {
      var data1:any =  localStorage.getItem("checkboxdata");
      this.checkboxdata = JSON.parse(data1);
      console.log(">>>>>>",this.checkboxdata);
    }
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

  close(){
    this.modalClose2.nativeElement.click();
  }
  
  backwindow(){
    this.router.navigate(['/component/forms']);
  } 

}
