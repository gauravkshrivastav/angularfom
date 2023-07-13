import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerform',
  templateUrl: './headerform.component.html',
  styleUrls: ['./headerform.component.scss']
})
export class HeaderformComponent implements OnInit {

  title = "";
  bgcolor:any;
  color:any;
  registerForm: FormGroup;
  submitted = false;

  @Output() onclose = new EventEmitter<any>;

  
  constructor( private router:Router,
     private formBuilder: FormBuilder
    ) {}

  ngOnInit() {

  this.registerForm = this.formBuilder.group({
    image1:['', [Validators.required]],
    image2: ['', [Validators.required]],
    image3: ['', [Validators.required]],
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    welcome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    color: ['light', [Validators.required]],
  });

};

  get f(){
    return this.registerForm.controls;
  }


  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid) { 
      return true;
      
    }
    else {
      console.log(">>>",this.registerForm.value);
      // if(this.registerForm.value['image1']== "Yes"){
      //   this.registerForm.value['image1']="block";
      // } else {
      //   this.registerForm.value['image1']="none";
      // }
      // if(this.registerForm.value['image2']== "Yes"){
      //   this.registerForm.value['image2']="block";
      // } else {
      //   this.registerForm.value['image2']="none";
      // }
      if(this.registerForm.value['color'] == "blue"){
        this.bgcolor="#0070ad";
        this.color="white";
        if(this.registerForm.value['image1']== "Yes"){
          this.registerForm.value['whitewbh']="Yes";
        } else {
          this.registerForm.value['whitewbh']="No";
        }
        if(this.registerForm.value['image3']== "Yes"){
          this.registerForm.value.image4="Yes";
        } else {
          this.registerForm.value.image4="No";
        }
      }
      if(this.registerForm.value['color'] == "purple"){
        this.bgcolor="#2b0a3d";
        this.color="white";
        if(this.registerForm.value['image1']== "Yes"){
          this.registerForm.value['whitewbh']="No";
        } else {
          this.registerForm.value['whitewbh']="No";
        }
        if(this.registerForm.value['image3']== "Yes"){
          this.registerForm.value.image4="Yes";
        } else {
          this.registerForm.value.image4="No";
        }
      }
      if(this.registerForm.value['color'] == "dark"){
        this.bgcolor="black";
        this.color="white";
        if(this.registerForm.value['image1']== "Yes"){
          this.registerForm.value['whitewbh']="No";
        } else {
          this.registerForm.value['whitewbh']="No";
        }
        if(this.registerForm.value['image3']== "Yes"){
          this.registerForm.value.image4="Yes";
        } else {
          this.registerForm.value.image4="No";
        }
      }
      if(this.registerForm.value['color'] == "light"){
        this.bgcolor="white";
        this.color="#0070ad";
        if(this.registerForm.value['image1']== "Yes"){
          this.registerForm.value['whitewbh']="No";
        } else {
          this.registerForm.value['whitewbh']="No";
        }
        if(this.registerForm.value['image3']== "Yes"){
          this.registerForm.value.image4="No";
        } else {
          this.registerForm.value.image4="No";
        }
      }
      this.onclose.emit();
      const data = {
        "image1":this.registerForm.value.image1,
        "image2":this.registerForm.value.image2,
        "image3":this.registerForm.value.image3,
        "image4":this.registerForm.value.image4,
        "title":this.registerForm.value['title'],
        "welcome":this.registerForm.value['welcome'],
        "bgcolor":this.bgcolor,
        "color":this.color,
        "whitewbh":this.registerForm.value.whitewbh
      }
      console.log(">>",data);


      localStorage.setItem("data",JSON.stringify(data));
      this.router.navigate(['/component/header']);
    }
  }

  }


