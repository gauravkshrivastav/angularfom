
import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

export const minmaxValidator: any = (formGroup: FormGroup): ValidationErrors | null => {
  let min = formGroup.get('minvalue')?.value
  let max = formGroup.get('maxvalue')?.value
  if (min && max && min > max) {
    return { 'greater': true };
  }
  return null; //period is ok, return null
}
@Component({
  selector: 'app-rangesliderform',
  templateUrl: './rangesliderform.component.html',
  styleUrls: ['./rangesliderform.component.scss']
})
export class RangesliderformComponent {


  rangesliderdata:any;
  registerForm: FormGroup;
  lengthvalidation:boolean =  false;
  submitted = false;
  @Output() onclose = new EventEmitter<any>;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private commonservice:CommonService) {

  }


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      selectedtitle:['success',[Validators.required]],
      title:['',[Validators.required]],
      minvalue:[null,[Validators.required]],
      maxvalue:[null,[Validators.required]],
      rangewidth:['',[Validators.required]],
      theme:['dark',[Validators.required]],
    },{
      validators:minmaxValidator
    });

    
    if(localStorage.getItem("rangesliderdata")){
      var data1:any =  localStorage.getItem("rangesliderdata");
      this.rangesliderdata = JSON.parse(data1);
      console.log(">>>>",this.rangesliderdata);
      this.registerForm.get("title")?.setValue(this.rangesliderdata?.title);
      this.registerForm.get("minvalue")?.setValue(this.rangesliderdata?.minvalue);
      this.registerForm.get("maxvalue")?.setValue(this.rangesliderdata?.maxvalue);
      this.registerForm.get("theme")?.setValue(this.rangesliderdata?.theme);
      this.registerForm.get("rangewidth")?.setValue(this.rangesliderdata?.rangewidth);
  }

  }



  get f(){
    return this.registerForm.controls as any;
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
          "minvalue":this.registerForm.value.minvalue,
          "maxvalue":this.registerForm.value.maxvalue,
          "rangewidth":this.registerForm.value.rangewidth,
          "theme":this.registerForm.value.theme,
          "color":this.registerForm.value.color
        };
        
        console.log(">>>>>",this.registerForm.value);
        this.onclose.emit();
        this.commonservice.rangeslidercompletedata(data);
        localStorage.setItem("rangesliderdata",JSON.stringify(data));
        this.router.navigate(['/component/range']);
      }    

    // console.log(">>>>>>>>>",this.lengthvalidation);

   
  }



}
