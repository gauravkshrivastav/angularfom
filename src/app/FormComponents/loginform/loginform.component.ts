import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit{
  submitted = false;
  registerForm: FormGroup;
  bgcolor: any;
  color: any;
  btncolor:any;
  lengthvalidation:boolean =  false;
  // alignverticle:any;
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
      typefields:['',[Validators.required]],
      cardwidth:['',[Validators.required]],  
      validateforms:['',[Validators.required]],  
      validateforms2:['',[Validators.required]],  
      color: ['', [Validators.required]],  
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], 
      email: [''], 
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], 
      minvalue: ['', [Validators.required, Validators.min(4), Validators.max(15), Validators.minLength(1), Validators.maxLength(15)]], 
      maxvalue: ['', [Validators.required, Validators.min(4), Validators.max(25), Validators.maxLength(15)]], 
      
    });

    this.registerForm.get("typefields")?.valueChanges.subscribe((result)=>{ 
      console.log("typefields",result); 
      if(result == "Sign Up") {
        this.registerForm.get("email")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]); 
      }  
      else if(result == "Log In"){
        this.registerForm.get("email")?.clearValidators(); 
        this.registerForm.get("email")?.setValue(""); 
      }
    })

  }



  get f(){
    return this.registerForm.controls;
  }
 
  

  numeric(e:any) {
    var k = e.which;
    var ok = (k >= 48 && k <= 57) ||  // 0-9
      k == 8 ||  // Backspaces
      k == 9 ||  //H Tab
      k == 11 ||  //V Tab
      k == 0 ||  // Tab for Firefox
      k == 46 ||  // for use dot
      k == 127;   //Delete
    if (!ok) {
      e.preventDefault();
    }
  }

  onSubmit(){ 
    this.submitted = true;
    console.log("Checkbox registerForm",this.f);
    console.log("Checkbox minvalue",this.registerForm.value['minvalue'] , 'and ', this.registerForm.value['maxvalue']);
    const minValues =this.registerForm.value['minvalue'];
    const maxValues =this.registerForm.value['maxvalue'];
    if( parseInt(minValues) > parseInt(maxValues)) {
      this.lengthvalidation = true;
    } else{
      this.lengthvalidation = false;
      if(this.registerForm.invalid) {
        return true;
      } else { 
   
        if (this.registerForm.value['color'] == "blue") {
          this.bgcolor = "#0070ad";
          this.color = "white";
          this.theme="blue";
          this.btncolor="#fff"
          this.themecolor = "#03A9F4";
        }
        if (this.registerForm.value['color'] == "purple") {
          this.bgcolor = "#2b0a3d";
          this.color = "white";
          this.theme="purple";
          this.btncolor="#fff"
          this.themecolor = "#4c0f6c";
  
        }
        if (this.registerForm.value['color'] == "dark") {
          this.bgcolor = "black";
          this.color = "white";
          this.theme="dark";
          this.btncolor="#fff"
          this.themecolor = "#2e2b2b";
        }
        if (this.registerForm.value['color'] == "light") {
          this.bgcolor = "#eee";
          this.color = "#000";
          this.theme="light";
          this.btncolor="#fff"
          this.themecolor = "#000";
        }
        const data = { 
          "bgcolor":this.bgcolor,  
          "color":this.color,  
          "themecolor":this.themecolor, 
          "theme":this.theme, 
          "btncolor":this.btncolor, 
          "typefields":this.registerForm.value.typefields, 
          "validateforms2":this.registerForm.value.validateforms2,  
          "validateforms":this.registerForm.value.validateforms,  
          "username":this.registerForm.value['username'], 
          "email":this.registerForm.value['email'], 
          "password":this.registerForm.value['password'],  
          "minvalue":this.registerForm.value['minvalue'],  
          "maxvalue":this.registerForm.value['maxvalue'],  
          "cardwidth":this.registerForm.value.cardwidth,  
        }
        console.log(">>>>>",this.registerForm.value);
        this.onclose.emit();
        localStorage.setItem("loginsignupdata",JSON.stringify(data));
        this.router.navigate(['/component/login&signup']);
      }
    }
   
  }

}
