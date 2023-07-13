import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editloader',
  templateUrl: './editloader.component.html',
  styleUrls: ['./editloader.component.scss']
})
export class EditloaderComponent {
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
  loaderdata:any;
  type:any;
  loaderwidth:any;
  loadercolor:any;
  loadertimeout:any;

  constructor(private router: Router,
    private formBuilder: FormBuilder) {

  }


  
  ngOnInit() {

    if(localStorage.getItem("loaderdata")) {
      var data1:any =  localStorage.getItem("loaderdata");
      this.loaderdata = JSON.parse(data1);

      // console.log(">>>",this.loaderdata);
      this.type = this.loaderdata.typefields;
      this.loaderwidth = this.loaderdata.cardwidth;
      this.loadercolor = this.loaderdata.theme;
      this.loadertimeout =this.loaderdata.timeout;
    }

    this.registerForm = this.formBuilder.group({
      uploadimage:[''],
      timeoutvalue:[''],
      typefields:['',[Validators.required]],
      cardwidth:['',[Validators.required]], 
      timeout:['',[Validators.required]], 
      color: ['', [Validators.required]], 
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], 
    });
    this.registerForm.get("typefields")?.valueChanges.subscribe((result)=>{
      console.log("typefields",result);
    })
  }

  get f(){
    return this.registerForm.controls;
  }

  reloadComponent(self:boolean,urlToNavigateTo ?:string){
    //skipLocationChange:true means dont update the url to / when navigating
   const url=self ? this.router.url : "component/loader";
   this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this.router.navigate([`/${url}`]).then(()=>{
      //  console.log(`After navigation I am on:${this.router.url}`)
     })
   })
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
        "bgcolor":this.bgcolor,  
        "color":this.color, 
        "timeoutvalue":this.timeoutvalue, 
        "themecolor":this.themecolor, 
        "theme":this.theme, 
        "typefields":this.registerForm.value.typefields,
        "title":this.registerForm.value['title'], 
        "cardwidth":this.registerForm.value.cardwidth, 
        "timeout":this.registerForm.value.timeout, 
      }
        
      console.log(">>>>>",this.registerForm.value);
      this.onclose.emit();
      localStorage.setItem("loaderdata",JSON.stringify(data));
      this.router.navigate(['/component/loader']);
      this.reloadComponent(true);
    }
  }
}
