import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-editbutton',
  templateUrl: './editbutton.component.html',
  styleUrls: ['./editbutton.component.scss']
})
export class EditbuttonComponent implements OnInit {
  color:any;
  btnwitdth:any;
  bgcolor:any; 
  buttonwith1:any;
  buttonpadding1:any;
  themecolor:any; 
  buttondata: any;  
  boxshadow:any;
  boxshadowchecked:any;
  noboxshadowchecked:any;
  image1checked:any;
  btnpadding:any;
  noimage1checked:any;
  registerForm: FormGroup;
  submitted = false;

  @Output() onclose = new EventEmitter<any>;

  constructor(private router: Router,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    if (localStorage.getItem("button")) {
      var button1: any = localStorage.getItem("button");
      this.buttondata = JSON.parse(button1);
      console.log("buttondata", this.buttondata);
 
      if(this.buttondata.btnwitdth == "100%"){
        this.buttonwith1 = "Full";
      } else if(this.buttondata.btnwitdth == "75%"){
        this.buttonwith1 = "75%";
      } else if(this.buttondata.btnwitdth == "50%"){
        this.buttonwith1 = "50%";
      } else if(this.buttondata.btnwitdth == "25%"){
        this.buttonwith1 = "25%";
      }
      if(this.buttondata.btnpadding == "5px"){
        this.buttonpadding1 = "5px padding";
      } else if(this.buttondata.btnpadding == "10px"){
        this.buttonpadding1 = "10px padding";
      } else if(this.buttondata.btnpadding == "15px"){
        this.buttonpadding1 = "15px padding";
      } else if(this.buttondata.btnpadding == "20px"){
        this.buttonpadding1 = "20px padding";
      }

      if(this.buttondata.bgcolor == "#0070ad"){
        this.themecolor = "blue";
      } else if(this.buttondata.bgcolor == "#2b0a3d"){
        this.themecolor = "purple";
      } else if(this.buttondata.bgcolor == "black"){
        this.themecolor = "dark";
      } else if(this.buttondata.bgcolor == "white"){
        this.themecolor = "light";
      }

      this.registerForm = this.formBuilder.group({
      // fontsize: ['', [Validators.required]],
      borderradius: ['', [Validators.required]],
      borderwidth: ['', [Validators.required]], 
      textvalue: ['', [Validators.required,Validators.maxLength(20)]],
      color: ['light', [Validators.required]],
      btnwitdth: ['25%', [Validators.required]],
      btnpadding: ['5px padding', [Validators.required]],
      imagev: [this.boxshadowValue(), [Validators.required]],
      
      });
    }
  };

  boxshadowValue(){
    if(this.buttondata.imagev=="Yes"){
      this.boxshadowchecked="checked";
      return "Yes";
    }else if(this.buttondata.imagev=="none"){
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

  reloadComponents(self: boolean, urlToNavigateTo?: string) {
    const url = self ? this.router.url : "component/button";
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

    console.log(this.registerForm,"formgroup")
    this.submitted = true;
    if (this.registerForm.invalid) { 
      return true; 
    }
    else { 
       
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
        // this.registerForm.value['boxshadow']="block";
        this.boxshadow="#00000047 4px 4px 10px";
      } else {
        this.registerForm.value['imagev']="none";
      }

      // var elements = document.getElementsByClassName('modal-backdrop');
      // console.log(elements);
      // elements.classList.remove("modal-backdrop");


      // document.getElementsByClassName("modal-backdrop").classList.remove("modal-backdrop");

      
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

      this.onclose.emit(); 
      const data = { 
      "bgcolor":this.bgcolor, 
      "color":this.color,
      "boxshadow":this.boxshadow,
      "btnwitdth":this.btnwitdth,
      "btnpadding":this.btnpadding,
      "imagev":this.registerForm.value.imagev,
      buttondesign:this.registerForm.value,
      // borderradius:this.registerForm.value.borderradius,
      };
      
       
      // console.log(">>>>>>>>>>>",this.registerForm.value);
      // localStorage.setItem("button",JSON.stringify(data));
      // this.router.navigateByUrl('/component/button');

      localStorage.setItem("button", JSON.stringify(data )); 
      this.router.navigate(['/component/button'])
      this.reloadComponents(true);
    }
  }
}
