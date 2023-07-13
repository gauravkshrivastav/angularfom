import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-buttonform',
  templateUrl: './buttonform.component.html',
  styleUrls: ['./buttonform.component.scss']
})
export class ButtonformComponent implements OnInit  {


  // fontsize:any;
  // borderradius:any;
  // borderwidth:any;
  // fontwidth:any;
  // boxshadow:any; 
  color:any;
  btnwitdth:any;
  btnpadding:any;
  bgcolor:any;
  boxshadow:any;
  
  registerForm: FormGroup;
  submitted = false;
  @Output() onclose = new EventEmitter<any>;

  // @Output() onLogin = new EventEmitter<boolean>();
  constructor(private router: Router,
    private formBuilder: FormBuilder
    ) {
  }
  ngOnInit() {

    this.registerForm = this.formBuilder.group({ 
      // fontsize: ['', [Validators.required]],
      borderradius: ['', [Validators.required]],
      borderwidth: ['', [Validators.required]], 
      textvalue: ['', [Validators.required,Validators.maxLength(20)]],
      color: ['light', [Validators.required]],
      btnwitdth: ['25%', [Validators.required]],
      btnpadding: ['5px padding', [Validators.required]],
      // boxshadow: ['', [Validators.required]],
      
      imagev: ['', [Validators.required]],
      
    });
  
  };
   
  get f(){
    return this.registerForm.controls;
  }
  

  onSubmit() { 
    console.log(this.f,"Vishnu")

    this.submitted=true;
    if(this.registerForm.invalid) {
      return true;
    }else{
     
      if(this.registerForm.value['color'] == "blue"){
        this.bgcolor="#0070ad";
        this.color="white"; 
      }
      if(this.registerForm.value['color'] == "purple"){
        this.bgcolor="#2b0a3d";
        this.color="white";
          
      }
      if(this.registerForm.value['color'] == "dark"){
        this.bgcolor="black";
        this.color="white"; 
      }
      if(this.registerForm.value['color'] == "light"){
        this.bgcolor="white";
        this.color="#000"; 
      }
       

      if(this.registerForm.value['imagev']== "Yes"){
        this.registerForm.value['boxshadow']="block";
        this.boxshadow="#00000047 4px 4px 10px";
      } else {
        this.registerForm.value['imagev']="none";
      }


      if(this.registerForm.value['btnwitdth'] == "Full"){
        this.btnwitdth="100%";
        // this.color="white"; 
      }
      if(this.registerForm.value['btnwitdth'] == "75%"){
        this.btnwitdth="75%";
        // this.color="white";
          
      }
      if(this.registerForm.value['btnwitdth'] == "50%"){
        this.btnwitdth="50%";
        // this.color="white"; 
      }
      if(this.registerForm.value['btnwitdth'] == "25%"){
        this.btnwitdth="25%";
        // this.color="#0070ad"; 
      }


      if(this.registerForm.value['btnpadding'] == "5px padding"){
        this.btnpadding="5px";
        // this.color="white"; 
      }
      if(this.registerForm.value['btnpadding'] == "10px padding"){
        this.btnpadding="10px";
        // this.color="white";
          
      }
      if(this.registerForm.value['btnpadding'] == "15px padding"){
        this.btnpadding="15px";
        // this.color="white"; 
      }
      if(this.registerForm.value['btnpadding'] == "20px padding"){
        this.btnpadding="20px";
        // this.color="#0070ad"; 
      }
 
    
      
      const data = { 
      "bgcolor":this.bgcolor, 
      "boxshadow":this.boxshadow,  
      "color":this.color,
      "imagev":this.registerForm.value.imagev,
      "btnwitdth":this.btnwitdth,
      "btnpadding":this.btnpadding,
      buttondesign:this.registerForm.value,
      // borderradius:this.registerForm.value.borderradius,
      };
      
      this.onclose.emit(); 
      // console.log(">>>>>>>>>>>",this.registerForm.value);
      localStorage.setItem("button",JSON.stringify(data));
      this.router.navigateByUrl('/component/button');
    }
   
  }


}
