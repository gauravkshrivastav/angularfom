import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-progressform',
  templateUrl: './progressform.component.html',
  styleUrls: ['./progressform.component.scss']
})
export class ProgressformComponent {

  progressdata:any;
  registerForm: FormGroup;
  submitted = false;
  lengthvalidation:boolean =  false;
  @Output() onclose = new EventEmitter<any>;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private commonservice:CommonService) {

  }


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      selectedtitle:['success',[Validators.required]],
      title:['',[Validators.required,Validators.maxLength(20)]],
      progressvalue:['',[Validators.required,Validators.min(1),Validators.max(100),Validators.maxLength(3)]],
      rangewidth:['',[Validators.required]],
      theme:['dark',[Validators.required]],
    });

    
    if(localStorage.getItem("progressdata")){
      var data1:any =  localStorage.getItem("progressdata");
      this.progressdata = JSON.parse(data1);
      console.log(">>>>>>",this.progressdata);
      this.registerForm.get("title")?.setValue(this.progressdata?.title);
      this.registerForm.get("progressvalue")?.setValue(this.progressdata?.progressvalue);
      this.registerForm.get("theme")?.setValue(this.progressdata?.theme);
      this.registerForm.get("rangewidth")?.setValue(this.progressdata?.rangewidth);
  }
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



  get f(){
    return this.registerForm.controls;
  }

  
  onSubmit(){
    console.log(">>>>",this.registerForm);
    this.submitted = true;
    if(this.registerForm.value.progressvalue.length > 100) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>");

      this.lengthvalidation = true;
      return true;
    } else {
      this.lengthvalidation = false;
    }


    if(this.registerForm.invalid && !this.lengthvalidation) {
      return true;
    } else {

      if(this.registerForm.value.theme == "light"){
        this.registerForm.value.color = "white";
      } else if(this.registerForm.value.theme == "dark"){
        this.registerForm.value.color = "black"
      } else if(this.registerForm.value.theme == "blue"){
        this.registerForm.value.color = "#0070ad"
      } else if(this.registerForm.value.theme == "purple"){
        this.registerForm.value.color = "#2b0a3d"
      }
      const data = {
        "title":this.registerForm.value.title,
        "progressvalue":this.registerForm.value.progressvalue,
        "rangewidth":this.registerForm.value.rangewidth,
        "theme":this.registerForm.value.theme,
        "color":this.registerForm.value.color
      };
      
      console.log(">>>>>",this.registerForm.value);
      this.onclose.emit();
      this.commonservice.progresscompletedata(data);
      localStorage.setItem("progressdata",JSON.stringify(data));
      this.router.navigate(['/component/progress']);
    }
  }



}

