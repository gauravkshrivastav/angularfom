import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-rangeslider',
  templateUrl: './rangeslider.component.html',
  styleUrls: ['./rangeslider.component.scss']
})
export class RangesliderComponent implements OnInit {


  minValue:number;
  maxValue:number;
  Valuenumber:number;
  updatedropdown:boolean = true;
  color:any;
  closeicon="../assets/images/close.png";
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`.rangeslider {
    padding: 50px;
    margin: auto;
    background-color: #fff;
}
.list-inline {
    padding-left: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    li:first-child{
        margin-right: 10px;
    }
    li{
        cursor: pointer;
        button{
            border: none;
            background: transparent;
            padding: 0px;
        }
    }
}`;


  @ViewChild('myModalClose7') ModalClose7:any;
  @ViewChild("range") elRef: ElementRef;

  options: Options = {
    floor:0,
    ceil:200,
    showTicks: true

  };

  rangesliderdata:any;

  constructor(private router: Router, elRef: ElementRef, private commonservice:CommonService) {
    this.elRef = elRef;
  }



  ngOnInit() {
    if(localStorage.getItem("rangesliderdata")) {
      var data1:any =  localStorage.getItem("rangesliderdata");
      this.rangesliderdata = JSON.parse(data1);
      
      this.minValue = this.rangesliderdata.minvalue;
      this.maxValue = this.rangesliderdata.maxvalue;
      this.Valuenumber = this.rangesliderdata.minvalue;
      this.options.ceil = this.maxValue;
      this.options.floor = this.minValue;   
      if(this.rangesliderdata.theme == "dark" || this.rangesliderdata.theme == "blue" || this.rangesliderdata.theme == "purple"){
        this.color = "#fff";
      } else if(this.rangesliderdata.theme == "light"){
        this.color = "#000";
      }   
    }

    this.commonservice.rangesliderstatusdata.subscribe((responsive)=>{
      console.log("responsive",responsive);

      if(responsive.length != 0) {
      this.updatedropdown = false;
      this.rangesliderdata = responsive;
      this.minValue = this.rangesliderdata.minvalue;
      this.maxValue = this.rangesliderdata.maxvalue;
      this.Valuenumber = this.rangesliderdata.minvalue;
      this.options.ceil = this.maxValue;
      this.options.floor = this.minValue;   
         if(this.rangesliderdata.theme == "dark" || this.rangesliderdata.theme == "blue" || this.rangesliderdata.theme == "purple"){
          this.color = "#fff";
        } else if(this.rangesliderdata.theme == "light"){
          this.color = "#000";
        }
        setTimeout(() => {
          this.updatedropdown = true;
        }, 0);
      }
    })


  }

  close(){
    this.ModalClose7.nativeElement.click();
  }
  backwindow(){
    localStorage.removeItem("rangesliderdata");
    this.router.navigate(['/component/forms']);


  }

  changeFn(e:any){
    this.Valuenumber = e.target.value;

    console.log(">>>>>",e.target.value)

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
