import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editheader',
  templateUrl: './editheader.component.html',
  styleUrls: ['./editheader.component.scss']
})
export class EditheaderComponent implements OnInit {

  title = "";
  bgcolor:any;
  color:any;
  themecolor:any;
  registerForm: FormGroup;
  submitted = false;
  headerdata:any;
  image1checked:any;
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
    if(localStorage.getItem("data")) {
      var data1:any =  localStorage.getItem("data");
      this.headerdata = JSON.parse(data1);

      console.log(">>>",this.headerdata);
      if(this.headerdata.bgcolor == "#0070ad"){
        this.themecolor = "blue";
      } else if(this.headerdata.bgcolor == "#2b0a3d"){
        this.themecolor = "purple";
      } else if(this.headerdata.bgcolor == "black"){
        this.themecolor = "dark";
      } else if(this.headerdata.bgcolor == "white"){
        this.themecolor = "light";
      }

      const image1value = () => {
        if(this.headerdata.bgcolor == "#0070ad"){
          if(this.headerdata.image1  == "Yes" && this.headerdata.whitewbh  == "Yes"){
            return "Yes";
          } else if(this.headerdata.image1  == "No" && this.headerdata.whitewbh  == "Yes") {
            return "Yes";
          } else {
            return "No";
          }
        } else if(this.headerdata.bgcolor == "black"){
          if(this.headerdata.image1  == "Yes"){
            return "Yes";
          } else {
            return "No";
          }
        } else if(this.headerdata.bgcolor == "#2b0a3d"){
          if(this.headerdata.image1  == "Yes"){
            return "Yes";
          } else {
            return "No";
          }
        } else if(this.headerdata.bgcolor == "white"){
          if(this.headerdata.image1  == "Yes"){
            return "Yes";
          } else {
            return "No";
          }
        } 
       }
  
       const image2value = () => {
        if(this.headerdata.image2  == "Yes"){
          return "Yes";
        } else {
          return "No";
        }
       }
  
       const image3value = () => {
        if(this.headerdata.bgcolor == "#0070ad"){
          if(this.headerdata.image3  == "Yes" && this.headerdata.image4  == "Yes"){
            return "Yes";
          } else if(this.headerdata.image3  == "No" && this.headerdata.image4  == "No"){
            return "No";
          } else {
            return "No";
          }
        } else if(this.headerdata.bgcolor == "#2b0a3d") {
          if(this.headerdata.image3  == "Yes"){
            return "Yes";
          } else if(this.headerdata.image3  == "No" && this.headerdata.image4  == "Yes") {
            return "Yes";
          } else if(this.headerdata.image3  == "No" && this.headerdata.image4  == "No"){
            return "No";
          } else {
            return "";
          }
        } else if(this.headerdata.bgcolor == "black") {
          if(this.headerdata.image3  == "Yes" && this.headerdata.image4  == "Yes"){
            return "Yes";
          } else if(this.headerdata.image3  == "No" && this.headerdata.image4  == "No"){
            return "No";
          } else {
            return "";
          }
        } else if(this.headerdata.bgcolor == "white") {
          if(this.headerdata.image3  == "Yes"){
            return "Yes";
          } else if(this.headerdata.image3  == "No" && this.headerdata.image4  == "Yes") {
            return "Yes";
          } else if(this.headerdata.image3  == "No" && this.headerdata.image4  == "No"){
            return "No";
          } else {
            return "";
          }
        }  else {
          return "";
        }
      
      }
  this.registerForm = this.formBuilder.group({
    image1:[image1value(), [Validators.required]],
    image2: [image2value(), [Validators.required]],
    image3: [image3value(), [Validators.required]],
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    welcome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    color: ['light', [Validators.required]],
  });
  }

};

handlechange(event:any){
  if(event.target.checked){
    this.image3checked = "nochecked";
    this.noimage3checked = "nochecked";
  }
}
handle1change(event:any){
  if(event.target.checked){
    this.image1checked = "nochecked";
    this.noimage1checked = "nochecked";
  }
}
handle2change(event:any){
  if(event.target.checked){
    this.image2checked = "nochecked";
    this.noimage2checked = "nochecked";
  }
}

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
    this.submitted = true;
    if(this.registerForm.invalid) {
      return true;
    }
    else {
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
      this.reloadComponent(true);
    }
  }

  }


