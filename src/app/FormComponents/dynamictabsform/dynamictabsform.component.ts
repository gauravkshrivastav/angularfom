import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-dynamictabsform',
  templateUrl: './dynamictabsform.component.html',
  styleUrls: ['./dynamictabsform.component.scss']
})
export class DynamictabsformComponent {

  selectdata:any;
  registerForm: FormGroup;
  submitted = false;
  dynamictabsdata: any;
  dynamicdata: any = [];

  @Output() onclose = new EventEmitter<any>;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private commonservice:CommonService) {

  }


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      title:['',[Validators.required,Validators.maxLength(20)]],
      optionvalue:['',[Validators.required]],
      helpertext1:[''],
      description1:[''],
      helpertext2:[''],
      description2:[''],
      helpertext3:[''],
      description3:[''],
      helpertext4:[''],
      description4:[''],
      theme:['dark',[Validators.required]],
    });

    this.registerForm.get("optionvalue")?.valueChanges.subscribe((result)=>{

      if(result == 1) {
        this.registerForm.get("helpertext1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(200)]);
        this.registerForm.get("helpertext2")?.clearValidators();
        this.registerForm.get("description2")?.clearValidators();
        this.registerForm.get("helpertext3")?.clearValidators();
        this.registerForm.get("description3")?.clearValidators();
        this.registerForm.get("helpertext2")?.setValue("");
        this.registerForm.get("description2")?.setValue("");
        this.registerForm.get("helpertext3")?.setValue("");
        this.registerForm.get("description3")?.setValue("");
        this.registerForm.get("helpertext4")?.setValue("");
        this.registerForm.get("description4")?.setValue("");

      }  else if(result == 2) { 
        this.registerForm.get("helpertext1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("helpertext2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(200)]);
        this.registerForm.get("description2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(200)]);
        this.registerForm.get("helpertext3")?.clearValidators();
        this.registerForm.get("description3")?.clearValidators();
        this.registerForm.get("helpertext3")?.setValue("");
        this.registerForm.get("description3")?.setValue("");
        this.registerForm.get("helpertext4")?.setValue("");
        this.registerForm.get("description4")?.setValue("");

        // this.selectordata = 1,this.registerForm.value.helpertext1)
      } else if(result == 3) {
        this.registerForm.get("helpertext1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("helpertext2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("helpertext3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(200)]);
        this.registerForm.get("description2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(200)]);
        this.registerForm.get("description3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(200)]);
        this.registerForm.get("helpertext4")?.clearValidators();
        this.registerForm.get("description4")?.clearValidators();
        this.registerForm.get("helpertext4")?.setValue("");
        this.registerForm.get("description4")?.setValue("");

      } else if(result == 4) {
        this.registerForm.get("helpertext1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("helpertext2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("helpertext3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("helpertext4")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(15)]);
        this.registerForm.get("description1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(200)]);
        this.registerForm.get("description2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(200)]);
        this.registerForm.get("description3")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(200)]);
        this.registerForm.get("description4")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(200)]);
      }
      else {
        this.registerForm.get("helpertext1")?.clearValidators();
        this.registerForm.get("helpertext2")?.clearValidators();
        this.registerForm.get("helpertext3")?.clearValidators();
        this.registerForm.get("helpertext4")?.clearValidators();
        this.registerForm.get("description1")?.clearValidators();
        this.registerForm.get("description2")?.clearValidators();
        this.registerForm.get("description3")?.clearValidators();
        this.registerForm.get("description4")?.clearValidators();

      }
    })

    
    if(localStorage.getItem("dynamictabsdata")){
      var data1:any =  localStorage.getItem("dynamictabsdata");
      this.dynamictabsdata = JSON.parse(data1);
      this.registerForm.get("title")?.setValue(this.dynamictabsdata?.title);
      this.registerForm.get("theme")?.setValue(this.dynamictabsdata?.theme);
      this.registerForm.get("optionvalue")?.setValue(this.dynamictabsdata?.optionvalue);
      this.registerForm.get("helpertext1")?.setValue(this.dynamictabsdata.helpertext1);
      this.registerForm.get("helpertext2")?.setValue( this.dynamictabsdata.helpertext2);
      this.registerForm.get("helpertext3")?.setValue( this.dynamictabsdata.helpertext3);
      this.registerForm.get("helpertext4")?.setValue( this.dynamictabsdata.helpertext4);
      this.registerForm.get("description1")?.setValue(this.dynamictabsdata.description1);
      this.registerForm.get("description2")?.setValue( this.dynamictabsdata.description2);
      this.registerForm.get("description3")?.setValue( this.dynamictabsdata.description3);
      this.registerForm.get("description4")?.setValue( this.dynamictabsdata.description4);
  }
  }




  get f(){
    return this.registerForm.controls;
  }

  
  onSubmit(){
    console.log(">>>>",this.registerForm);    
    this.submitted = true;
    if(this.registerForm.invalid) {
      return true;
    } else {

      if(this.registerForm.value.theme == "light"){
        this.registerForm.value.color = "#F1F4F8";
      } else if(this.registerForm.value.theme == "dark"){
        this.registerForm.value.color = "black"
      } else if(this.registerForm.value.theme == "blue"){
        this.registerForm.value.color = "#0070ad"
      } else if(this.registerForm.value.theme == "purple"){
        this.registerForm.value.color = "#2b0a3d"
      }

      const data = {
        "title":this.registerForm.value.title,
        "optionvalue":this.registerForm.value.optionvalue,
        "helpertext1":this.registerForm.value.helpertext1,
        "description1":this.registerForm.value.description1,
        "helpertext2":this.registerForm.value.helpertext2,
        "description2":this.registerForm.value.description2,
        "helpertext3":this.registerForm.value.helpertext3,
        "description3":this.registerForm.value.description3,
        "helpertext4":this.registerForm.value.helpertext4,
        "description4":this.registerForm.value.description4,
        "theme":this.registerForm.value.theme,
        "color":this.registerForm.value.color,
      };

      
      this.onclose.emit();
      this.commonservice.tabscompletedata(data);
      localStorage.setItem("dynamictabsdata",JSON.stringify(data));
      this.router.navigate(['/component/dynamics']);
    }
  }

};

