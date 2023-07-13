import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-selectform',
  templateUrl: './selectform.component.html',
  styleUrls: ['./selectform.component.scss']
})
export class SelectformComponent {

  
  selectdata:any;
  registerForm: FormGroup;
  submitted = false;
  selectordata: any = [];
  @Output() onclose = new EventEmitter<any>;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private commonservice:CommonService) {

  }


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      title:['',[Validators.required,Validators.maxLength(20)]],
      selector:['select',[Validators.required]],
      optionvalue:['',[Validators.required]],
      helpertext1:[''],
      helpertext2:[''],
      helpertext3:[''],
      helpertext4:[''],
      helpertext5:[''],
      selectwidth:['',[Validators.required]],
      theme:['dark',[Validators.required]],
    });

    this.registerForm.get("optionvalue")?.valueChanges.subscribe((result)=>{

      console.log("vishnu",result);

      if(result == 1) {
        this.registerForm.get("helpertext1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
        this.registerForm.get("helpertext2")?.clearValidators();
        this.registerForm.get("helpertext3")?.clearValidators();
        this.registerForm.get("helpertext4")?.clearValidators();
        this.registerForm.get("helpertext2")?.setValue("");
        this.registerForm.get("helpertext3")?.setValue("");
        this.registerForm.get("helpertext4")?.setValue("");
        this.registerForm.get("helpertext5")?.setValue("");
      } 
       else if(result == 2) {
        this.registerForm.get("helpertext1")?.setValidators([Validators.required]);
        this.registerForm.get("helpertext2")?.setValidators([Validators.required]);

        this.registerForm.get("helpertext3")?.clearValidators();
        this.registerForm.get("helpertext4")?.clearValidators();
        this.registerForm.get("helpertext3")?.setValue("");
        this.registerForm.get("helpertext4")?.setValue("");
        this.registerForm.get("helpertext5")?.setValue("");
        // this.selectordata = 1,this.registerForm.value.helpertext1)
      } 
      else if(result == 3) {
        this.registerForm.get("helpertext1")?.setValidators([Validators.required]);
        this.registerForm.get("helpertext2")?.setValidators([Validators.required]);
        this.registerForm.get("helpertext3")?.setValidators([Validators.required]);

        this.registerForm.get("helpertext4")?.clearValidators();
        this.registerForm.get("helpertext4")?.setValue("");
        this.registerForm.get("helpertext5")?.setValue("");

      } 
      else if(result == 4) {
        this.registerForm.get("helpertext1")?.setValidators([Validators.required]);
        this.registerForm.get("helpertext2")?.setValidators([Validators.required]);
        this.registerForm.get("helpertext3")?.setValidators([Validators.required]);
        this.registerForm.get("helpertext4")?.setValidators([Validators.required]);

        this.registerForm.get("helpertext5")?.clearValidators();
        this.registerForm.get("helpertext5")?.setValue("");

      } 
      else if(result == 5) {
        this.registerForm.get("helpertext1")?.setValidators([Validators.required]);
        this.registerForm.get("helpertext2")?.setValidators([Validators.required]);
        this.registerForm.get("helpertext3")?.setValidators([Validators.required]);
        this.registerForm.get("helpertext4")?.setValidators([Validators.required]);
        this.registerForm.get("helpertext5")?.setValidators([Validators.required]);

      } 
      else {
        this.registerForm.get("helpertext1")?.clearValidators();
        this.registerForm.get("helpertext2")?.clearValidators();
        this.registerForm.get("helpertext3")?.clearValidators();
        this.registerForm.get("helpertext4")?.clearValidators();
        this.registerForm.get("helpertext5")?.clearValidators();                            
      }
    })

    
    if(localStorage.getItem("selectdata")){
      var data1:any =  localStorage.getItem("selectdata");
      this.selectdata = JSON.parse(data1);
      console.log(">>>>>",this.selectdata);
      this.registerForm.get("title")?.setValue(this.selectdata?.title);
      this.registerForm.get("theme")?.setValue(this.selectdata?.theme);
      this.registerForm.get("optionvalue")?.setValue(this.selectdata?.optionvalue);
      this.registerForm.get("selectwidth")?.setValue(this.selectdata?.selectwidth);
      this.registerForm.get("selector")?.setValue(this.selectdata?.selector);
      this.registerForm.get("helpertext1")?.setValue(this.selectdata?.selectordata[0]?.name);
      this.registerForm.get("helpertext2")?.setValue( this.selectdata?.selectordata[1]?.name);
      this.registerForm.get("helpertext3")?.setValue( this.selectdata?.selectordata[2]?.name);
      this.registerForm.get("helpertext4")?.setValue( this.selectdata?.selectordata[3]?.name);
      this.registerForm.get("helpertext5")?.setValue( this.selectdata?.selectordata[4]?.name);
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
        this.registerForm.value.color = "#ccc";
      } else if(this.registerForm.value.theme == "dark"){
        this.registerForm.value.color = "black"
      } else if(this.registerForm.value.theme == "blue"){
        this.registerForm.value.color = "#0070ad"
      } else if(this.registerForm.value.theme == "purple"){
        this.registerForm.value.color = "#2b0a3d"
      }

      this.selectordata = [];
      if(this.registerForm.value.helpertext1) {
        this.selectordata.push({id:1,"name":this.registerForm.value.helpertext1})
      } 
      if(this.registerForm.value.helpertext2) {
        this.selectordata.push({id:2,"name":this.registerForm.value.helpertext2})
      }
      if(this.registerForm.value.helpertext3) {
        this.selectordata.push({id:3,"name":this.registerForm.value.helpertext3})
      }

      if(this.registerForm.value.helpertext4) {
        this.selectordata.push({id:4,"name":this.registerForm.value.helpertext4})
      }
      if(this.registerForm.value.helpertext5) {
        this.selectordata.push({id:5,"name":this.registerForm.value.helpertext5})
      }

      console.log(">>>>>",this.selectordata);

      const unique = [...new Map(this.selectordata.map((m:any) => [m.id, m])).values()];

      console.log(">>>>>>>>unique",unique);

      const data = {
        "title":this.registerForm.value.title,
        "selector":this.registerForm.value.selector,
        "optionvalue":this.registerForm.value.optionvalue,
        "selectwidth":this.registerForm.value.selectwidth,
        "theme":this.registerForm.value.theme,
        "color":this.registerForm.value.color,
        "selectordata":unique
      };

      
      this.onclose.emit();
      this.commonservice.selectorcompletedata(data);
      localStorage.setItem("selectdata",JSON.stringify(data));
      this.router.navigate(['/component/selector']);
    }
  }



}

