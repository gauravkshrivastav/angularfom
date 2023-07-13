
import { getLocaleDateFormat } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/common-service';
@Component({
  selector: 'app-imagesliderform',
  templateUrl: './imagesliderform.component.html',
  styleUrls: ['./imagesliderform.component.scss']
})
export class ImagesliderformComponent {

  submitted = false;
  imagesliderdata:any;
  registerForm: FormGroup;
  @Output() onclose = new EventEmitter<any>;
  nodefaultimage:any;
  carddata:any;
  imagechecked:any;


  constructor(private router: Router,
    private formBuilder: FormBuilder, private commonservice:CommonService) {

  }


  image = () => {
    if(this.carddata.image  == "Yes"){
      return "Yes";
    } else {
      return "No";
    }
   }


  ngOnInit() {

      this.registerForm = this.formBuilder.group({
      image:['',[Validators.required]],
      cardwidth:['',[Validators.required]],
      theme:['',[Validators.required]],
    });


    if(localStorage.getItem("imagesliderdata")){
      var data1:any =  localStorage.getItem("imagesliderdata");
      this.imagesliderdata = JSON.parse(data1);
      console.log(">>>>",this.imagesliderdata);
      this.registerForm.get("image")?.setValue(this.imagesliderdata?.image);
      this.registerForm.get("theme")?.setValue(this.imagesliderdata?.theme);
      this.registerForm.get("cardwidth")?.setValue(this.imagesliderdata?.cardwidth);
  }

  }


  get f(){
    return this.registerForm.controls;
  }


  onSubmit(){
    console.log(this.registerForm,"formgroup")
    this.submitted = true;
    if(this.registerForm.invalid) {
      return true;
    } else {
      const data = {
        "theme":this.registerForm.value.theme,
        "image":this.registerForm.value.image,
        "cardwidth":this.registerForm.value.cardwidth,
      }
      // console.log(">>>>>",data);
      this.onclose.emit();
      localStorage.setItem("imagesliderdata",JSON.stringify(data));
      this.commonservice.imageslidercompletedata(data);
        this.router.navigate(['/component/imageslider']);
    }

  }


}
