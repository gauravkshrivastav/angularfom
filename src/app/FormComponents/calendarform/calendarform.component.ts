import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-calendarform',
  templateUrl: './calendarform.component.html',
  styleUrls: ['./calendarform.component.scss']
})
export class CalendarformComponent {

  

  calendardatadatashow:any;
  registerForm: FormGroup;
  submitted = false;
  @Output() onclose = new EventEmitter<any>;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private commonservice:CommonService) {

  }


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      selectedtitle:['success',[Validators.required]],
      title:['',[Validators.required,Validators.maxLength(20)]],
      calendaroption:['calendar',[Validators.required]],
      theme:['dark',[Validators.required]],
      rangewidth:['25%',[Validators.required]],
    });

    
    if(localStorage.getItem("calendardata")){
      var data1:any =  localStorage.getItem("calendardata");
      var calendardatadata = JSON.parse(data1);
      this.calendardatadatashow =  JSON.parse(data1);
      this.registerForm.get("title")?.setValue(calendardatadata?.title);
      this.registerForm.get("theme")?.setValue(calendardatadata?.theme);
      this.registerForm.get("calendaroption")?.setValue(calendardatadata?.calendaroption);
      this.registerForm.get("rangewidth")?.setValue(calendardatadata?.rangewidth);

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
        "calendaroption":this.registerForm.value.calendaroption,
        "theme":this.registerForm.value.theme,
        "color":this.registerForm.value.color,
        "rangewidth":this.registerForm.value.rangewidth
      };
      
      console.log(">>>>>",this.registerForm.value);
      this.onclose.emit();
      this.commonservice.calendarcompletedata(data);
      localStorage.setItem("calendardata",JSON.stringify(data));
      this.router.navigate(['/component/calendar']);
    }
  }



}
