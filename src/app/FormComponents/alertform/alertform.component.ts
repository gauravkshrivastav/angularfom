 
import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-alertform',
  templateUrl: './alertform.component.html',
  styleUrls: ['./alertform.component.scss']
})
export class AlertformComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  bgcolor: any;
  color: any;
  whitetype:any;
  // nodefaultimage: any;
  // storage: any;
  // imageform: any;


  @Output() onclose = new EventEmitter<any>;

  constructor(private router: Router,
    private formBuilder: FormBuilder) {

  } 
  



  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      cardwidth: ['', [Validators.required]],
      selectedtitle: ['', [Validators.required,Validators.maxLength(20)]],
      // theme: ['', [Validators.required]],
      color: ['', [Validators.required]], 
      alertdetails: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]]
    });

  }

  get f() {
    return this.registerForm.controls;
  }


  onSubmit() {
    console.log(">>>>", this.f);
    this.submitted = true;
    console.log(">>>>>>>>this.registerForm", this.f);

    if (this.registerForm.invalid) {
      return true;
    } else {

      if (this.registerForm.value['color'] == "blue") {
        this.bgcolor = "#0070ad";
        this.color = "white";
      }
      if (this.registerForm.value['color'] == "purple") {
        this.bgcolor = "#2b0a3d";
        this.color = "white";

      }
      if (this.registerForm.value['color'] == "dark") {
        this.bgcolor = "black";
        this.color = "white";
      }
      if (this.registerForm.value['color'] == "light") {
        this.bgcolor = "#F1F4F8";
        this.color = "#000";
        this.whitetype="whitetype";
      }

      const data = {
        "bgcolor":this.bgcolor,  
        "color":this.color,
        "whitetype":this.whitetype,
        "theme": this.registerForm.value.theme,
        "alertdetails": this.registerForm.value['alertdetails'],
        "selectedtitle": this.registerForm.value.selectedtitle,
        "cardwidth": this.registerForm.value.cardwidth,
       
      }

      console.log(">>>>>", this.registerForm.value);
      this.onclose.emit();
      localStorage.setItem("alertdata", JSON.stringify(data));
      this.router.navigate(['/component/alerts']);
    }
  }

}
