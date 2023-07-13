import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.scss']
})
export class InputformComponent {
  submitted = false;
  registerForm: FormGroup;
  radiusvalue: any;
  bgcolor: any;
  whitetype: any;
  color: any;
  theme: any;
  @Output() onclose = new EventEmitter<any>;
  nodefaultimage:any;
  storage:any;
  imageform:any;

  // @Output() onLogin = new EventEmitter<boolean>();
  constructor(private router: Router,
    private formBuilder: FormBuilder) {

  }


  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      // addbutton:['', [Validators.required]],
      // buttons:[''],
      // text1:[''],
      // text2:[''],
      image:['',[Validators.required]],
      radius:['',[Validators.required]],
      theme:[''],
      // uploadimage:[''],
      fieldtype:['',[Validators.required]],
      cardwidth:['',[Validators.required]],
      inputype:['text'],
      color:['',[Validators.required]],
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      // welcome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]]
    });


    
    this.registerForm.get("fieldtype")?.valueChanges.subscribe((result)=>{

      console.log("fieldtype",result);

      // if(result == "input") {
      //   this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      // } 
      //  else if(result == "textarea") {
      //   this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      // } 
      // else {
      //   this.registerForm.get("text1")?.clearValidators();
      //   this.registerForm.get("text2")?.clearValidators();
      // }
    })

    // this.registerForm.get("addbutton")?.valueChanges.subscribe((result)=>{

    //   console.log("result",result);

    //   if(result == "Yes") {
    //     this.registerForm.get("buttons")?.setValidators([Validators.required]);
    //   }  else if(result == "No") {
    //     this.registerForm.get("buttons")?.clearValidators();
    //     this.registerForm.get("text1")?.clearValidators();
    //     this.registerForm.get("text2")?.clearValidators();
    //   }
    // })

    // this.registerForm.get("buttons")?.valueChanges.subscribe((result)=>{

    //   console.log("vishnu",result);

    //   if(result == 1) {
    //     this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
    //   } 
    //    else if(result == 2) {
    //     this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
    //     this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
    //   } 
    //   else {
    //     this.registerForm.get("text1")?.clearValidators();
    //     this.registerForm.get("text2")?.clearValidators();
    //   }
    // })
    console.log("fieldtype",this.f.fieldtype);
  }

  get f(){
    return this.registerForm.controls;
  }

  // handleimage(event:any){
  //   this.nodefaultimage = event.target.files[0];
  //   this.storage = event.target.files[0].name;
  //   console.log(">>>>",this.nodefaultimage);
  // }

  // imageurl(){
  //   if(this.registerForm.value.image=="No"){
  //     this.registerForm.value.uploadimage = "";
  //   } else if(this.registerForm.value.image=="Yes"){
  //     this.registerForm.value.uploadimage = window.webkitURL.createObjectURL(this.nodefaultimage);
  //   }
  // }
  

  onSubmit(){
    
    this.submitted = true;
    console.log(">>>>>>>>this.registerForm",this.f);

    if(this.registerForm.invalid) {
      return true;
    } else {
      // if(this.registerForm.value.image=="No"){
      //   this.registerForm.value.imageform = "";
      // } else if(this.registerForm.value.image=="Yes"){
      //   this.registerForm.value.imageform = window.webkitURL.createObjectURL(this.nodefaultimage);
      // }

      if (this.registerForm.value['radius'] == "Yes") {
        this.radiusvalue = "25px"; 
      }else{
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
        // "text1":this.registerForm.value.text1,
        // "text2":this.registerForm.value.text2,
        // "theme":this.registerForm.value.theme,
        "theme":this.theme,
        "image":this.registerForm.value.image,
        "radius":this.registerForm.value.radius,
        "title":this.registerForm.value['title'],
        // "welcome":this.registerForm.value['welcome'],
        // "uploadimage": this.registerForm.value.uploadimage,
        // "addbutton":this.registerForm.value.addbutton,
        "cardwidth":this.registerForm.value.cardwidth,
        "fieldtype":this.registerForm.value.fieldtype,
        "inputype":this.registerForm.value.inputype,
        // "buttons":this.registerForm.value.buttons,
        "bgcolor":this.bgcolor,
        "color":this.color,
        "whitetype":this.whitetype,
        "radiusvalue":this.radiusvalue,
        
        // "imagename":this.storage,
        // "imageform":this.registerForm.value.imageform
      }
        
      console.log(">>>>>",this.registerForm.value);
      this.onclose.emit();
      localStorage.setItem("inputdata",JSON.stringify(data));
        this.router.navigate(['/component/input']);
    }
  }

}
