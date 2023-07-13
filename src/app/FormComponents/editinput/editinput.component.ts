import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editinput',
  templateUrl: './editinput.component.html',
  styleUrls: ['./editinput.component.scss']
})
export class EditinputComponent {
  submitted = false;
  registerForm: FormGroup;
  radiusvalue: any;
  bgcolor: any;
  whitetype: any;
  inputgetdata: any;
  boxshadowchecked:any;
  noboxshadowchecked:any;
  color: any;
  theme: any;
  @Output() onclose = new EventEmitter<any>;
  nodefaultimage: any;
  storage: any;
  imageform: any;
 
  constructor(private router: Router,
    private formBuilder: FormBuilder) {

  }



  ngOnInit() {
    if (localStorage.getItem("inputdata")) {
      var data1: any = localStorage.getItem("inputdata");
      this.inputgetdata = JSON.parse(data1);
      console.log("vishnu-v", this.inputgetdata);
 
    }

   
    this.registerForm = this.formBuilder.group({ 
      image: [this.boxshadowValue2(), [Validators.required]], 
      theme: [''], 
      fieldtype: ['', [Validators.required]],
      cardwidth: ['', [Validators.required]],
      inputype: ['text'],
      color: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]], 
      radius: [this.boxshadowValue(), [Validators.required]],
    });



    this.registerForm.get("fieldtype")?.valueChanges.subscribe((result) => {

      console.log("fieldtype", result);
 
    })
 
    console.log("fieldtype", this.f.fieldtype);
  }

  
  boxshadowValue2(){
    if(this.inputgetdata.image=="Yes"){
      this.boxshadowchecked="checked";
      return "Yes";
    }else if(this.inputgetdata.image=="No"){
      this.noboxshadowchecked="checked";
      return "No";
    }
  }
  handleChange2(event:any){
    if(event.target.value=="Yes"){
      this.noboxshadowchecked="nochecked";
    }else if(event.target.value=="No"){
      this.boxshadowchecked="nochecked";
    }
    console.log(event.target.value,"Vishn")
  }

  
  boxshadowValue(){
    if(this.inputgetdata.radius=="Yes"){
      this.boxshadowchecked="checked";
      return "Yes";
    }else if(this.inputgetdata.radius=="No"){
      this.noboxshadowchecked="checked";
      return "No";
    }
  }
  handleChange(event:any){
    if(event.target.value=="Yes"){
      this.noboxshadowchecked="nochecked";
    }else if(event.target.value=="No"){
      this.boxshadowchecked="nochecked";
    }
    console.log(event.target.value,"Vishn")
  }


  reloadComponent(self: boolean, urlToNavigateTo ?: string){
    //skipLocationChange:true means dont update the url to / when navigating
    const url = self ? this.router.url : "component/alerts";
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/${url}`]).then(() => {
        //  console.log(`After navigation I am on:${this.router.url}`)
      })
    })
  }
  get f() {
    return this.registerForm.controls;
  }
 
  onSubmit() {

    this.submitted = true;
    console.log(">>>>>>>>this.registerForm", this.f);

    if (this.registerForm.invalid) {
      return true;
    } else { 

      if (this.registerForm.value['radius'] == "Yes") {
        this.radiusvalue = "25px";
      } else {
        this.radiusvalue = "0";
      }

      if (this.registerForm.value['color'] == "blue") {
        this.bgcolor = "#0070ad";
        this.color = "white";
        this.theme="blue";
        
      }
      if (this.registerForm.value['color'] == "purple") {
        this.bgcolor = "#2b0a3d";
        this.color = "white";
        this.theme="purple";

      }
      if (this.registerForm.value['color'] == "dark") {
        this.bgcolor = "";
        this.color = "white";
        this.theme="dark";
      }
      if (this.registerForm.value['color'] == "light") {
        this.bgcolor = "#F1F4F8";
        this.color = "#000";
        this.theme="light";
        this.whitetype = "whitetype";
      }
      const data = { 
        "theme": this.theme,
        "image": this.registerForm.value.image,
        "radius": this.registerForm.value.radius,
        "title": this.registerForm.value['title'], 
        "cardwidth": this.registerForm.value.cardwidth,
        "fieldtype": this.registerForm.value.fieldtype,
        "inputype": this.registerForm.value.inputype, 
        "bgcolor": this.bgcolor,
        "color": this.color,
        "whitetype": this.whitetype,
        "radiusvalue": this.radiusvalue,
 
      }

      console.log(">>>>>", this.registerForm.value);
      this.onclose.emit();
      localStorage.setItem("inputdata", JSON.stringify(data));
      this.router.navigate(['/component/input']);
      this.reloadComponent(true);
    }
  }
}
