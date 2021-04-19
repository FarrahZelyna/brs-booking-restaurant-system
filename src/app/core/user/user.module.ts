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
import { TagInputModule } from "ngx-chips";

import { RouterModule } from "@angular/router";
import { UserRoutes } from "./user.routing";

import { QuillModule } from "ngx-quill";
import { NgxDropzoneModule } from "ngx-dropzone";
import { OrgChartModule } from "angular-org-chart";

import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SettingComponent } from './setting/setting.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    HomeComponent,
    MyAccountComponent,
    SettingComponent,
    
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
    RouterModule.forChild(UserRoutes),
    QuillModule.forRoot(),
    NgxDropzoneModule,
    TagInputModule,
    OrgChartModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    NgbModule,
    CalendarModule,
    Ng2SearchPipeModule
  ],
})
export class UserModule {}
