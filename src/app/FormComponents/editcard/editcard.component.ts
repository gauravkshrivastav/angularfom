import { getLocaleDateFormat } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editcard',
  templateUrl: './editcard.component.html',
  styleUrls: ['./editcard.component.scss']
})
export class EditcardComponent {

  submitted = false;
  registerForm: FormGroup;
  @Output() onclose = new EventEmitter<any>;
  nodefaultimage:any;
  carddata:any;
  imagechecked:any;
  noimagechecked:any;
  addbutonchecked:any;
  noaddbutonchecked:any;
  storage:any;

  // @Output() onLogin = new EventEmitter<boolean>();
  constructor(private router: Router,
    private formBuilder: FormBuilder) {

  }


  
  ngOnInit() {
   
    if(localStorage.getItem("carddata")) {
      var data1:any =  localStorage.getItem("carddata");
      this.carddata = JSON.parse(data1);
      console.log(">>>>>>>>this.registerForm",this.carddata);
      this.storage = this.carddata.imagename;
      if(this.carddata.addbutton  == "Yes"){
        this.addbutonchecked = "checked";
      } else {
        this.noaddbutonchecked = "checked";
      }
      if(this.carddata.image  == "Yes"){
        this.imagechecked = "checked";
      } else {
        this.noimagechecked = "checked";
      }
    }

    const addbutton = () => {
      if(this.carddata.addbutton  == "Yes"){
        return "Yes";
      } else {
        return "No";
      }
     }

     const image = () => {
      if(this.carddata.image  == "Yes"){
        return "Yes";
      } else {
        return "No";
      }
     }




    this.registerForm = this.formBuilder.group({
      addbutton:[addbutton(), [Validators.required]],
      buttons:[''],
      text1:[''],
      text2:[''],
      image:[image(),[Validators.required]],
      // uploadimage:[''],
      cardwidth:['',[Validators.required]],
      theme:['',[Validators.required]],
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      welcome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]]
    });



    this.registerForm.get("addbutton")?.valueChanges.subscribe((result)=>{

      console.log("result",result);

      if(result == "Yes") {
        this.registerForm.get("buttons")?.setValidators([Validators.required]);
      }  else if(result == "No") {
        this.registerForm.get("buttons")?.clearValidators();
        this.registerForm.get("text1")?.clearValidators();
        this.registerForm.get("text2")?.clearValidators();
      }
    })

    this.registerForm.get("buttons")?.valueChanges.subscribe((result)=>{

      console.log("result",result);

      if(result == 1) {
        this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      } 
       else if(result == 2) {
        this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
        this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      } 
      else {
        this.registerForm.get("text1")?.clearValidators();
        this.registerForm.get("text2")?.clearValidators();
      }
    })
  }


  // handleimage(event:any){
  //   if(event.target.files[0]){
  //     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  //     this.nodefaultimage = event.target.files[0];
  //     // this.registerForm.get("uploadimage")?.setValue(file);
  //   // } else {
  //   //   console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  //   //   this.nodefaultimage = this.carddata.uploadimage;
  //   }
  //   this.storage = event.target.files[0].name;
  // }

  handlechange(event:any){
    if(event.target.checked){
      this.imagechecked = "nochecked";
      this.noimagechecked = "nochecked";
      if(event.target.value == 'No'){
        this.carddata.image = "No";
       }
    }
  }
  handle1change(event:any){
    if(event.target.checked){
      this.addbutonchecked = "nochecked";
      this.noaddbutonchecked = "nochecked";
      if(event.target.value == 'No'){
       this.carddata.addbutton = "No";
      }
    }
  }
  get f(){
    return this.registerForm.controls;
  }

  reloadComponent(self:boolean,urlToNavigateTo ?:string){
    //skipLocationChange:true means dont update the url to / when navigating
   const url=self ? this.router.url : "component/card";
   this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this.router.navigate([`/${url}`]).then(()=>{
      //  console.log(`After navigation I am on:${this.router.url}`)
     })
   })
  } 

  onSubmit(){
    console.log(this.registerForm,"formgroup")
    this.submitted = true;
    if(this.registerForm.invalid) {
      return true;
    } else {
      // if(this.registerForm.value.image=="No"){
      //   this.registerForm.value.imageform = "";
      // } else if(this.registerForm.value.image=="Yes"){
      //   // if(this.nodefaultimage == undefined || this.nodefaultimage == null){
      //   //   this.nodefaultimage = this.carddata.filepath;
      //   // }
      //   // console.log(">>>>",this.nodefaultimage);
      //     this.registerForm.value.imageform = window.webkitURL.createObjectURL(this.nodefaultimage);
      // }
      const data = {
        "text1":this.registerForm.value.text1,
        "text2":this.registerForm.value.text2,
        "theme":this.registerForm.value.theme,
        "image":this.registerForm.value.image,
        "title":this.registerForm.value['title'],
        "welcome":this.registerForm.value['welcome'],
        // "uploadimage":this.registerForm.value.uploadimage,
        "addbutton":this.registerForm.value.addbutton,
        "cardwidth":this.registerForm.value.cardwidth,
        "buttons":this.registerForm.value.buttons,
        // "imagename":this.storage,
        // "filepath":this.nodefaultimage,
        // "imageform":this.registerForm.value.imageform
      }
      // console.log(">>>>>",data);
      this.onclose.emit();
      localStorage.setItem("carddata",JSON.stringify(data));
        this.router.navigate(['/component/card']);
        this.reloadComponent(true);
    }
  }
}




