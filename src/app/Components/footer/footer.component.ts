import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerdata:any;
  color:any;
  linkedln="../assets/images/Linkedin.webp";
  twitter="../assets/images/Twitter.webp";
  insta="../assets/images/Instagram.webp";
  facebook="../assets/images/Facebook.webp";
  youtube="../assets/images/YouTube.webp";
  glassdoor="../assets/images/Glassdoor.webp";
  closeicon = "../assets/images/close.png";


  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`.footer {
    .footerwidth {
        padding-left: 30px;
        padding-right: 30px;
        display: flex;

        .socialmedia-list {
            margin-top: 15px;

            .social-default {
                li {
                    .social-icon {
                        background-color: var(--color-white);
                        // border: 1px solid black;
                        border-radius: 50%;
                        width: 40px;
                        height: 40px;

                        // transition: all 0.2s ease-in-out;
                        .social-iconimage {
                            width: 25px;
                        }
                    }

                    .social-icon:before {



                        display: block;

                        background: #01d1d0;

                        border-radius: 50%;

                        height: calc(100% + 2px);

                        width: calc(100% + 2px);

                        position: absolute;

                        left: -1px;

                        top: -1px;

                        transform: translate(-100%, 0) rotate(10deg);

                        transform-origin: top left;

                        transition: transform .2s ease-out;

                        z-index: -1;

                    }

                    .social-icon:hover,.social-icon:focus-within {
                        background-image: linear-gradient(to left, #01d1d0 50%, #01d1d0 50%, #01d1d0 50%, transparent 50%, );
                        background-position: 100% 0;
                        background-size: 200% 100%;
                        transform: scale(1.2);
                        transition: all .2s ease-out;
                        border-color: #00e6e3;

                    }

                    .social-icon:hover+.social-tooltip {
                        background-color: var(--color-white);
                        border-color: var(--color-black);
                        visibility: visible;
                    }

                    .social-tooltip {
                        visibility: hidden;
                        display: block;
                        position: relative;
                        top: -110%;
                        width: 65px;
                        left: 30%;
                        transform: translate(-50%, 0);
                        margin-top: 0.1rem;
                        padding: 0.1rem 10px;
                        font-size: 0.7rem;
                        font-weight: 500;
                        white-space: nowrap;
                        color: #000;
                        border-radius: 50px;
                        background-color: var(--color-white);
                        pointer-events: none;
                        -webkit-user-select: none;
                        user-select: none;
                        text-align: center;
                    }
                }
            }
        }
    }
}`;


  @ViewChild('myModalClose1') modalClose3:any;

  @ViewChild("footer") elRef: ElementRef;

  constructor(private router: Router,private commonservice:CommonService, elRef: ElementRef) {
    this.elRef = elRef;
  }

  ngOnInit() {
    if(localStorage.getItem("footerdata")) {
      var data1:any =  localStorage.getItem("footerdata");
      this.footerdata = JSON.parse(data1);
      console.log(">>>>>",this.footerdata);
      // if(this.footerdata.color == "#2b0a3d" || this.footerdata.color == "#0070ad" || this.footerdata.color == "black"){
      //   this.color = "white";
      // } else if(this.footerdata.color == "white"){
      //   this.color = "black";
      // }
    }

    
    this.commonservice.footerstatusdata.subscribe((responsive)=>{

      if(responsive.length != 0) {
         this.footerdata = responsive;
         if(this.footerdata.color == "#2b0a3d" || this.footerdata.color == "#0070ad" || this.footerdata.color == "black"){
          this.color = "white";
        } else if(this.footerdata.color == "#F1F4F8"){
          this.color = "black";
        }
      }
    })




  }

  close(){
    this.modalClose3.nativeElement.click();
  }
  backwindow(){
    localStorage.removeItem("footerdata");
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
