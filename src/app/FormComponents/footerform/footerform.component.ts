import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-footerform',
  templateUrl: './footerform.component.html',
  styleUrls: ['./footerform.component.scss']
})
export class FooterformComponent {

  registerForm: FormGroup;
  submitted = false;
  footerdata:any;
  @Output() onclose = new EventEmitter<any>;

  constructor( private router:Router,
    private formBuilder: FormBuilder,
    private commonservice:CommonService
   ) {}

   ngOnInit() {

    this.registerForm = this.formBuilder.group({
      text: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      linkedln: ['', [Validators.required]],
      twitter:['', [Validators.required]],
      insta:['',[Validators.required]],
      facebook:['',Validators.required],
      youtube:['',Validators.required],
      glassdoor:['',[Validators.required]],
      color:['light',[Validators.required]]
    });

    if(localStorage.getItem("footerdata")){
      var data1:any =  localStorage.getItem("footerdata");
      this.footerdata = JSON.parse(data1);

      this.registerForm.get("text")?.setValue(this.footerdata?.text);
      this.registerForm.get("linkedln")?.setValue(this.footerdata?.linkedln);
      this.registerForm.get("twitter")?.setValue(this.footerdata?.twitter);
      this.registerForm.get("insta")?.setValue(this.footerdata?.insta);
      this.registerForm.get("facebook")?.setValue(this.footerdata?.facebook);
      this.registerForm.get("youtube")?.setValue(this.footerdata?.youtube);
      this.registerForm.get("glassdoor")?.setValue(this.footerdata?.glassdoor);
      this.registerForm.get("color")?.setValue(this.footerdata?.color);

      if(this.footerdata?.color == "white" ){
      this.registerForm.get("color")?.setValue("light");
      } else if(this.footerdata.color == "black"){
      this.registerForm.get("color")?.setValue("dark");
      } else if(this.footerdata.color == "#0070ad"){
      this.registerForm.get("color")?.setValue("blue");
      } else if(this.footerdata.color == "#2b0a3d"){
      this.registerForm.get("color")?.setValue("purple");
    }

  }
  
  };
  
    get f(){
      return this.registerForm.controls;
    }

  onSubmit(){
    console.log(">>>>>>",this.f);
    this.submitted = true;
    if(this.registerForm.invalid) { 
      return true;
      
    } else {
      if(this.registerForm.value.color == "light"){
        this.registerForm.value.color = "white";
        this.registerForm.value.textcolr="black";
      } else if(this.registerForm.value.color == "dark"){
        this.registerForm.value.color = "black"
        this.registerForm.value.textcolr="white";
      } else if(this.registerForm.value.color == "blue"){
        this.registerForm.value.color = "#0070ad"
        this.registerForm.value.textcolr="white";
      } else if(this.registerForm.value.color == "purple"){
        this.registerForm.value.color = "#2b0a3d"
        this.registerForm.value.textcolr="white";
      }
      this.onclose.emit();
      const data = {
        "text":this.registerForm.value.text,
        "linkedln":this.registerForm.value.linkedln,
        "twitter":this.registerForm.value.twitter,
        "insta":this.registerForm.value.insta,
        "facebook":this.registerForm.value.facebook,
        "youtube":this.registerForm.value.youtube,
        "glassdoor":this.registerForm.value.glassdoor,
        "color":this.registerForm.value.color,
        "textcolor":this.registerForm.value.textcolr
      }
      console.log(">>",data);


      localStorage.setItem("footerdata",JSON.stringify(data));
      this.commonservice.footercompletedata(data);
      this.router.navigate(['/component/footer']);
      // this.reloadComponent(true);
    }

  }
}
