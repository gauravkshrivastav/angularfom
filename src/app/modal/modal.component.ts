import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

constructor(private router: Router){}

  @ViewChild('myModalClose') modalClose:any;
  @ViewChild('myModalClose1') modalClose1:any;
  @ViewChild('myModalClose2') modalClose2:any;
  @ViewChild('myModalClose3') modalClose3:any;
  @ViewChild('myModalClose4') modalClose4:any;
  @ViewChild('myModalClose5') modalClose5:any;
  @ViewChild('myModalClose6') modalClose6:any;
  @ViewChild('myModalClose7') modalClose7:any;
  @ViewChild('myModalClose8') modalClose8:any;
  @ViewChild('myModalClose9') modalClose9:any;
  @ViewChild('myModalClose10') modalClose10:any;
  @ViewChild('myModalClose11') modalClose11:any;
  @ViewChild('myModalClose12') modalClose12:any;
  @ViewChild('myModalClose13') modalClose13:any;

  

  array = [
    {id:1,name:"Header"},
    {id:2,name:"Card"},
    {id:3,name:"Button"},
    {id:4,name:"Navbar"},
    {id:5,name:"Footer"},
    {id:6,name:"Tooltip"},
    {id:7,name:"Alert"},
    {id:8,name:"Toaster"},
    {id:9,name:"Forms"},
    {id:10,name:"Table"},
    {id:11,name:"Loader"},
    {id:12,name:"Tabs"},
    {id:13,name:"LogIn/SignUp"},
    {id:14,name:"Image Slider"},
    {id:15,name:"BreakPoint"}
];

subheading = "This components help to create and customize the";


closeicon="../assets/images/close.png";

close(){

  this.modalClose.nativeElement.click();
  this.modalClose1.nativeElement.click();
  this.modalClose2.nativeElement.click();
  this.modalClose3.nativeElement.click();
  this.modalClose4.nativeElement.click();
  this.modalClose5.nativeElement.click();
  this.modalClose6.nativeElement.click();
  this.modalClose7.nativeElement.click();
  this.modalClose8.nativeElement.click();
  this.modalClose9.nativeElement.click();
  this.modalClose10.nativeElement.click();
  this.modalClose11.nativeElement.click();
  this.modalClose12.nativeElement.click();
  this.modalClose13.nativeElement.click();


  console.log(">>>>>>>>>>>>>>>>");
}

routetocomp() {
  this.router.navigate(['/component/forms']);

}


truncate =(str:any) => {
  return str.length > 10 ? str.substring(0, 95): str;
};

}
