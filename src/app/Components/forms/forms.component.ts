import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
 
  constructor(private router: Router) {

  }
  
@ViewChild("myModalClose") ModalClose:any;
@ViewChild("myModalClose1") ModalClose1:any;
@ViewChild("myModalClose2") ModalClose2:any
@ViewChild("myModalClose3") ModalClose3:any
@ViewChild("myModalClose4") ModalClose4:any
@ViewChild("myModalClose5") ModalClose5:any
@ViewChild("myModalClose6") ModalClose6:any
@ViewChild("myModalClose7") ModalClose7:any
@ViewChild("myModalClose8") ModalClose8:any
@ViewChild("myModalClose9") ModalClose9:any

 
  formscomponentarray = [
    {id:1,name:"Input/Textarea"},
    {id:2,name:"Checkbox/Radio"},
    {id:3,name:"Select"},
    {id:4,name:"Switch Control"},
    {id:5,name:"Date & Time Picker"},
    {id:6,name:"Progressbar"},
    {id:7,name:"Range"},
    {id:8,name:"File Upload"}, 
    // {id:9,name:"Loader"}, 

];
 
formsubheading = "This components help to create and customize the";
closeicon="../assets/images/close.png";


close(){
  this.ModalClose.nativeElement.click();
  this.ModalClose1.nativeElement.click();
  this.ModalClose2.nativeElement.click();
  this.ModalClose3.nativeElement.click();
  this.ModalClose4.nativeElement.click();
  this.ModalClose5.nativeElement.click();
  this.ModalClose6.nativeElement.click();
  this.ModalClose7.nativeElement.click();
  this.ModalClose8.nativeElement.click(); 
  this.ModalClose9.nativeElement.click(); 

  console.log(">>>>> >>>>vishnu>>>>>>>");
}


  backwindow(){
    this.router.navigate(['/modal']);
  } 

  turncate=(str:any)=>{
    return str.length>10? str.substring(0,95):str;
  } 

 

}
