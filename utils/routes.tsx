export interface Route {
    name: string;
    path: string;
  }
  
  export const routes: Route[] = [
    {
      name: "about",
      path: "/#about",
    },
    {
      name: "experience",
      path: "/#experience",
    },
    {
      name: "projects",
      path: "/#projects",
    },
  ];