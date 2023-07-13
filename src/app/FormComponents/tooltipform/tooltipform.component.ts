import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-tooltipform',
  templateUrl: './tooltipform.component.html',
  styleUrls: ['./tooltipform.component.scss']
})
export class TooltipformComponent implements OnInit  {


  registerForm: FormGroup;
  submitted = false;
  tooltipdata:any;
  @Output() onclose = new EventEmitter<any>;

  constructor( private router:Router,
     private formBuilder: FormBuilder,
     private commonservice:CommonService
    ) {}

  ngOnInit() {

  this.registerForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    tooltipname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    color: ['light', [Validators.required]],
    direction: ['right', [Validators.required]],
  });

  
  if(localStorage.getItem("tooltip")) {
    var data1:any =  localStorage.getItem("tooltip");
    this.tooltipdata = JSON.parse(data1);
    this.registerForm.get("title")?.setValue(this.tooltipdata?.title);
    this.registerForm.get("tooltipname")?.setValue(this.tooltipdata?.tooltipname);
    this.registerForm.get("direction")?.setValue(this.tooltipdata?.direction);
    this.registerForm.get("color")?.setValue(this.tooltipdata?.color);

  }

};


  get f(){
    return this.registerForm.controls;
  }




  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid) { 
      return true;
      
    }

    else  {

      console.log("this.registerForm",this.registerForm);
      this.onclose.emit();

      if(this.registerForm.value['direction'] == "topright" || this.registerForm.value['direction'] == "topleft") {
        this.registerForm.value.placement = "top";
      } 
      if(this.registerForm.value['direction'] == "bottomright" || this.registerForm.value['direction'] == "bottomleft") {
        this.registerForm.value.placement = "bottom";
      }
      if(this.registerForm.value['direction'] == "right") {
        this.registerForm.value.placement = "right";
      } 
      if(this.registerForm.value['direction'] == "left") {
        this.registerForm.value.placement = "left";
      }

      const data = {
        "title":this.registerForm.value['title'],
        "tooltipname":this.registerForm.value['tooltipname'],
        "direction":this.registerForm.value.direction,
        "placement":this.registerForm.value.placement,
        "color":this.registerForm.value.color
      }
      console.log(">>",data);
      localStorage.setItem("tooltip",JSON.stringify(data));
      this.commonservice.dashboardmatchjob(data);
      this.router.navigate(['/component/tooltip']);

    }

  };
 
}
