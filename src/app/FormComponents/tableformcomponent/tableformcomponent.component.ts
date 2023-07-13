import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tableformcomponent',
  templateUrl: './tableformcomponent.component.html',
  styleUrls: ['./tableformcomponent.component.scss']
})
export class TableformcomponentComponent {

  registerForm:any;
  submitted = false;

  @Output() onclose = new EventEmitter<any>;

  
  constructor( private router:Router,
     private formBuilder: FormBuilder
    ) {}

  ngOnInit() {

  this.registerForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    theme:['light', [Validators.required]],
    tablestrip:['',[Validators.required]],
    pagination:['',Validators.required]
  });

};

  get f(){
    return this.registerForm.controls;
  }


  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid) { 
      return true;
      
    }
    else {
      console.log(">>>",this.registerForm.value);

      
      this.onclose.emit();
      const data = {
        "title":this.registerForm.value.title,
        "pagination":this.registerForm.value.pagination,
        "theme":this.registerForm.value.theme,
        "tablestrip":this.registerForm.value.tablestrip
      }
      console.log(">>",data);


      localStorage.setItem("data",JSON.stringify(data));
      this.router.navigate(['/component/table']);
    }
  }
}
