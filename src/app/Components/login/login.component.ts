import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// import { ConfirmPasswordValidator } from "./confirm-password.validator";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild("login") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef,
    // ,private spinner: NgxSpinnerService
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.elRef = elRef;
  }


  capValuevalidation: boolean = false;
  numValuevalidation: boolean = false;
  symbolValuevalidation: boolean = false;
  lenghtValuevalidation: boolean = false;
  maxlenghtValuevalidation: boolean = false;
  // spcValuevalidation: boolean = false;
  loginsignupdata: any;
  submitted = false;
  valisubmitted = "No";
  closeicon = "../assets/images/close.png";
  registerForm: FormGroup;
  htmlcontent = "active";
  csscontent: any;
  Copy = "Copy";
  CSS = ` 
  :root {
    --step--2: clamp(0.69rem, calc(0.58rem + 0.60vw), 1.00rem);
    --step--1: clamp(0.83rem, calc(0.67rem + 0.81vw), 1.25rem);
    --step-0: clamp(1.00rem, calc(0.78rem + 1.10vw), 1.56rem);
    --step-1: clamp(1.20rem, calc(0.91rem + 1.47vw), 1.95rem);
    --step-2: clamp(1.44rem, calc(1.05rem + 1.95vw), 2.44rem);
    --step-3: clamp(1.73rem, calc(1.21rem + 2.58vw), 3.05rem);
    --step-4: clamp(2.07rem, calc(1.39rem + 3.40vw), 3.82rem);
    --step-5: clamp(2.49rem, calc(1.60rem + 4.45vw), 4.77rem);
    
    /* Font style */
    
    --ff-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    
    /* Color style */
    
    --color-primary: #0575E6;
    --color-secondary: #6dd5ed;
    --color-primary-light:#8dc6ff;
    --color-primary-dark:#021B79;
    --color-error:#cc3333;
    --color-success:#4bb544;
    --color-link:#606470;
    --color-text:#5f6769;
    --color-header-dark:#393e46;
    --color-background:#f5f9ee;
    --color-border-sc:#ececec;
    --color-border-focus:#F09819;
    --color-border:#d3d6db;
    --bs:#ffa857;
    --color-button:#f8e7e7;
    --color-percentage:#5f6769;
    --color-header-light:#9ba6a5;
    --color-border-focus:#F09819;
    --color-input-background:#1d1f20;
    --gradient: linear-gradient(135deg var(--color-primary), var(--color-secondary));
    
    
  }
    
  
  .login-wrapper {
    position: relative; 
      border-radius: 1rem;
      margin: 2rem 1rem;
  } 
  .login-heading {
      text-align: center;
      margin-bottom: 1rem;
  }
  .login-wrapper .input-group input {
      width: 100%;
      border-radius: 0.65rem !important;
  }
  .login-wrapper .avatar {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #F09819, #FF512F);
    margin: 0 auto 16px;
    padding: 2px;
  }
  
  .login-wrapper .avatar img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border: 4px solid #161616;
    border-radius: 50%;
  }
  
  .login-wrapper .login-form img {
    width: 20px;
    height: 20px;
  }
  
  .login-wrapper h2 {
    font-size: var(--step-2);
    font-weight: 500;
    margin: 0 0 .5rem;
  }
   
  .login-wrapper .login-heading h3 {
      font-weight: 600; 
      margin-bottom: 1rem;
  }
  .login-heading p { 
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
  }
   
  
  .login-wrapper .login-form {  
      margin: auto;
      padding: 2rem;
      text-align: right;
      border-radius: .65rem;
  }
  
  .login-wrapper .input-group {
    position: relative; 
      margin-bottom: 1rem;
    width: 100%;
  }
  
  .login-wrapper .input-group input {
    color: inherit;
    border: none;
    padding: 1rem;
  }
  .login-wrapper .input-group input:focus{
      box-shadow: none;
      outline: none;
      border: none;
  }
  
   
  /* -----------------The end of Validation* ----------------- */
  
  
  .login-wrapper .input-group i {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translate(0, -50%);
    color: rgb(255 255 255 / 38%);
  }
  
  .login-wrapper .login-form button {
    display: flex;
      justify-content: space-between;
      align-items: center; 
      padding: 0 1rem;
      cursor: pointer;
      text-transform: uppercase; 
      transition: 0.2s ease-in-out;
      width: 100%;
      font-weight: 500;
      height: 54px; 
      border-radius: 0.6rem;
      border: 0;
      margin-bottom: .5rem;
      outline: 0;
  }
  .button-text p{
      text-align: center;
      color: #fff;
      margin-top: 1rem;
      margin-bottom: 0;
  }
  .button-text p b{
    cursor: pointer;
  }
  .login-wrapper :focus-visible {
      outline: 2px solid gray !important;
  }
  .validationcolor {
      font-weight: 500;
      color: red;
  }
  .input-group label {
      color: #fff;
      margin-bottom: 10px;
  }
  // .login-wrapper .login-form button:hover {
  // 	background: #ff7b14;
  // }
  
  .login-wrapper .login-form a {
    width: 100%;
    color: #F09819;
    font-size: var(--step--2);
    text-align: left;
  }
  
  .modal-dialog.modaldialog-width {
      margin-top: 90px;
  }
  
  .login-wrapper .copy {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(0, -50%);
    color: #1d1f20;
    font-size: var(--step-0);
    font-weight: 400;
  }
  
  .login-wrapper .copy a {
    color: #1d1f20;
    font-size: var(--step--1);
  }
  
  
  
  .copybutton {
      text-align: end;
      margin-right: 40px;
      margin-top: 30px;
  
      button {
          border: 1.5px solid black;
          background: transparent;
          border-radius: 10px;
          padding: 5px 10px;
      }
  
      .copyicon {
          margin-right: 5px;
      }
  }
  
  .list-inline {
      padding-left: 0;
      list-style: none;
      display: flex;
      justify-content: center;
      margin-top: 30px;
  
      li:first-child {
          margin-right: 10px;
      }
  
      li {
          cursor: pointer;
  
          button {
              border: none;
              background: transparent;
              padding: 0px;
          }
      }
  }
  
  .active {
      border-bottom: 1px solid black !important;
      padding-bottom: 5px !important;
  }
  
  .htmlelement {
      background-color: var(--color-white);
      overflow-y: scroll;
      width: 90%;
      height: 400px;
      margin: auto;
      margin-top: 30px;
  } 
  
  @media screen and (min-width:320px) and (max-width:765px) {
      .login-form {
          width: 100% !important;
          padding: 1rem !important;
      }
      .form-floating.form-floating-filled {
          max-width: 100% !important;
      }     
      .width100{
          width: 100% !important;
      }
      .top-header div:first-child {
          width: 50%;
      }
      h4.subheader {
          margin: 0px;
          font-size: 1.2rem;
      }
      section.main header {
          padding: 1rem .85rem;
      }
      .modaldialog-width { 
          max-width: 100% !important;
      }
      
  }
  `

  @ViewChild("myModalClose2") modalClose2: any;

  ngOnInit() {



    if (localStorage.getItem("loginsignupdata")) {
      var data1: any = localStorage.getItem("loginsignupdata");
      this.loginsignupdata = JSON.parse(data1);

    }
    // Validators.pattern(`(?=.*[a-z])(?=.)(?=.*[0-9])(?=.${this.loginsignupdata.validateforms2===`Yes` ? `*[$@$!%*?&])[A-Za-z\d$@$!%*?&]`:null}.{${this.loginsignupdata.minvalue},${this.loginsignupdata.maxvalue}}`)]],
    this.registerForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        email: ['', this.loginsignupdata.typefields == "Sign Up" ? [Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')] : null],
        password: ['', [
          // Validators.required,
          // Validators.pattern(`(?=.*[a-z])`)
          // Validators.pattern(`(?=.*[a-z])${this.loginsignupdata.validateforms === 'Yes' ? `(?=.*[A-Z])` : ``}(?=.*[0-9])${this.loginsignupdata.validateforms2 === 'Yes' ? `(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]` : ``}.{${this.loginsignupdata.minvalue},${this.loginsignupdata.maxvalue}}`)
        ]],
        confirmpassword: ['', this.loginsignupdata.typefields == "Sign Up" ? Validators.required : null]
      },
      {
        validator: this.loginsignupdata.typefields == "Sign Up" ? this.MustMatch("password", "confirmpassword") : null
      }
    );


    // this.registerForm.get("loginsignupdata.typefields")?.valueChanges.subscribe((result)=>{ 

    //   console.log("Vishnu",result); 

    //   if(result == "Sign Up") {
    //     this.registerForm.get("email")?.setValidators([Validators.required,  
    //       Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]); 
    //   }  
    //   else if(result == "Log In"){
    //     this.registerForm.get("email")?.clearValidators(); 
    //     this.registerForm.get("email")?.setValue(""); 
    //   }
    // })


    // this.registerForm.get("loginsignupdata.typefields")?.valueChanges.subscribe((result)=>{ 
    //   console.log("Vishnu",result); 
    //   if(result == "Sign Up") {
    //     this.registerForm.get("confirmpassword")?.setValidators([Validators.required]); 
    //   }  
    //   else if(result == "Log In"){
    //     this.registerForm.get("confirmpassword")?.clearValidators(); 
    //     this.registerForm.get("confirmpassword")?.setValue(""); 
    //   }
    // })

  }


  get f() {
    return this.registerForm.controls;
  }

  getHtmlContent() {
    //This will return '<p> Text </p>' as a string
    const html = this.elRef.nativeElement.innerHTML;
    const lines = html.split('>');
    var indentSize = 2;
    for (let i = 0; i < lines.length - 1; i++) {
      if (i >= 1 && i < lines.length - 2) {
        // indentSize++;
        // lines[i] = ' '.startsWith('</')
        lines[i] = ' '.repeat(indentSize) + lines[i].trim() + '>';
      } else {
        lines[i] = lines[i].trim() + '>';
      }
    }
    const formattedCode = lines.join('\n');
    // console.log(formattedCode);
    return formattedCode;
  }
  openhtml() {
    this.htmlcontent = "active";
    this.csscontent = "noactive";
  }

  opencss() {
    this.csscontent = "active";
    this.htmlcontent = "noactive";
  }

  copy() {
    this.Copy = "copied!!";
    setTimeout(() => {
      this.Copy = "Copy";
    }, 2000);
  }

  close() {
    this.modalClose2.nativeElement.click();
  }

  backwindow() {
    this.router.navigate(['/modal']);
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.MustMatch) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true })
      }
      else {
        matchingControl.setErrors(null);
      }
    }
  }






  onSubmit() {

    this.submitted = true;
    console.log("Vishnu", this.f.password);
     
      const passwordvalue = this.registerForm.value['password'];

      const mindata = this.loginsignupdata.minvalue;
      const maxdata = this.loginsignupdata.maxvalue;
      const isContainsUppercase = /^(?=.*[A-Z]).*$/;
      const isContainsNumber = /^(?=.*[0-9]).*$/;
      const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;


      if (!isContainsNumber.test(passwordvalue)) {
        this.valisubmitted = "No";
        this.numValuevalidation = true;

      } else {
        this.numValuevalidation = false;
      }
      if (!isContainsUppercase.test(passwordvalue)) {
        this.valisubmitted = "No";
        this.capValuevalidation = true;

      } else {
        this.capValuevalidation = false;
      }
      if (!isContainsSymbol.test(passwordvalue)) {
        this.valisubmitted = "No";
        this.symbolValuevalidation = true;

      } else {
        this.symbolValuevalidation = false;

      }
      if (passwordvalue && passwordvalue.length < mindata) {
        this.valisubmitted = "No";
        this.lenghtValuevalidation = true;

      } else {
        this.lenghtValuevalidation = false;

      }

      if (passwordvalue && passwordvalue.length > maxdata) {
        this.valisubmitted = "No";
        this.maxlenghtValuevalidation = true;


      } else {
        this.maxlenghtValuevalidation = false;

      }

      if (this.registerForm.invalid) {
        this.valisubmitted = "No";
        return true;

      } else {
        this.valisubmitted = "Yes";
      }

    

   if(isContainsNumber.test(passwordvalue) || isContainsUppercase.test(passwordvalue) || isContainsSymbol.test(passwordvalue) ||  passwordvalue && passwordvalue.length < mindata || passwordvalue && passwordvalue.length > maxdata){
    // alert("Successfully");
    this.toastr.success("Save Successfully");
   }


  }
}
