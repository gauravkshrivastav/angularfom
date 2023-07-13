import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkboxform',
  templateUrl: './checkboxform.component.html',
  styleUrls: ['./checkboxform.component.scss']
})
export class CheckboxformComponent implements OnInit{
  submitted = false;
  registerForm: FormGroup;
  bgcolor: any;
  color: any;
  alignverticle:any;
  theme:any;
  themecolor:any;
  @Output() onclose = new EventEmitter<any>;
  nodefaultimage:any;
  storage:any;
  imageform:any; 

  constructor(private router: Router,
    private formBuilder: FormBuilder) {

  }


  
  ngOnInit() {


    this.registerForm = this.formBuilder.group({
     
      uploadimage:[''],
      buttons:['',[Validators.required]],
      typefields:['',[Validators.required]],
      text1:[''],
      text2:[''],
      text3:[''],
      text4:[''],
      addbutton:['',[Validators.required]],
      cardwidth:['',[Validators.required]], 
      color: ['', [Validators.required]], 
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], 
    });

     
    this.registerForm.get("buttons")?.valueChanges.subscribe((result)=>{

      console.log("vishnu",result);

      if(result == 1) {
        this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(20)]);
        this.registerForm.get("text2")?.clearValidators();
        this.registerForm.get("text2")?.setValue("");
        this.registerForm.get("text3")?.clearValidators();
        this.registerForm.get("text3")?.setValue("");
        this.registerForm.get("text4")?.clearValidators();
        this.registerForm.get("text4")?.setValue("");
      } 
       else if(result == 2) {
        this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(20)]);
        this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(20)]);
        this.registerForm.get("text3")?.clearValidators();
        this.registerForm.get("text3")?.setValue("");
        this.registerForm.get("text4")?.clearValidators();
        this.registerForm.get("text4")?.setValue("");
      } 
      else if(result == 3) {
        this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(20)]);
        this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(20)]);
        this.registerForm.get("text3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(20)]);
        this.registerForm.get("text4")?.clearValidators();
        this.registerForm.get("text4")?.setValue("");
      } 
      else if(result == 4) {
        this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(20)]);
        this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(20)]);
        this.registerForm.get("text3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(20)]);
        this.registerForm.get("text4")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(20)]);
      } 
      else {
        this.registerForm.get("text1")?.clearValidators();
        this.registerForm.get("text2")?.clearValidators();
        this.registerForm.get("text3")?.clearValidators();
        this.registerForm.get("text4")?.clearValidators();
      }
    })
    this.registerForm.get("typefields")?.valueChanges.subscribe((result)=>{

      console.log("typefields",result);
 
    })
 
 
   
  }

  get f(){
    return this.registerForm.controls;
  }
 
  

  onSubmit(){ 
    this.submitted = true;
    console.log("Checkbox registerForm",this.f);

    if(this.registerForm.invalid) {
      return true;
    } else { 

      if (this.registerForm.value['addbutton'] == "Yes") {
        this.alignverticle = "inline-block"; 
      }
      if (this.registerForm.value['color'] == "blue") {
        this.bgcolor = "#0070ad";
        this.color = "white";
        this.theme="blue";
        this.themecolor = "bluecolor";
      }
      if (this.registerForm.value['color'] == "purple") {
        this.bgcolor = "#2b0a3d";
        this.color = "white";
        this.theme="purple";
        this.themecolor = "purplecolor";

      }
      if (this.registerForm.value['color'] == "dark") {
        this.bgcolor = "black";
        this.color = "white";
        this.theme="dark";
        this.themecolor = "darkcolor";
      }
      if (this.registerForm.value['color'] == "light") {
        this.bgcolor = "#D3D3D3"
        this.color = "#000";
        this.theme="light";
        this.themecolor = "lightcolor";
      }
      const data = {
        "text1":this.registerForm.value.text1,
        "text2":this.registerForm.value.text2,
        "text3":this.registerForm.value.text3,
        "text4":this.registerForm.value.text4,
        "bgcolor":this.bgcolor,  
        "color":this.color, 
        "alignverticle":this.alignverticle, 
        "themecolor":this.themecolor, 
        "theme":this.theme, 
        "typefields":this.registerForm.value.typefields,
        "buttons":this.registerForm.value.buttons,
        "title":this.registerForm.value['title'], 
        "addbutton":this.registerForm.value.addbutton,
        "cardwidth":this.registerForm.value.cardwidth, 
      }
        
      console.log(">>>>>",this.registerForm.value);
      this.onclose.emit();
      localStorage.setItem("checkboxdata",JSON.stringify(data));
        this.router.navigate(['/component/checkbox']);
    }
  }

}
