import { Component ,ElementRef,OnInit, ViewChild } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  

  


  closeicon="../assets/images/close.png"; 
  // theme:any;
  // alertdetails:any;
  // selectedtitle:any;
  inputdatas:any;


  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=` p.counts span {
    font-weight: 500;
}
.height-textarea{
    min-height: 100px;
}
.htmlelement{
    background-color: var(--color-white) ;
    overflow-y: scroll;
    width:90%;
    height:400px;
    margin: auto;
    margin-top: 30px;
}
.copybutton{
    text-align: end;
        margin-right: 40px;
        margin-top: 30px;
        button{
            border: 1.5px solid black;
            background: transparent;
            border-radius: 10px;
            padding: 5px 10px;
        }
        .copyicon{
            margin-right: 5px;
        }
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
}

.active{
    border-bottom: 1px solid black !important;
    padding-bottom: 5px !important;
}


@media only screen and (max-width: 767px) {
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
}`
  @ViewChild('myModalClose1') modalClose1:any;
  
  @ViewChild("alert") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  } 
 
  ngOnInit() {
    if(localStorage.getItem("inputdata")) {
      var data1:any =  localStorage.getItem("inputdata");
      this.inputdatas = JSON.parse(data1);
    console.log(">>>>>>>>>>>>>>>>>get data",this.inputdatas);
  
    }
  } 
  close(){
    this.modalClose1.nativeElement.click();
  }
  backwindow(){
    this.router.navigate(['/component/forms']);
  } 


  maxNumberOfCharacters = 50;
  // counter = true;

  numberOfCharacters1 = 0;
  
  maxNumberOfCharactersarea = 500;
  // counters = true;

  numberOfCharactersarea1 = 0;

  onKeyUp(event: any): void {
    this.numberOfCharacters1 = event.target.value.length; 
    if (this.numberOfCharacters1 > this.maxNumberOfCharacters) {
      event.target.value = event.target.value.slice(0, this.maxNumberOfCharacters);
      this.numberOfCharacters1 = this.maxNumberOfCharacters;
    }
  }
  onKeyUparea(event: any): void {
    this.numberOfCharactersarea1 = event.target.value.length; 
    if (this.numberOfCharactersarea1 > this.maxNumberOfCharactersarea) {
      event.target.value = event.target.value.slice(0, this.maxNumberOfCharactersarea);
      this.numberOfCharactersarea1 = this.maxNumberOfCharactersarea;
    }
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
