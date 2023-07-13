import { Component,EventEmitter, Output,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbarform',
  templateUrl: './navbarform.component.html',
  styleUrls: ['./navbarform.component.scss']
})
export class NavbarformComponent implements OnInit{
 
  headerclass:any;
  bgcolordropdown:any;
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
    menus:['', [Validators.required]],
    
    optionsv:['--select option--'],
    optionsv2:['--select option--'],
    optionsv3:['--select option--'],
    optionsv4:['--select option--'],
     
    imagedrp:[''],
    imagedrp2:[''],
    imagedrp3:[''],
    imagedrp4:[''],
      
    faqicon: ['', [Validators.required]],
    fileicon: ['', [Validators.required]],
    outicon: ['', [Validators.required]], 
    color: ['light', [Validators.required]],

    text1:[''],
    text2:[''],
    text3:[''],
    text4:[''],

    firstsubmenu1:[''],
    firstsubmenu2:[''],
    firstsubmenu3:[''],
    firstsubmenu4:[''],

    secondsubmenu1:[''],
    secondsubmenu2:[''],
    secondsubmenu3:[''],
    secondsubmenu4:[''],

    thirdsubmenu1:[''],
    thirdsubmenu2:[''],
    thirdsubmenu3:[''],
    thirdsubmenu4:[''],

