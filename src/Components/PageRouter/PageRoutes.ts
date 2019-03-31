import HomePage from "../Pages/HomePage/HomePage";

export enum PageId {
  Home = "Home"
}

export interface IPageRoute {
  component: React.ComponentClass,
  id: PageId,
  path: string,
  title: string
}

export class PageRoutes {
  public static Home: IPageRoute = {
    component: HomePage,
    id: PageId.Home,
    path: "/",
    title: "Timelapse Solver"
  }
}
