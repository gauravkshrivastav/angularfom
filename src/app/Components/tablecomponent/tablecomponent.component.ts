import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { MdbTableDirective } from 'mdb-angular-ui-kit/table';

@Component({
  selector: 'app-tablecomponent',
  templateUrl: './tablecomponent.component.html',
  styleUrls: ['./tablecomponent.component.scss']
})

// export interface Person {
//   name: string;
//   position: string;
//   office: string;
//   age: number;
//   startDate: string;
//   salary: string;
// }

export class TablecomponentComponent {

  tabledata: any;
  closeicon = "../assets/images/close.png";
  arrowicon = "../assets/images/icon-more-small-dark.cab060bd.svg";

heading = [
    {
        name: 'GGID'
    },
    {
        name: 'Employee Name'
    },
    {
        name: 'Employee Mail id'
    },
    {
        name: 'Designation'
    },
    {
        name: 'Grade'
    },
    {
        name: 'Location'
    },

];

  array:any[] = [
    {
      id:1,
      Employee_Id: 46092137,
      Name: "Vaishali Tyagi",
      email: "vaishali.tyagi@capgemini.com",
      designation: "Sr Analyst / Software Engineer",
      grade: "A",
      location: "Gurgaon",
    },
    {
      id:2,
      Employee_Id: 46267043,
      Name: "Sharath Sashi Kumar",
      email: "sharath.sashi-kumar@capgemini.com",
      designation: "Sr Analyst / Software Engineer",
      grade: "A",
      location: "Mumbai",
    },
    {
      id:3,
      Employee_Id: 46273399,
      Name: "Anand Manohar Udare",
      email: "anand.udare@capgemini.com",
      designation: "Sr Analyst / Software Engineer",
      grade: "A",
      location: "Mumbai",
    },
    {
      id:4,
      Employee_Id: 46273491,
      Name: "Tanya",
      email: "tanya.a.tanya@capgemini.com",
      designation: "Sr Analyst / Software Engineer",
      grade: "A",
      location: "Mumbai",
    },
    {
      id:5,
      Employee_Id: 46263383,
      Name: "Muskan Tyagi",
      email: "muskan.tyagi@capgemini.com",
      designation: "Sr Analyst / Software Engineer",
      grade: "A",
      location: "Gurgaon",
    },
    {
      id:6,
      Employee_Id: 46205868,
      Name: "Chithira P Nair",
      email: "chithira.p-nair@capgemini.com",
      designation: "Analyst / Software Engineer",
      grade: "A",
      location: "Banglore",
    },
    {
      id:7,
      Employee_Id: 46165402,
      Name: "Chetan Ramesh Ningoo",
      email: "chetan.ningoo@capgemini.com",
      designation: "Senior Manager",
      grade: "D",
      location: "Mumbai",
    },
    {
      id:8,
      Employee_Id: 46083526,
      Name: "Kanika Singla",
      email: "kanika.singla@capgemini.com",
      designation: "Associate Consultant",
      grade: "B",
      location: "Gurgaon",
    },
    {
      id:9,
      Employee_Id: 46020611,
      Name: "Lalith Rawal",
      email: "lalith.rawal@capgemini.com",
      designation: "Senior Consultant",
      grade: "C",
      location: "Mumbai",
    },
    {
      id:10,
      Employee_Id: 46205869,
      Name: "Sowmya Ranjan Rana",
      email: "sowmya.ranjan-rana@capgemini.com",
      designation: "Analyst / Software Engineer",
      grade: "A",
      location: "Mumbai",
    },
    {
      id:11,
      Employee_Id: 46264260,
      Name: "Saurav Nitin Trivedi",
      email: "saurav-nitin.trivedi@capgemini.com",
      designation: "Sr Analyst / Software Engineer",
      grade: "A",
      location: "Bangalore",
    },
    {
      id:12,
      Employee_Id: 46184203,
      Name: "Gaurav Kumar Srivastav",
      email: "gaurav-kumar.a.shrivastav@capgemini.com",
      designation: "Associate Consultant",
      grade: "B",
      location: "Gurgaon",
    },
    {
      id:13,
      Employee_Id: 75022762,
      Name: "Vishnu Kumar Nishad",
      email: "vishnu-kumar.nishad@capgemini.com",
      designation: "Associate Consultant",
      grade: "B",
      location: "Gurgaon",
    },
  ];

