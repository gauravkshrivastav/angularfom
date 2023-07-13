import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';


@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {

  
  closeicon = "../assets/images/close.png";
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  tooltipcolor:any;
  tooltipdata: any;
  CSS=`.tooltip_sec button.btn-secondary 
  {
      margin:0px auto;
      display: block;
      padding: 10px 30px;
      font-size: 20px;
      background-color: var(--color-wbh-blue);
  }
  
  .tooltipbtn {
      position: relative;
      display: inline-block;
      margin: 50px auto;
      display: block;
    }
    
  .tooltipbtn .tooltiptext {
      visibility: hidden;
      width: auto;
      background-color: var(--color-black);
      color: var(--color-white);
      text-align: center;
      border-radius: 6px;
      padding: 5px 20px;
      position: absolute;
      z-index: 1;
      border: 1px solid var(--color-white);
    }
  
    .tooltipbtn .topright {
      bottom: 130%;
      left: 55%;
      margin-left: -60px;
    }
  
  span.tooltiptext.topleft {
      left: 40%;
      bottom: 130%;
      margin-left: -60px;
  }
  
  span.tooltiptext.bottomright {
      left: 55% !important;
      bottom: -84%;
      margin-left: -60px;
  }
  
  span.tooltiptext.bottomleft {
      left: 40% !important;
      bottom: -84%;
      margin-left: -60px;
  }
  span.tooltiptext.right {
      left: 68%;
      bottom:13%;
      margin-left: -60px;
  }
  
  span.tooltiptext.left {
      left: 28% !important;
      bottom: 23%;
      margin-left: -60px;
  }
  
    
  .tooltipbtn:hover .tooltiptext {
      visibility: visible;
  }
  
  
    .tooltipbtn .tooltiptext::after {
      content: "";
      position: absolute;
      // top: 100%;
      // left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: var(--color-black) transparent transparent transparent;
    }
    
  
  
  
    .tooltipbtn .topleft::after {
      top: 100%;
      left: 50%;
      border-color: var(--color-black) transparent transparent transparent;
    }
  
    .tooltipbtn .topright::after {
      top: 100%;
      left: 50%;
      border-color: var(--color-black) transparent transparent transparent;
    }
  
    .tooltipbtn .bottomright::after {
      top:-27%;
      left: 50%;
      border-color: transparent transparent var(--color-black) transparent;
  }
  
    .tooltipbtn .bottomleft::after {
      top: -27%;
      left: 50%;
      border-color: transparent transparent var(--color-black) transparent;
  }
  
  .tooltipbtn .right::after {
      top: 36%;
      left: -4%;
      border-color: transparent var(--color-black) transparent transparent;
  }
  
  .tooltipbtn .left::after {
      top: 36%;
      left: 105%;
      border-color: transparent transparent transparent var(--color-black);
  }
  
  
  .ngdark{
      background-color:var(--color-black) !important;
      border-color:var(--color-black);
  }
  
  .nglight{
      background-color:var(--color-white) !important;
      color: var(--color-black) !important;
  }
  
  .ngblue{
      background-color:var(--color-wbh-blue) !important;
      border-color:var(--color-wbh-blue) transparent transparent transparent;
  
  }
  
  .ngpurple{
      background-color:#2b0a3d !important;
  }
  
  .htmlelement{
      background-color: white;
      overflow-y: scroll;
      width:90%;
      height:400px;
      margin: auto;
      margin-top: 30px;
  }`;
  bottomOptions = {
    'placement': 'bottom',
    'showDelay': 500
  }
  @ViewChild('myModalClose1') modalClose1: any;

  constructor(private router: Router,
    private commonservice: CommonService, elRef: ElementRef) {
    this.elRef = elRef;
    // this.value = header.getHtmlContent();

  }

  @ViewChild("tooltiphtml") elRef: ElementRef;



  ngOnInit() {
    if (localStorage.getItem("tooltip")) {
      var data1: any = localStorage.getItem("tooltip");
      this.tooltipdata = JSON.parse(data1);
      this.tooltipcolorvalue();
      console.log(">>>>>>>>>>>>>>>>>headerdata", this.tooltipdata);

    }

    this.commonservice.tooltipstatusdata.subscribe((responsive) => {

      if (responsive.length != 0) {
        this.tooltipdata = responsive;
        this.tooltipcolorvalue();
      }
    })
  }

  tooltipcolorvalue() {
    if (this.tooltipdata?.color == 'dark') {
      this.tooltipdata.class = "dark"
    }
    if (this.tooltipdata?.color == 'light') {
      this.tooltipdata.class = "normal"
    }
    if (this.tooltipdata?.color == 'blue') {
      this.tooltipdata.class = "blue"
    }
    if (this.tooltipdata?.color == 'purple') {
      this.tooltipdata.class = "purple"
    }

  }

  close() {
    this.modalClose1.nativeElement.click();
  }

  backwindow() {
    localStorage.removeItem("tooltip");
    this.router.navigate(['/modal']);
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
