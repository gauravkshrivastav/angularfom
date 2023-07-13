import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fileuploadform',
  templateUrl: './fileuploadform.component.html',
  styleUrls: ['./fileuploadform.component.scss']
})
export class FileuploadformComponent {

  title = "";
  bgcolor:any;
  color:any;
  themecolor:any;
  FileUpload: FormGroup;
  submitted = false;

  @Output() onclose = new EventEmitter<any>;

  
  constructor( private router:Router,
     private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.FileUpload = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      color: ['light', [Validators.required]],
      choosefile:['',[Validators.required]],
      width:['25%',[Validators.required]]
    });
  }

    get f(){
      return this.FileUpload.controls;
    }
    
    onSubmit(){
      this.submitted = true;
      if(this.FileUpload.invalid) { 
        return true;
      } else {
        this.onclose.emit();
        const data = {
          title: this.FileUpload.value.title,
          color: this.FileUpload.value.color,
          choosefile:this.FileUpload.value.choosefile,
          width:this.FileUpload.value.width
        }
        console.log(">>",data);
  
  
        localStorage.setItem("filedata",JSON.stringify(data));
        this.router.navigate(['/component/file-upload']);
      }
    }
}
