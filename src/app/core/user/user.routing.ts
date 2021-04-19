
import { Routes } from "@angular/router";
import { MyAccountComponent } from './my-account/my-account.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from "./setting/setting.component";
export const UserRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "home",
        component: HomeComponent,
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