    forthsubmenu1:[''],
    forthsubmenu2:[''],
    forthsubmenu3:[''],
    forthsubmenu4:[''],
  });



  this.registerForm.get("menus")?.valueChanges.subscribe((result)=>{

    console.log("menus",result);

    if(result == 1) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("imagedrp")?.setValidators([Validators.required]);
      this.registerForm.get("imagedrp2")?.setValidators([Validators.required]);
      this.registerForm.get("imagedrp3")?.setValidators([Validators.required]);
      this.registerForm.get("imagedrp4")?.setValidators([Validators.required]); 
      this.registerForm.get("text2")?.clearValidators();
      this.registerForm.get("text2")?.setValue("");
      this.registerForm.get("text3")?.clearValidators();
      this.registerForm.get("text3")?.setValue("");
      this.registerForm.get("text4")?.clearValidators();
      this.registerForm.get("text4")?.setValue("");
    } 
     else if(result == 2) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("imagedrp")?.setValidators([Validators.required]);
      this.registerForm.get("imagedrp2")?.setValidators([Validators.required]);
      this.registerForm.get("imagedrp3")?.setValidators([Validators.required]);
      this.registerForm.get("imagedrp4")?.setValidators([Validators.required]);
      this.registerForm.get("text3")?.clearValidators();
      this.registerForm.get("text3")?.setValue("");
      this.registerForm.get("text4")?.clearValidators();
      this.registerForm.get("text4")?.setValue("");
    } 
    else if(result == 3) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("imagedrp")?.setValidators([Validators.required]);
      this.registerForm.get("imagedrp2")?.setValidators([Validators.required]);
      this.registerForm.get("imagedrp3")?.setValidators([Validators.required]);
      this.registerForm.get("imagedrp4")?.setValidators([Validators.required]);
      this.registerForm.get("text4")?.clearValidators();
      this.registerForm.get("text4")?.setValue("");
    } 
    else if(result == 4) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text4")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("imagedrp")?.setValidators([Validators.required]);
      this.registerForm.get("imagedrp2")?.setValidators([Validators.required]);
      this.registerForm.get("imagedrp3")?.setValidators([Validators.required]);
      this.registerForm.get("imagedrp4")?.setValidators([Validators.required]);
    } 
    else {
      this.registerForm.get("text1")?.clearValidators();
      this.registerForm.get("text2")?.clearValidators();
      this.registerForm.get("text3")?.clearValidators();
      this.registerForm.get("text4")?.clearValidators(); 
      
    }
  })
  this.registerForm.get("optionsv")?.valueChanges.subscribe((result)=>{

    console.log("optionsv",result);

    if(result == 1) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("firstsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("firstsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("firstsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("firstsubmenu4")?.setValidators([Validators.required]);
      this.registerForm.get("firstsubmenu2")?.clearValidators();
      this.registerForm.get("firstsubmenu2")?.setValue("");
      this.registerForm.get("firstsubmenu3")?.clearValidators();
      this.registerForm.get("firstsubmenu3")?.setValue("");
      this.registerForm.get("firstsubmenu4")?.clearValidators();
      this.registerForm.get("firstsubmenu4")?.setValue("");
    }    
    
     else if(result == 2) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("firstsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("firstsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("firstsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("firstsubmenu4")?.setValidators([Validators.required]);
      this.registerForm.get("firstsubmenu3")?.clearValidators();
      this.registerForm.get("firstsubmenu3")?.setValue("");
      this.registerForm.get("firstsubmenu4")?.clearValidators();
      this.registerForm.get("firstsubmenu4")?.setValue("");
    } 
    else if(result == 3) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("firstsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("firstsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("firstsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("firstsubmenu4")?.setValidators([Validators.required]);
      this.registerForm.get("firstsubmenu4")?.clearValidators();
      this.registerForm.get("firstsubmenu4")?.setValue("");
    } 
    else if(result == 4) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text4")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("firstsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("firstsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("firstsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("firstsubmenu4")?.setValidators([Validators.required]);
    } 
    else {
      this.registerForm.get("text1")?.clearValidators();
      this.registerForm.get("text2")?.clearValidators();
      this.registerForm.get("text3")?.clearValidators();
      this.registerForm.get("text4")?.clearValidators();
    }
  })

  this.registerForm.get("optionsv2")?.valueChanges.subscribe((result)=>{

    console.log("optionsv2",result);

    if(result == 1) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("secondsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("secondsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("secondsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("secondsubmenu4")?.setValidators([Validators.required]);
      this.registerForm.get("secondsubmenu2")?.clearValidators();
      this.registerForm.get("secondsubmenu2")?.setValue("");
      this.registerForm.get("secondsubmenu3")?.clearValidators();
      this.registerForm.get("secondsubmenu3")?.setValue("");
      this.registerForm.get("secondsubmenu4")?.clearValidators();
      this.registerForm.get("secondsubmenu4")?.setValue("");
    } 
     else if(result == 2) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("secondsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("secondsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("secondsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("secondsubmenu4")?.setValidators([Validators.required]);
      this.registerForm.get("secondsubmenu3")?.clearValidators();
      this.registerForm.get("secondsubmenu3")?.setValue("");
      this.registerForm.get("secondsubmenu4")?.clearValidators();
      this.registerForm.get("secondsubmenu4")?.setValue("");
    } 
    else if(result == 3) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("secondsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("secondsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("secondsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("secondsubmenu4")?.setValidators([Validators.required]);
      this.registerForm.get("secondsubmenu4")?.clearValidators();
      this.registerForm.get("secondsubmenu4")?.setValue("");
    } 
    else if(result == 4) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text4")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("secondsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("secondsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("secondsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("secondsubmenu4")?.setValidators([Validators.required]);
    } 
    else {
      this.registerForm.get("text1")?.clearValidators();
      this.registerForm.get("text2")?.clearValidators();
      this.registerForm.get("text3")?.clearValidators();
      this.registerForm.get("text4")?.clearValidators();
    }
  })

  this.registerForm.get("optionsv3")?.valueChanges.subscribe((result)=>{

    console.log("optionsv3",result);

    if(result == 1) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("thirdsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("thirdsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("thirdsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("thirdsubmenu4")?.setValidators([Validators.required]);
      this.registerForm.get("thirdsubmenu2")?.clearValidators();
      this.registerForm.get("thirdsubmenu2")?.setValue("");
      this.registerForm.get("thirdsubmenu3")?.clearValidators();
      this.registerForm.get("thirdsubmenu3")?.setValue("");
      this.registerForm.get("thirdsubmenu4")?.clearValidators();
      this.registerForm.get("thirdsubmenu4")?.setValue("");
    } 
     else if(result == 2) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("thirdsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("thirdsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("thirdsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("thirdsubmenu4")?.setValidators([Validators.required]);
      this.registerForm.get("thirdsubmenu3")?.clearValidators();
      this.registerForm.get("thirdsubmenu3")?.setValue("");
      this.registerForm.get("thirdsubmenu4")?.clearValidators();
      this.registerForm.get("thirdsubmenu4")?.setValue("");
    } 
    else if(result == 3) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("thirdsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("thirdsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("thirdsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("thirdsubmenu4")?.setValidators([Validators.required]);
      this.registerForm.get("thirdsubmenu4")?.clearValidators();
      this.registerForm.get("thirdsubmenu4")?.setValue("");
    } 
    else if(result == 4) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text4")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("thirdsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("thirdsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("thirdsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("thirdsubmenu4")?.setValidators([Validators.required]);
    } 
    else {
      this.registerForm.get("text1")?.clearValidators();
      this.registerForm.get("text2")?.clearValidators();
      this.registerForm.get("text3")?.clearValidators();
      this.registerForm.get("text4")?.clearValidators();
    }
  })

    
  this.registerForm.get("optionsv4")?.valueChanges.subscribe((result)=>{

    console.log("optionsv4",result);

    if(result == 1) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("forthsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("forthsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("forthsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("forthsubmenu4")?.setValidators([Validators.required]);
      this.registerForm.get("forthsubmenu2")?.clearValidators();
      this.registerForm.get("forthsubmenu2")?.setValue("");
      this.registerForm.get("forthsubmenu3")?.clearValidators();
      this.registerForm.get("forthsubmenu3")?.setValue("");
      this.registerForm.get("forthsubmenu4")?.clearValidators();
      this.registerForm.get("forthsubmenu4")?.setValue("");
    } 
     else if(result == 2) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("forthsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("forthsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("forthsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("forthsubmenu4")?.setValidators([Validators.required]);
      this.registerForm.get("forthsubmenu3")?.clearValidators();
      this.registerForm.get("forthsubmenu3")?.setValue("");
      this.registerForm.get("forthsubmenu4")?.clearValidators();
      this.registerForm.get("forthsubmenu4")?.setValue("");
    } 
    else if(result == 3) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("forthsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("forthsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("forthsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("forthsubmenu4")?.setValidators([Validators.required]);
      this.registerForm.get("forthsubmenu4")?.clearValidators();
      this.registerForm.get("forthsubmenu4")?.setValue("");
    } 
    else if(result == 4) {
      this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("text4")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      this.registerForm.get("forthsubmenu1")?.setValidators([Validators.required]);
      this.registerForm.get("forthsubmenu2")?.setValidators([Validators.required]);
      this.registerForm.get("forthsubmenu3")?.setValidators([Validators.required]);
      this.registerForm.get("forthsubmenu4")?.setValidators([Validators.required]);
    } 
    else {
      this.registerForm.get("text1")?.clearValidators();
      this.registerForm.get("text2")?.clearValidators();
      this.registerForm.get("text3")?.clearValidators();
      this.registerForm.get("text4")?.clearValidators();
    }
  })
 
};

  get f(){
    return this.registerForm.controls;
  }


  onSubmit(){
    console.log(this.f,"optionsv2")
    console.log(this.registerForm,"registerForm")
     


    
    this.submitted = true;
    if(this.registerForm.invalid) { 
      return true;
      
    }
    else {
      console.log(">>>",this.registerForm.value);
      

      if(this.registerForm.value['imagedrp']== "Yes"){
        this.registerForm.value['imagedrp']="block";
      } else {
        this.registerForm.value['imagedrp']="none";
      }

      if(this.registerForm.value['imagedrp2']== "Yes"){
        this.registerForm.value['imagedrp2']="block";
      } else {
        this.registerForm.value['imagedrp2']="none";
      }

      if(this.registerForm.value['imagedrp3']== "Yes"){
        this.registerForm.value['imagedrp3']="block";
      } else {
        this.registerForm.value['imagedrp3']="none";
      }
      if(this.registerForm.value['imagedrp4']== "Yes"){
        this.registerForm.value['imagedrp4']="block";
      } else {
        this.registerForm.value['imagedrp4']="none";
      }
      if(this.registerForm.value['imagedrp5']== "Yes"){
        this.registerForm.value['imagedrp5']="block";
      } else {
        this.registerForm.value['imagedrp5']="none";
      }
      if(this.registerForm.value['imagedrp6']== "Yes"){
        this.registerForm.value['imagedrp6']="block";
      } else {
        this.registerForm.value['imagedrp6']="none";
      }
      if(this.registerForm.value['imagedrp7']== "Yes"){
        this.registerForm.value['imagedrp7']="block";
      } else {
        this.registerForm.value['imagedrp7']="none";
      }
      if(this.registerForm.value['imagedrp8']== "Yes"){
        this.registerForm.value['imagedrp8']="block";
      } else {
        this.registerForm.value['imagedrp8']="none";
      }
      if(this.registerForm.value['imagedrp9']== "Yes"){
        this.registerForm.value['imagedrp9']="block";
      } else {
        this.registerForm.value['imagedrp9']="none";
      }
      if(this.registerForm.value['imagedrp10']== "Yes"){
        this.registerForm.value['imagedrp10']="block";
      } else {
        this.registerForm.value['imagedrp10']="none";
      }

      if(this.registerForm.value['faqicon']== "Yes"){
        this.registerForm.value['faqicon']="block"; 
      } else {
        this.registerForm.value['faqicon']="none"; 
      }
      if(this.registerForm.value['fileicon']== "Yes"){
        this.registerForm.value['fileicon']="block"; 
      } else {
        this.registerForm.value['fileicon']="none"; 
      }
      if(this.registerForm.value['outicon']== "Yes"){
        this.registerForm.value['outicon']="block"; 
      } else {
        this.registerForm.value['outicon']="none"; 
      }



      if(this.registerForm.value['color'] == "blue"){
        this.bgcolor="#0070ad";
        this.color="white"; 
        this.bgcolordropdown="blue";
      }

      if(this.registerForm.value['color'] == "purple"){
        this.bgcolor="#2b0a3d";
        this.color="white"; 
        this.bgcolordropdown="purple";
      }
      if(this.registerForm.value['color'] == "dark"){
        this.bgcolor="black";
        this.color="white"; 
        this.bgcolordropdown="dark";
         
      }
      if(this.registerForm.value['color'] == "light"){
        this.bgcolor="white";
        this.bgcolordropdown="light";
        this.headerclass="headerclass";
        this.color="#000";  
      }



      this.onclose.emit();
      const data = {
        "text1":this.registerForm.value.text1,
        "text2":this.registerForm.value.text2,
        "text3":this.registerForm.value.text3,
        "text4":this.registerForm.value.text4,
        "firstsubmenu1":this.registerForm.value.firstsubmenu1,
        "firstsubmenu2":this.registerForm.value.firstsubmenu2,
        "firstsubmenu3":this.registerForm.value.firstsubmenu3,
        "firstsubmenu4":this.registerForm.value.firstsubmenu4,
        "secondsubmenu1":this.registerForm.value.secondsubmenu1,
        "secondsubmenu2":this.registerForm.value.secondsubmenu2,
        "secondsubmenu3":this.registerForm.value.secondsubmenu3,
        "secondsubmenu4":this.registerForm.value.secondsubmenu4,
        "thirdsubmenu1":this.registerForm.value.thirdsubmenu1,
        "thirdsubmenu2":this.registerForm.value.thirdsubmenu2,
        "thirdsubmenu3":this.registerForm.value.thirdsubmenu3,
        "thirdsubmenu4":this.registerForm.value.thirdsubmenu4,
        "forthsubmenu1":this.registerForm.value.forthsubmenu1,
        "forthsubmenu2":this.registerForm.value.forthsubmenu2,
        "forthsubmenu3":this.registerForm.value.forthsubmenu3,
        "forthsubmenu4":this.registerForm.value.forthsubmenu4, 
      
        "optionsv":this.registerForm.value.optionsv,
        "optionsv2":this.registerForm.value.optionsv2,
        "optionsv3":this.registerForm.value.optionsv3,
        "optionsv4":this.registerForm.value.optionsv4,

        "imagedrp":this.registerForm.value.imagedrp,
        "imagedrp2":this.registerForm.value.imagedrp2,
        "imagedrp3":this.registerForm.value.imagedrp3,
        "imagedrp4":this.registerForm.value.imagedrp4,
        "imagedrp5":this.registerForm.value.imagedrp5,
        "imagedrp6":this.registerForm.value.imagedrp6,
        "imagedrp7":this.registerForm.value.imagedrp7,
        "imagedrp8":this.registerForm.value.imagedrp8,
        "imagedrp9":this.registerForm.value.imagedrp9,
        "imagedrp10":this.registerForm.value.imagedrp10,
        
        "faqicon":this.registerForm.value.faqicon,
        "fileicon":this.registerForm.value.fileicon,
        "outicon":this.registerForm.value.outicon,
        
        "headerclass":this.headerclass,
        "bgcolordropdown":this.bgcolordropdown,
        "bgcolor":this.bgcolor,
        "color":this.color, 
        "menus":this.registerForm.value.menus,
      }
      console.log(">>",data);


      localStorage.setItem("navbar",JSON.stringify(data));
      this.router.navigate(['/component/navbar']);
    }
  }
}
