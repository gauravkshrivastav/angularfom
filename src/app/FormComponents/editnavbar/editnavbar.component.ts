import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editnavbar',
  templateUrl: './editnavbar.component.html',
  styleUrls: ['./editnavbar.component.scss']
})
export class EditnavbarComponent implements OnInit {
  headerclass:any;
  bgcolordropdown:any;
  bgcolor:any;
  color:any;
  themecolor:any;
 
  registerForm: FormGroup;
  submitted = false;
  navbardata:any;
  image1checked:any;
  boxshadowchecked:any;
  noboxshadowchecked:any;
  


  noimage1checked:any;
  image2checked:any;
  noimage2checked:any;
  image3checked:any;
  noimage3checked:any;

  @Output() onclose = new EventEmitter<any>;

  
  constructor( private router:Router,
     private formBuilder: FormBuilder
    ) {}


    
  ngOnInit() {
 
    
  this.registerForm = this.formBuilder.group({
    menus:['',[Validators.required]],
    
    optionsv:[''],
    optionsv2:[''],
    optionsv3:[''],
    optionsv4:[''],
    
    imagedrp:[''],
    imagedrp2:[''],
    imagedrp3:[''],
    imagedrp4:[''],
    imagedrp5:[''],
    imagedrp6:[''],
    imagedrp7:[''],
    imagedrp8:[''],
    imagedrp9:[''],
    imagedrp10:[''], 
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
   
    if(localStorage.getItem("navbar")) {
      var data1:any =  localStorage.getItem("navbar");
      this.navbardata = JSON.parse(data1);

      console.log("Vishnu   +++++++++++++",this.navbardata);
      if(this.navbardata.bgcolor == "#0070ad"){
        this.themecolor = "blue";
      } else if(this.navbardata.bgcolor == "#2b0a3d"){
        this.themecolor = "purple";
      } else if(this.navbardata.bgcolor == "black"){
        this.themecolor = "dark";
      } else if(this.navbardata.bgcolor == "white"){
        this.themecolor = "light";
      } 


  this.registerForm = this.formBuilder.group({ 

    menus: ['', [Validators.required]],
    text1: [''],
    text2: [''], 
    text3: [''],
    text4: [''], 
     
    color: ['light', [Validators.required]],
    imagedrp: [this.boxshadowValue(), [Validators.required]],
    imagedrp2: [this.boxshadowValue2(), [Validators.required]],
    imagedrp3: [this.boxshadowValue3(), [Validators.required]],
    imagedrp4: [this.boxshadowValue4(), [Validators.required]],
    firstsubmenu1: [''],
    firstsubmenu2: [''],
    firstsubmenu3: [''],
    firstsubmenu4: [''],

    secondsubmenu1: [''],
    secondsubmenu2: [''],
    secondsubmenu3: [''],
    secondsubmenu4: [''],

    thirdsubmenu1: [''],
    thirdsubmenu2: [''],
    thirdsubmenu3: [''],
    thirdsubmenu4: [''],

    forthsubmenu1: [''],
    forthsubmenu2: [''],
    forthsubmenu3: [''],
    forthsubmenu4: [''],
     
  

    faqicon: [this.boxshadowValuefaq(), [Validators.required]],
    fileicon: [this.boxshadowValuefile(), [Validators.required]],
    outicon: [this.boxshadowValueout(), [Validators.required]],

    optionsv: [''],
    optionsv2: [''],
    optionsv3: [''],
    optionsv4: [''],
    
  });
  }


  
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



boxshadowValue(){ 
  if(this.navbardata.imagedrp=="block"){
    this.boxshadowchecked="checked";
    return "Yes";
  }else if(this.navbardata.imagedrp=="none"){
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
  // console.log(event.target.value,"Vishn")
}


boxshadowValue2(){ 
  if(this.navbardata.imagedrp2=="block"){
    this.boxshadowchecked="checked";
    return "Yes";
  }else if(this.navbardata.imagedrp2=="none"){
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




boxshadowValue3(){ 
  if(this.navbardata.imagedrp3=="block"){
    this.boxshadowchecked="checked";
    return "Yes";
  }else if(this.navbardata.imagedrp3=="none"){
    this.noboxshadowchecked="checked";
    return "No";
  } 
}
   
handleChange3(event:any){
  if(event.target.value=="Yes"){
    this.noboxshadowchecked="nochecked"; 
  }else if(event.target.value=="No"){
    this.boxshadowchecked="nochecked";
  }
  console.log(event.target.value,"Vishn")
}


boxshadowValue4(){ 
  if(this.navbardata.imagedrp4=="block"){
    this.boxshadowchecked="checked";
    return "Yes";
  }else if(this.navbardata.imagedrp4=="none"){
    this.noboxshadowchecked="checked";
    return "No";
  } 
}
   
handleChange4(event:any){
  if(event.target.value=="Yes"){
    this.noboxshadowchecked="nochecked"; 
  }else if(event.target.value=="No"){
    this.boxshadowchecked="nochecked";
  }
  console.log(event.target.value,"Vishn")
}

// icons
boxshadowValuefaq(){ 
  if(this.navbardata.faqicon=="block"){
    this.boxshadowchecked="checked";
    return "Yes";
  }else if(this.navbardata.faqicon=="none"){
    this.noboxshadowchecked="checked";
    return "No";
  }
}
handleChangefaq(event:any){
  if(event.target.value=="Yes"){
    this.noboxshadowchecked="nochecked"; 
  }else if(event.target.value=="No"){
    this.boxshadowchecked="nochecked";
  } 
}

boxshadowValuefile(){ 
  if(this.navbardata.fileicon=="block"){
    this.boxshadowchecked="checked";
    return "Yes";
  }else if(this.navbardata.fileicon=="none"){
    this.noboxshadowchecked="checked";
    return "No";
  }
}
handleChangefile(event:any){
  if(event.target.value=="Yes"){
    this.noboxshadowchecked="nochecked"; 
  }else if(event.target.value=="No"){
    this.boxshadowchecked="nochecked";
  } 
}

boxshadowValueout(){ 
  if(this.navbardata.outicon=="block"){
    this.boxshadowchecked="checked";
    return "Yes";
  }else if(this.navbardata.outicon=="none"){
    this.noboxshadowchecked="checked";
    return "No";
  }
}
handleChangeout(event:any){
  if(event.target.value=="Yes"){
    this.noboxshadowchecked="nochecked"; 
  }else if(event.target.value=="No"){
    this.boxshadowchecked="nochecked";
  } 
} 

// close icons


 
reloadComponent(self:boolean,urlToNavigateTo ?:string){
  //skipLocationChange:true means dont update the url to / when navigating
 const url=self ? this.router.url : "component/header";
 this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
   this.router.navigate([`/${url}`]).then(()=>{
    //  console.log(`After navigation I am on:${this.router.url}`)
   })
 })
}

  get f(){
    return this.registerForm.controls;
  }
  


  onSubmit(){
    console.log(this.f,"VVVVVVVVVV")
    console.log(this.registerForm,"4submenu1")
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



      // if(this.registerForm.value['color'] == "blue"){
      //   this.bgcolor="#0070ad";
      //   this.color="white"; 
        
      // }

      // if(this.registerForm.value['color'] == "purple"){
      //   this.bgcolor="#2b0a3d";
      //   this.color="white"; 
      // }
      // if(this.registerForm.value['color'] == "dark"){
      //   this.bgcolor="black";
      //   this.color="white"; 
         
      // }
      // if(this.registerForm.value['color'] == "light"){
      //   this.bgcolor="light";
      //   this.color="#0070ad";  
      // }

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


      localStorage.setItem("navbar",JSON.stringify(data));
      this.router.navigate(['/component/navbar']);
      this.reloadComponent(true);
    }
  }

  }


