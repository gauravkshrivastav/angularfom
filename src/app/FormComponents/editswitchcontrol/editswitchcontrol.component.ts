import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editswitchcontrol',
  templateUrl: './editswitchcontrol.component.html',
  styleUrls: ['./editswitchcontrol.component.scss']
})
export class EditswitchcontrolComponent {
  submitted = false;
  registerForm: FormGroup;
  bgcolor: any;
  color: any;
  theme: any;
  themecolor: any;
  switchsize: any;
  switchdatas: any;
  @Output() onclose = new EventEmitter<any>;
  nodefaultimage: any;
  storage: any;
  imageform: any;

  constructor(private router: Router,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {

    if (localStorage.getItem("switchdata")) {
      var button1: any = localStorage.getItem("switchdata");
      this.switchdatas = JSON.parse(button1);
      console.log("checkboxdatas", this.switchdatas);


      this.registerForm = this.formBuilder.group({

        typefields: [''],
        cardwidth: ['', [Validators.required]],
        color: ['', [Validators.required]],
        title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      });

    }

  }

  get f() {
    return this.registerForm.controls;
  }

  reloadComponent(self: boolean, urlToNavigateTo?: string) {
    //skipLocationChange:true means dont update the url to / when navigating
    const url = self ? this.router.url : "component/header";
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/${url}`]).then(() => {
        //  console.log(`After navigation I am on:${this.router.url}`)
      })
    })
  }

  onSubmit() {
    this.submitted = true;
    console.log("Checkbox registerForm", this.f);

    if (this.registerForm.invalid) {
      return true;
    } else {


      if (this.registerForm.value['cardwidth'] == "Extra Large") {
        this.switchsize = "extralarge";
      }
      if (this.registerForm.value['cardwidth'] == "Large") {
        this.switchsize = "large";
      }
      if (this.registerForm.value['cardwidth'] == "Medium") {
        this.switchsize = "medium";
      }
      if (this.registerForm.value['cardwidth'] == "Small") {
        this.switchsize = "small";
      }




      if (this.registerForm.value['color'] == "blue") {
        this.bgcolor = "#0070ad";
        this.themecolor = "bluecolor";
        this.color = "white";
        this.theme = "blue";
      }
      if (this.registerForm.value['color'] == "purple") {
        this.bgcolor = "#2b0a3d";
        this.themecolor = "purplecolor";
        this.color = "white";
        this.theme = "purple";

      }
      if (this.registerForm.value['color'] == "dark") {
        this.bgcolor = "black";
        this.color = "white";
        this.themecolor = "darkcolor";
        this.theme = "dark";
      }
      if (this.registerForm.value['color'] == "light") {
        this.bgcolor = "#fff";
        this.color = "#000";
        this.theme = "light";
        this.themecolor = "lightcolor";
      }
      const data = {

        "bgcolor": this.bgcolor,
        "color": this.color,
        "theme": this.theme,
        "switchsize": this.switchsize,
        "themecolor": this.themecolor,
        "title": this.registerForm.value['title'],
        "addbutton": this.registerForm.value.addbutton,
        "cardwidth": this.registerForm.value.cardwidth,
      }

      console.log(">>>>>", this.registerForm.value);
      this.onclose.emit();
      localStorage.setItem("switchdata", JSON.stringify(data));
      this.router.navigate(['/component/switchcontrol']);
      this.reloadComponent(true);
    }
  }
}
