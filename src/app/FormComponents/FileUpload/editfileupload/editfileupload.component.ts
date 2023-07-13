import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editfileupload',
  templateUrl: './editfileupload.component.html',
  styleUrls: ['./editfileupload.component.scss']
})
export class EditfileuploadComponent {

  filedata:any;
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
    if(localStorage.getItem("filedata")) {
      var data1:any =  localStorage.getItem("filedata");
      this.filedata = JSON.parse(data1);
    }

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

    reloadComponent(self:boolean,urlToNavigateTo ?:string){
      //skipLocationChange:true means dont update the url to / when navigating
     const url=self ? this.router.url : "component/file-upload";
     this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
       this.router.navigate([`/${url}`]).then(()=>{
        //  console.log(`After navigation I am on:${this.router.url}`)
       })
     })
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
        this.reloadComponent(true);
      }
    }
}
