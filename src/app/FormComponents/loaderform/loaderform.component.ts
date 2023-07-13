import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loaderform',
  templateUrl: './loaderform.component.html',
  styleUrls: ['./loaderform.component.scss']
})
export class LoaderformComponent implements OnInit{
  submitted = false;
  registerForm: FormGroup;
  bgcolor: any;
  color: any;
  // alignverticle:any;
  theme:any;
  themecolor:any;
  timeoutvalue:any;
  @Output() onclose = new EventEmitter<any>;
  nodefaultimage:any;
  storage:any;
  imageform:any; 

  constructor(private router: Router,
    private formBuilder: FormBuilder) {

  }


  
  ngOnInit() {


    this.registerForm = this.formBuilder.group({
     
      uploadimage:[''],
      // buttons:['',[Validators.required]],
      timeoutvalue:[''],
      typefields:['',[Validators.required]],
      cardwidth:['',[Validators.required]], 
      timeout:['',[Validators.required]], 
      color: ['', [Validators.required]], 
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], 
    });
  }

  get f(){
    return this.registerForm.controls;
  }
 
  

  onSubmit(){ 
    this.submitted = true;
    console.log("Checkbox registerForm",this.f);

    if(this.registerForm.invalid) {
      return true;
    } else { 

      if (this.registerForm.value['timeout'] == "1000ms") {
        this.timeoutvalue = "onemilisecond"; 
      }
      if (this.registerForm.value['timeout'] == "10000ms") {
        this.timeoutvalue = "twomilisecond"; 
      }
      if (this.registerForm.value['timeout'] == "20000ms") {
        this.timeoutvalue = "fivemilisecond"; 
      }

      if (this.registerForm.value['color'] == "blue") {
        this.bgcolor = "#0070ad";
        this.color = "white";
        this.theme="blue";
        this.themecolor = "bluecolor";
      }
      if (this.registerForm.value['color'] == "purple") {
        this.bgcolor = "#2b0a3d";
        this.color = "white";
        this.theme="purple";
        this.themecolor = "purplecolor";

      }
      if (this.registerForm.value['color'] == "dark") {
        this.bgcolor = "black";
        this.color = "white";
        this.theme="dark";
        this.themecolor = "darkcolor";
      }
      if (this.registerForm.value['color'] == "light") {
        this.bgcolor = "#eee";
        this.color = "#000";
        this.theme="light";
        this.themecolor = "lightcolor";
      }
      const data = {
        // "text1":this.registerForm.value.text1,
        // "text2":this.registerForm.value.text2,
        // "text3":this.registerForm.value.text3,
        // "text4":this.registerForm.value.text4,
        "bgcolor":this.bgcolor,  
        "color":this.color, 
        // "alignverticle":this.alignverticle, 
        "timeoutvalue":this.timeoutvalue, 
        "themecolor":this.themecolor, 
        "theme":this.theme, 
        "typefields":this.registerForm.value.typefields,
        // "buttons":this.registerForm.value.buttons,
        "title":this.registerForm.value['title'], 
        // "addbutton":this.registerForm.value.addbutton,
        "cardwidth":this.registerForm.value.cardwidth, 
        "timeout":this.registerForm.value.timeout, 
      }
        
      console.log(">>>>>",this.registerForm.value);
      this.onclose.emit();
      localStorage.setItem("loaderdata",JSON.stringify(data));
      this.router.navigate(['/component/loader']);
    }
  }

}
