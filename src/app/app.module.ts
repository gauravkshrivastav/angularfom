import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './Components/header/header.component';
import { CardsComponent } from './Components/cards/cards.component';
import { ButtonsComponent } from './Components/buttons/buttons.component';
import { ButtonformComponent } from './FormComponents/buttonform/buttonform.component';
import { HeaderformComponent } from './FormComponents/headerform/headerform.component';
import { FormComponent } from './FormComponents/form/form.component';
import { EditcardComponent } from './FormComponents/editcard/editcard.component';
import { EditbuttonComponent } from './FormComponents/editbutton/editbutton.component';
import { NavbarformComponent } from './FormComponents/navbarform/navbarform.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { EditnavbarComponent } from './FormComponents/editnavbar/editnavbar.component';
import { FooterformComponent } from './FormComponents/footerform/footerform.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TooltipformComponent } from './FormComponents/tooltipform/tooltipform.component';
import { TooltipComponent } from './Components/tooltip/tooltip.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { EditheaderComponent } from './FormComponents/editheader/editheader.component';
import { AlertformComponent } from './FormComponents/alertform/alertform.component';
import { AlertsComponent } from './Components/alerts/alerts.component';
import { ToasterComponent } from './Components/toaster/toaster.component';
import { ToasterformComponent } from './FormComponents/toasterform/toasterform.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditalertComponent } from './FormComponents/editalert/editalert.component';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsComponent } from './Components/forms/forms.component';
import { CheckboxComponent } from './Components/checkbox/checkbox.component';
import { CheckboxformComponent } from './FormComponents/checkboxform/checkboxform.component';
import { InputComponent } from './Components/input/input.component';
import { InputformComponent } from './FormComponents/inputform/inputform.component';
import { EditinputComponent } from './FormComponents/editinput/editinput.component';
import { EditcheckboxComponent } from './FormComponents/editcheckbox/editcheckbox.component'; 
import { SwitchctlComponent } from './Components/switchctl/switchctl.component';
import { EditswitchcontrolComponent } from './FormComponents/editswitchcontrol/editswitchcontrol.component';
import { SwitchcontrolComponent } from './FormComponents/switchcontrolform/switchcontrolform.component';
import { FileUploadComponent } from './Components/file-upload/file-upload.component';
import { ProgressComponent } from './Components/progress/progress.component';
import { RangesliderComponent } from './Components/rangeslider/rangeslider.component';
import { SelectComponent } from './Components/select/select.component';
import { EditfileuploadComponent } from './FormComponents/FileUpload/editfileupload/editfileupload.component';
import { FileuploadformComponent } from './FormComponents/FileUpload/fileuploadform/fileuploadform.component';
import { ProgressformComponent } from './FormComponents/progressform/progressform.component';
import { RangesliderformComponent } from './FormComponents/rangesliderform/rangesliderform.component';
import { SelectformComponent } from './FormComponents/selectform/selectform.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { CalendarformComponent } from './FormComponents/calendarform/calendarform.component';
import { LoaderformComponent } from './FormComponents/loaderform/loaderform.component';
import { LoaderComponent } from './Components/loader/loader.component'; 
import { TableformcomponentComponent } from './FormComponents/tableformcomponent/tableformcomponent.component';
import { TablecomponentComponent } from './Components/tablecomponent/tablecomponent.component';
import { EdittableformcomponentComponent } from './FormComponents/edittableformcomponent/edittableformcomponent.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DynamictabsComponent } from './Components/dynamictabs/dynamictabs.component';
import { DynamictabsformComponent } from './FormComponents/dynamictabsform/dynamictabsform.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ImagesliderComponent } from './Components/imageslider/imageslider.component';
import { EditloaderComponent } from './FormComponents/editloader/editloader.component'; 
import { FilterPipeModule } from 'ngx-filter-pipe';  
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { ImagesliderformComponent } from './FormComponents/imagesliderform/imagesliderform.component';
import { BreakpointlayoutformComponent } from './FormComponents/breakpointlayoutform/breakpointlayoutform.component';
import { LoginformComponent } from './FormComponents/loginform/loginform.component';
import { LoginComponent } from './Components/login/login.component';
import { BreakpointComponent } from './Components/breakpoint/breakpoint.component';
import { EditbreakpointComponent } from './FormComponents/editbreakpoint/editbreakpoint.component';
import { EditloginComponent } from './FormComponents/editlogin/editlogin.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    NavbarComponent,
    HeaderComponent,
    FormComponent,
    CardsComponent,
    ButtonsComponent,
    NavbarformComponent,
    HeaderformComponent,
    ButtonformComponent,
    EditheaderComponent,
    EditcardComponent,
    EditbuttonComponent,
    EditnavbarComponent,
    FooterformComponent,
    FooterComponent,
    TooltipComponent,
    TooltipformComponent,
    AlertformComponent,
    EditalertComponent,
    EditloaderComponent,
    AlertsComponent,
    ToasterComponent,
    ToasterformComponent,
    FormsComponent,
    CheckboxComponent,
    CheckboxformComponent,
    InputComponent,
    InputformComponent,
    EditinputComponent,
    EditcheckboxComponent, 
    SwitchctlComponent,
    SwitchcontrolComponent,
    EditswitchcontrolComponent,

    FileuploadformComponent,
    FileUploadComponent,
    EditfileuploadComponent,
    CalendarformComponent,
    CalendarComponent,
    RangesliderComponent,
    RangesliderformComponent,
    SelectComponent,
    SelectformComponent,
    ProgressComponent,
    ProgressformComponent,
    LoaderformComponent,
    LoaderComponent,
    TableformcomponentComponent,
    TablecomponentComponent,
    EdittableformcomponentComponent,
    DynamictabsComponent,
    DynamictabsformComponent,
    ImagesliderComponent,
    ImagesliderformComponent,
    BreakpointlayoutformComponent,
    LoginformComponent,
    LoginComponent,
    BreakpointComponent,
    EditbreakpointComponent,
    EditloginComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HighlightModule,
    BrowserAnimationsModule,
    ClipboardModule,
    NgxSliderModule,
    SlickCarouselModule,
    NgxPaginationModule,
    FilterPipeModule,
    Ng2SearchPipeModule,
    NgSelectModule,
    // NgxSpinnerModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true
    }), // ToastrModule added
    // NgxSpinnerModule.forRoot({ type: 'ball-clip-rotate' })
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
