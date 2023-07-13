import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
    providedIn: 'root'
  })

export class CommonService {



    private tooltipstatus = new BehaviorSubject<any>([]);
     tooltipstatusdata = this.tooltipstatus.asObservable();

     
    private footerstatus = new BehaviorSubject<any>([]);
    footerstatusdata = this.footerstatus.asObservable();

    private toasterstatus = new BehaviorSubject<any>([]);
    toasterstatusdata = this.toasterstatus.asObservable();


    private rangesliderstatus = new BehaviorSubject<any>([]);
    rangesliderstatusdata = this.rangesliderstatus.asObservable();

    
    private selectorstatus = new BehaviorSubject<any>([]);
    selectorstatusdata = this.selectorstatus.asObservable();

    
    private progressstatus = new BehaviorSubject<any>([]);
    progressstatusdata = this.progressstatus.asObservable();

    private calendarstatus = new BehaviorSubject<any>([]);
    calendarstatusdata = this.calendarstatus.asObservable();

    
    private tabstatus = new BehaviorSubject<any>([]);
    tabsstatusdata = this.tabstatus.asObservable();

       
    private imagesliderstatus = new BehaviorSubject<any>([]);
    imagesliderstatusdata = this.imagesliderstatus.asObservable();


    


    footercompletedata(data:any) {
        this.footerstatus.next(data);
    }

     dashboardmatchjob(data:any){
        this.tooltipstatus.next(data);4
      }


      toastercompletedata(data:any) {
        this.toasterstatus.next(data);
      }

      rangeslidercompletedata(data:any) {
        this.rangesliderstatus.next(data);
      }

      progresscompletedata(data:any) {
        this.progressstatus.next(data);
      }

      selectorcompletedata(data:any) {
        this.selectorstatus.next(data);
      }

      calendarcompletedata(data:any) {
        this.calendarstatus.next(data);
      }


      tabscompletedata(data:any) {
        this.tabstatus.next(data);
      }

      imageslidercompletedata(data:any) {
        this.imagesliderstatus.next(data);
      }




};