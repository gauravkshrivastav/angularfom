import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-toasterform',
  templateUrl: './toasterform.component.html',
  styleUrls: ['./toasterform.component.scss']
})
export class ToasterformComponent  implements OnInit {


  registerForm: FormGroup;
  submitted = false;
  showtoasterdata:any;
  @Output() onclose = new EventEmitter<any>;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private commonservice:CommonService) {

  }


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      selectedtitle:['success',[Validators.required]],
      title:['',[Validators.required,Validators.maxLength(20)]],
      message:['',[Validators.required,Validators.maxLength(100)]],
      buttontext:['',[Validators.required]],
      direction:['toast-top-right',[Validators.required]],
      // theme:['dark',[Validators.required]],
    });

    
    if(localStorage.getItem("toasterdata")){
      var data1:any =  localStorage.getItem("toasterdata");
      var toasterdata = JSON.parse(data1);
      this.showtoasterdata = JSON.parse(data1);
      this.registerForm.get("selectedtitle")?.setValue(toasterdata?.selectedtitle);
      this.registerForm.get("title")?.setValue(toasterdata?.title);
      this.registerForm.get("message")?.setValue(toasterdata?.message);
      this.registerForm.get("buttontext")?.setValue(toasterdata?.buttontext);
      this.registerForm.get("direction")?.setValue(toasterdata?.direction);
      // this.registerForm.get("theme")?.setValue(toasterdata?.theme);
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

      // if(this.registerForm.value.theme == "light"){
      //   this.registerForm.value.color = "#F1F4F8";
      // } else if(this.registerForm.value.theme == "dark"){
      //   this.registerForm.value.color = "black"
      // } else if(this.registerForm.value.theme == "blue"){
      //   this.registerForm.value.color = "#0070ad"
      // } else if(this.registerForm.value.theme == "purple"){
      //   this.registerForm.value.color = "#2b0a3d"
      // }
      const data = {
        "selectedtitle":this.registerForm.value.selectedtitle,
        "title":this.registerForm.value.title,
        "message":this.registerForm.value.message,
        "buttontext":this.registerForm.value.buttontext,
        "direction":this.registerForm.value.direction,
        // "theme":this.registerForm.value.theme,
        "color":this.registerForm.value.color
      };
      
      console.log(">>>>>",this.registerForm.value);
      this.onclose.emit();
      this.commonservice.toastercompletedata(data);
      localStorage.setItem("toasterdata",JSON.stringify(data));
      this.router.navigate(['/component/toaster']);
    }
  }

}
