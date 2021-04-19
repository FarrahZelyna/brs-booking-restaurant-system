
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { ReportComponent } from './report/report.component';
import { SettingComponent } from "./setting/setting.component";

export const AdminRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "report",
        component: ReportComponent,
      },
      {
        path: "my-account",
        component: MyAccountComponent,
      },
      {
        path: "setting",
        component: SettingComponent,
      },
    ],
  },
];
