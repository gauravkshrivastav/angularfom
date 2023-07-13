import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editalert',
  templateUrl: './editalert.component.html',
  styleUrls: ['./editalert.component.scss']
})
export class EditalertComponent implements OnInit {

  bgcolor: any;
  color: any;
  closiconcolor: any;
  themecolor:any;
  submitted = false;
  alertdatas: any; 
  whitetype:any;
  registerForm: FormGroup;
  

  @Output() onclose = new EventEmitter<any>;

 constructor( private router:Router,
     private formBuilder: FormBuilder
    ) {}


  ngOnInit() {
 
    if (localStorage.getItem("alertdata")) {
      var data1: any = localStorage.getItem("alertdata");
      this.alertdatas = JSON.parse(data1);
      console.log("vishnu-v", this.alertdatas);
 

      if(this.alertdatas.bgcolor == "#0070ad"){
        this.themecolor = "blue";
      } else if(this.alertdatas.bgcolor == "#2b0a3d"){
        this.themecolor = "purple";
      } else if(this.alertdatas.bgcolor == "black"){
        this.themecolor = "dark";
      } else if(this.alertdatas.bgcolor == "#F1F4F8"){
        this.themecolor = "light";
      }
      this.registerForm = this.formBuilder.group({ 
        "cardwidth": ['', [Validators.required]],
        "selectedtitle": ['', [Validators.required]], 
        "color": ['', [Validators.required]],
        "alertdetails": ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]]
      });
    }
   
  }
  reloadComponent(self:boolean,urlToNavigateTo ?:string){
    //skipLocationChange:true means dont update the url to / when navigating
   const url=self ? this.router.url : "component/alerts";
   this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this.router.navigate([`/${url}`]).then(()=>{
      //  console.log(`After navigation I am on:${this.router.url}`)
     })
   })
  }

  get f() {
    return this.registerForm.controls;
  }


  onSubmit() {
    console.log(">>>>", this.f);
    this.submitted = true;
    console.log(">>>>>>>>registerForm", this.f);

    if (this.registerForm.invalid) {
      return true;
    } else {

      if (this.registerForm.value['color'] == "blue") {
        this.bgcolor = "#0070ad";
        this.color = "white";
      }
      if (this.registerForm.value['color'] == "purple") {
        this.bgcolor = "#2b0a3d";
        this.color = "white";

      }
      if (this.registerForm.value['color'] == "dark") {
        this.bgcolor = "black";
        this.color = "white";
      }
      if (this.registerForm.value['color'] == "light") {
        this.bgcolor = "#F1F4F8";
        this.color = "#000";
        this.whitetype="whitetype"
      }
      
      const data = {
        "bgcolor":this.bgcolor,  
        "color":this.color,
        "whitetype":this.whitetype,
        "theme": this.registerForm.value.theme,
        "alertdetails": this.registerForm.value['alertdetails'],
        "selectedtitle": this.registerForm.value.selectedtitle,
        "cardwidth": this.registerForm.value.cardwidth,
        "closiconcolor": this.registerForm.value.closiconcolor,
        
      }

      console.log(">>>>>", this.registerForm.value);
      this.onclose.emit();
      localStorage.setItem("alertdata", JSON.stringify(data));
      this.router.navigate(['/component/alerts']);
      this.reloadComponent(true);
    }
  }

} 