import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.scss']
})
export class ImagesliderComponent {

  imagesliderdata:any;
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`
  .blue .carousel-item {
      background-color: #0070ad;
      height: 350px;
  }
  
  .dark .carousel-item {
      background-color: #000;
      height: 350px;
  }
  
  .purple .carousel-item {
      background-color: #2b0a3d;
      height: 350px;
  }
  .light .carousel-item {
      background-color: #ccc;
      height: 350px;
  }
  
  .carousel {
      margin: auto;
      display: block;
  }
  
  .blue button.active, .blue .carousel-control-prev-icon, .blue .carousel-control-next-icon {
  
  background-color: #0070ad;
  }
  
  .purple button.active, .purple .carousel-control-prev-icon, .purple .carousel-control-next-icon {
  
      background-color: #2b0a3d;
      }
  
  // .carousel-inner.blue h5, .carousel-inner.blue p {
  //     color: #0070ad;
  // }
  
  
  
  .dark button.active, .dark .carousel-control-prev-icon, .dark .carousel-control-next-icon {
      background-color: #000;
  }
      
  // .carousel-inner.dark h5, .carousel-inner.dark p {
  //   color: #000;
  // }`
  closeicon="../assets/images/close.png";
  @ViewChild('myModalClose10') ModalClose10:any;
  @ViewChild('imagesliders') elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef, private commonservice:CommonService) {
    this.elRef = elRef;
  }


  ngOnInit() {
  this.htmlcontent="active";

    if(localStorage.getItem("imagesliderdata")) {
      var data1:any =  localStorage.getItem("imagesliderdata");
      this.imagesliderdata = JSON.parse(data1);
      if(this.imagesliderdata.image == "Yes") {
        this.imagesliderdata.imagestatus = true;
      } else {
        this.imagesliderdata.imagestatus = false;
      }
    console.log(">>>>>>>>>>>>>>>>>get data",this.imagesliderdata);
  
    }

    
    this.commonservice.imagesliderstatusdata.subscribe((responsive) => {

      if (responsive.length != 0) {
        this.imagesliderdata = responsive;
        if(this.imagesliderdata.image == "Yes") {
          this.imagesliderdata.imagestatus = true;
        } else {
          this.imagesliderdata.imagestatus = false;
  
        }
      }
    })




  } 
  


  close(){
    this.ModalClose10.nativeElement.click();
  }

  
  backwindow(){
    this.router.navigate(['/modal']);
    localStorage.removeItem("imagesliderdata");


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
