import { CalendarModule } from './../../examples/calendar/calendar.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule,
  TabsModule,
  TooltipModule,
} from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { LoadingBarModule } from "@ngx-loading-bar/core";

import { RouterModule } from "@angular/router";
import { AdminRoutes } from "./admin.routing";
import { QuillModule } from "ngx-quill";
import { NgxDropzoneModule } from "ngx-dropzone";
import { OrgChartModule } from "angular-org-chart";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "src/environments/environment";
import * as mapbox from "mapbox-gl";
(mapbox as any).accessToken = environment.mapbox.accessToken;
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { ReportComponent } from './report/report.component';
import {HomeComponent} from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SettingComponent } from './setting/setting.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MyAccountComponent,
    SettingComponent,
    HomeComponent,
    ReportComponent,
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
    QuillModule.forRoot(),
    NgxDropzoneModule,
    OrgChartModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    LeafletModule,
    CalendarModule,
    Ng2SearchPipeModule,
    NgbModule
  ],
})
export class AdminModule {}