  copyarray: any[] = [];
  searcharray:any[]=[];
  resetarray = this.array;
  themecolor:any;
  color:any;
  p:any;
  v:any;
  searchText:any;
  pageno="5";
  errorvalue:any;
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`.table{
    margin: auto;
    border: 1px solid black;
    // margin-bottom: 50px;
}

.tabledata{
    width:95%;
    margin: auto;
    margin-top: 40px;
}
.headerpart{
    max-width: 100%;
    padding-bottom: 50px;
    .title{
        float: left;
        font-size: 18px;
        font-weight: bold;
    }
    .search-container{
        float: right;
        .search{
            border: 1px solid black;
            border-right: none;
        }
        .search_button{
            border: 1px solid black;
            background: #fff;
            border-left: none;
        }
    }
}

pagination-controls {
    width: 100%;
}
.rows{
    width:170px;
}
.pagination{
    float: right;
    padding: 20px;
}
.pageno {
    width: 70px;
    height: 30px;
}
.nodata{
    text-align: center;
    padding: 20px;
}`;

  @ViewChild('myModalClose') modalClose8: any;
  @ViewChild("table") elRef: ElementRef;
  @ViewChild('search') search: any;

  userFilter: any = { Name: '' };

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  }

  ngOnInit() {
    if (localStorage.getItem("data")) {
      var data1: any = localStorage.getItem("data");
      this.tabledata = JSON.parse(data1);

      if(this.tabledata.theme == "dark"){
        this.themecolor = "black";
        this.color = "white";
      } else if(this.tabledata.theme == "blue"){
        this.themecolor = "#0070ad";
        this.color = "white";
      } else if(this.tabledata.theme == "purple"){
        this.themecolor = "#2b0a3d";
        this.color = "white";
      } else if(this.tabledata.theme == "light"){
        this.themecolor = "#B7C9E2";
        this.color = "black";
      }

      if(this.tabledata.pagination == "No"){
        this.pageno="15";
      }
      // console.log(">>>>>>>>>>>>>>>>>headerdata",this.headerdata);

    }
  }

  pageChange(e:any){
    
  }

  close() {
    this.modalClose8.nativeElement.click();
  }


  backwindow() {
    this.router.navigate(['/modal']);
  }

  Search() {
    console.log("??????????", this.search.nativeElement.value);
    if (this.search.nativeElement.value) {
      this.copyarray = [];
      this.array.filter((x: any, i) => {
        const keys = Object.keys(x);
        keys.map((y: any, j) => {
          const result: any = {};

          for (const key in x) {
            const value = x[key];
            if (!Object.values(result).includes(value)) {
              result[key] = value;
            }
          }
          var searchvalue = (this.search.nativeElement.value).toLowerCase()
          var datavalue = result[y].toString().toLowerCase();
          // console.log(">>>>",searchvalue,datavalue);
          if (searchvalue == datavalue) {
            this.copyarray.push(x);
          } 
        });
      });
      this.array = this.copyarray;
      console.log(">>>",this.array);
    } else {
      this.array = this.resetarray;
    }
  }

  handlechnage(){
    console.log(">>>>>",this.pageno);
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

  handlechange(e:any){
    if(e.target.value){
      console.log(">>>>>",this.array);
    }
    // console.log(">>>>>",e.target.value);
    // var stringvalue = (e.target.value).toString();   
    // this.array.filter(x=>Object.values(x).filter(value=>{
      // check.push(value.toString());
      // for(let i = 0;value.toString().length;i++){
      //   var mycheck = value.toString().charAt(i).includes(e.target.value);
      //   console.log(">>>>",mycheck);
      //   if(mycheck){

      //   }
      // }
      // if(value.toString().includes(e.target.value)){
      //   // console.log('>>>>>',x);
      //   // this.searcharray.push(x);
      // }
    // }))
    // console.log(">>>>>>>",check[2].charAt(0).includes(e.target.value));

    // // check.map((x)=>{
    //   // var j = 0;
    //   for(let i = 0;i<check.length;i++){
    //       var mycheck = check[i].charAt(i).includes(e.target.value);
    //       console.log(">>>>",mycheck);
    //       if(mycheck){
    //         // console.log(">>>>",x);
    //       }
    //     }
    // })
    // console.log(">>>>>>>",this.searcharray);
    // this.array = this.searcharray;
    // console.log(">>>>>>>",this.array);
  }

}
