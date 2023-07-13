import { Component ,ElementRef,OnInit, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  myDatePicker:any;
  time = { hour: 13, minute: 30 };
  hideTime:false;
  disableMinute:false;
  enableMeridian:true;
  color:any;
  stepMinute:any;
  stepSecond:any;
  stepHour:any;
  showSeconds:false;
  showSpinners:true;
  disabled:false;
  maxDate:any;
  minDate:any;
  dateControl:any;
  updatedropdown:boolean = true;
  calendardata:any;
  closeicon="../assets/images/close.png";
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`.date_time_pciker input {
    border: 0px;
    background: no-repeat;
}

.date_time_picker label {
    padding: 10px 0px;
}
.date_time_pciker {
    box-sizing: border-box;
    border: 1px solid #ccc;
    padding: 0px 10px;
    background-color: #fff;
}

.date_time_pciker input {
    vertical-align: top;
    width: 100%;
    margin: 10px 0px;
}

.date_time_picker, .date_picker{
    width: 30%;
    margin: auto;
}`;
  @ViewChild('myModalClose5') modalClose5:any;
  @ViewChild('calendar') elRef: ElementRef;

  constructor(private router: Router, private commonservice:CommonService, elRef: ElementRef) {
    this.elRef = elRef;
  }


  ngOnInit() {


    
    if(localStorage.getItem("calendardata")) {
      var calendardata:any =  localStorage.getItem("calendardata");
      this.calendardata = JSON.parse(calendardata);
      // if(this.calendardata.theme == "dark" || this.calendardata.theme == "blue" || this.calendardata.theme == "purple"){
      //   this.color = "#fff";
      // } else if(this.calendardata.theme == "light"){
      //   this.color = "#000";
      // }
    
    }

    this.commonservice.calendarstatusdata.subscribe((responsive)=>{
      console.log("responsive",responsive);

      if(responsive.length != 0) {
      this.updatedropdown = false;
         this.calendardata = responsive;
        //  if(this.calendardata.theme == "dark" || this.calendardata.theme == "blue" || this.calendardata.theme == "purple"){
        //   this.color = "#fff";
        // } else if(this.calendardata.theme == "light"){
        //   this.color = "#000";
        // }
        
      setTimeout(() => {
        this.updatedropdown = true;
      }, 0);
      }
    })

  }
  
  backwindow(){
    this.router.navigate(['/component/forms']);
    localStorage.removeItem("calendardata");

  }

  close(){
    this.modalClose5.nativeElement.click();
  }

  dateUpdated(){

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
