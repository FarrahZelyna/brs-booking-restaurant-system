export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}

// Menu Items
export const USERPORTALROUTES: RouteInfo[] = [
  // {
  //   path: "/user-portal/dashboard",
  //   title: "Dashboard",
  //   type: "link",
  //   icontype: "fas fa-home text-default",
  // },
];
export const ROUTES: RouteInfo[] = [
  {
    path: "/user/my-account",
    title: "My Acccount",
    type: "link",
    icontype: "fas fa-user text-dark",
  },
  {
    path: "/user/setting",
    title: "Setting",
    type: "link",
    icontype: "fas fa-cog text-dark",
  },
  {
    path: "/portal/landing",
    title: "Logout",
    type: "link",
    icontype: "fas fa-sign-out-alt text-dark",
  },
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: "/user/my-account",
    title: "My Acccount",
    type: "link",
    icontype: "fas fa-user text-dark",
  },
  {
    path: "/user/setting",
    title: "Setting",
    type: "link",
    icontype: "fas fa-cog text-dark",
  },
  {
    path: "/portal/landing",
    title: "Logout",
    type: "link",
    icontype: "fas fa-sign-out-alt text-dark",
  },
];

export const PORTAL: RouteInfo[] = [
  {
    path: "/portal/landing",
    title: "Home",
    type: "link",
    icontype: "fas fa-home text-default",
  },
];
