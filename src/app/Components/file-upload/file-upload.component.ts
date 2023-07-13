import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  filedata:any;
  closeicon="../assets/images/close.png";
  color:any;
  htmlcontent="active";
  csscontent:any;
  inputkey:any;
  file=false;
  fileselectedvalue:any[]=[];
  Copy="Copy";
  textcolor:any;
  CSS=`.clear{
    border: none;
    padding: 0px !important;
    background: transparent;
    margin-left: -30px;
    .closesize{
        width: 15px;
    }
}
.dataalign{
    margin: auto;
}
.fileupload{
    width: 95%;
    margin: auto;
    // text-align: center;
    margin-top: 70px;
    #myfile{
        border:2px solid black;
        padding: 10px;
        padding-right: 27px;
    }
    #myfile:focus{
        -webkit-box-shadow: 0 0 10px 2px rgb(140, 119, 119);
    -moz-box-shadow: 0 0 10px 2px rgb(140, 119, 119);
    box-shadow: 0 0 10px 2px rgb(140, 119, 119);
    }
}
.commonfile{
    text-align: center;
}
.filelabel{
    text-align: start;
    font-weight: 500;
    margin-bottom: 5px;
}`;

  @ViewChild("myModalClose8") ModalClose8:any;
  @ViewChild("fileinput") fileinput:any;
  @ViewChild("fileupload") elRef: ElementRef;
  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
    console.log(">>",this.file);
  }

  ngOnInit(){
    if(localStorage.getItem("filedata")) {
      var data1:any =  localStorage.getItem("filedata");
      this.filedata = JSON.parse(data1);
    console.log(">>>>>>>>>>>>>>>>>headerdata",this.filedata);
    if(this.filedata.color == "light"){
      this.color="#ddd";
      this.textcolor="black";
    } else if(this.filedata.color == "dark"){
      this.color="black";
      this.textcolor="white";
    } else if(this.filedata.color == "purple"){
      this.color="#2b0a3d";
      this.textcolor="white";
    } else if(this.filedata.color == "blue"){
      this.color="#0070ad";
      this.textcolor="white";
    }

    }
  }

  backwindow(){
    this.router.navigate(['/component/forms']);
  }

  truncate(str:any){
      return str.length > 30 ? str.substring(0, 24) + "..." : str;
  }

  handlechange(event:any){
    this.fileselectedvalue = [];
    var input = this.fileinput.nativeElement.files;
    for (var i = 0; i < input.length; ++i) {
        this.fileselectedvalue.push(input.item(i).name);
    }
    if(event.target.value){
      this.file= true;
    }
  }

  removeSelectedFile(index:any){
      this.fileselectedvalue.splice(index,1);
  }

  handlekeydown(e:any){
    console.log(">>>>>",e);
    if(e.keyCode == 13){
      this.closefile(this.fileinput);
    }
  }
  closefile(element:any){
    console.log(">hgcuyajkas");
    element.value = "";
    this.fileselectedvalue = [];
    this.file = false;
    // const array = new Uint32Array(10);
		// let randomString = window.crypto.getRandomValues(array);
		// 	this.inputkey = randomString;
  }

  close(){
    this.ModalClose8.nativeElement.click();
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

  openhtml(){
    this.htmlcontent = "active";
    this.csscontent = "noactive";
  }
  
  opencss(){
    this.csscontent = "active";
    this.htmlcontent = "noactive";
  }
  
  copy(){
    this.Copy="copied!!";
    setTimeout(()=>{
        this.Copy="Copy";
    }, 2000);
  }
}
