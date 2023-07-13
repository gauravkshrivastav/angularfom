import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {
  title = "";
  img1="../assets/images/WellBeingHubLogo.png";
  img2="../assets/images/notify.png";
  img3="../assets/images/cg_logo.svg";
  img4="../assets/images/Capgemini white logo.png";
  whitewbh="../assets/images/WBH logo-on dark surface.png";
  closeicon="../assets/images/close.png";
  htmlcontent="inactive";
  csscontent:any;
  Copy="Copy";
  CSS=`.navbarclass {
    ul.navbar-nav li {
        position: relative;

        a {
            font-size: 1rem;
            color: var(--color-white);
            cursor: pointer;
            font-weight: 500;
 
        }

        
    }
}
ul.navbar-menu span li a i {
    margin-left: 5px;
    font-size: 13px;
}
.dropdownmenu {
    position: absolute;
    left: 0px;
    background: var(--color-white);
    padding: 0;
    box-shadow: 0 1px 3px rgba(20, 90, 128, 0.4196078431);
    top: 40px;
    z-index: 99;
    min-width: 170px;
    border-radius: 4px;

    a {
        margin: 0;
        padding: 7px 15px;
        transition: .25s;
        
    }
}
.rightmenu ul {
    display: flex;
    list-style: none;
    margin: 0;
}

.rightmenu li a {
    display: block;
    padding: 0.5rem 1rem;
}

header.headerclass .rightmenu li a i {
    color: var(--color-black);
    font-size: 1.3em;
    padding-right: 0.2em;
}


header.headerclass a.nav-link {
    color: var(--color-black) !important;
}

header.headerclass a.nav-link i {
    color: var(--color-black) !important;
}
.dropdown-toggle::after {
    display: none;
}

header .rightmenu li a i {
    color: var(--color-white);
    font-size: 1.3em;
    padding-right: 0.2em;
}

header .dropdownmenu a {
    color: var(--color-black) !important;
    font-size: 1em;
    padding-right: 0.2em;
}

header .navbar {
    padding: 0.5rem 1rem;
}

.mainnav {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

button.navbartoggler {
    display: none;
}

ul.navbar-menu {
    display: flex;
    list-style: none;
    color: var(--color-white);
    padding: 0;
    align-items: center;
    margin: 0;
}

ul.navbar-menu span {
    margin: 0 20px 0 0;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    text-transform: capitalize;
}
header a.dropdown-item:hover {
    background: var(--color-wbh-blue) ;
    color: var(--color-white) !important;
    transition: .25s;
}

@media screen and (min-device-width: 320px) and (max-device-width: 768px) {
    .top-header {
        display: block;
        box-shadow: none;

        .button-sec {
            position: absolute;
            right: 12px;
            top: 12px;
        }
    }

    h4.subheader {
        margin-left: 0px;
        font-size: 1.2rem;
    }

    .username {
        display: flex;
        text-align: center;

        .img2 {
            height: 22px;
            margin: auto;
        }

        .label2 {
            font-size: 15px;
        }
    }

    .header {
        display: flex;
        width: 100%;
        justify-items: center;
        justify-content: space-between;

        .div1 {
            width: 100%;

            // display: grid;
            // width: 100%;
            // justify-items: center;
            .subdiv {
                .img1 {
                    padding-left: 0.85rem;
                    height: 2.2rem;
                }
            }
        }

        .img3 {
            margin-left: 10px;
            width: 120px;
            height: initial;
        }

        .div2 {
            .sub-div {

                .capgeminilogo {
                    display: none;
                }
            }
        }

        .label1 {
            color: var(--color-wbh-blue);
            margin-left: 6px;
            font-size: 20px;
            font-family: Ubuntu;
        }
    }

    section.main header {
        padding: 1rem .85rem;
    }

    .modal-dialog {
        max-width: 100% !important;
    }

    .rightmenu {
        position: absolute;
        top: 0px;
        right: 0;
    }

    button.navbartoggler {
        display: none;
        border: none;
        border-radius: 2px;
        width: 30px;
    }

    // ul.navbar-menu {
    //     display: none;
    //     margin-top: 20px;
    // }
}
 


@media screen and (min-device-width: 320px) and (max-device-width: 350px) {
    .username {
        display: inline-block;
    }
}`;
  navbardata:any;
  @ViewChild('myModalClose1') modalClose1:any;

  @ViewChild("navbar") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
    // this.value = header.getHtmlContent();
  }
  
  ngOnInit() {
    if(localStorage.getItem("navbar")) {
      var data1:any =  localStorage.getItem("navbar");
      this.navbardata = JSON.parse(data1);
      console.log("vishnu Data",this.navbardata);

    }
  }

  close(){
    this.modalClose1.nativeElement.click();
  }


  backwindow(){
    this.router.navigate(['/modal']);
  }

  // isdropdownMenuOpen:boolean=false;

  // dropdownMenu():void{
  //   this.isdropdownMenuOpen=!this.isdropdownMenuOpen; 
    
  // }


  // isdropdownMenuOpen2:boolean=false;

  // dropdownMenu2():void{ 
  //   this.isdropdownMenuOpen2=!this.isdropdownMenuOpen2;
  //   this.isdropdownMenuOpen=false; 
  //   this.isdropdownMenuOpen3=false;
  //   this.isdropdownMenuOpen4=false;
  // }


  // isdropdownMenuOpen3:boolean=false;

  // dropdownMenu3():void{
  //   this.isdropdownMenuOpen3=!this.isdropdownMenuOpen3;
  //   this.isdropdownMenuOpen=false; 
  //   this.isdropdownMenuOpen2=false;  
  //   this.isdropdownMenuOpen4=false; 
  // }
  // isdropdownMenuOpen4:boolean=false;

  // dropdownMenu4():void{
  //   this.isdropdownMenuOpen4=!this.isdropdownMenuOpen4;
  //   this.isdropdownMenuOpen=false; 
  //   this.isdropdownMenuOpen2=false;
  //   this.isdropdownMenuOpen3=false;
  // }

  isToggleMenuopen:boolean=false;

  ToggleMenuopen():void{
    this.isToggleMenuopen=!this.isToggleMenuopen;
  }
  // clickOutside() :void{
  //   // this.opened = !this.opened;
  //   this.isToggleMenuopen=false;
  //   console.log("clicked outside");
  // }
  
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
    this.htmlcontent = "inactive";
    this.csscontent = "noinactive";
  }
  
  opencss(){
    this.csscontent = "inactive";
    this.htmlcontent = "noinactive";
  }
  
  copy(){
    this.Copy="copied!!";
    setTimeout(()=>{
        this.Copy="Copy";
    }, 2000);
  }
}
