import {
  Home,
  AboutUs,
  Blog,
  FilterableProductTable as ProductTable,
} from "./components";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  { path: "/products", component: ProductTable },
  {
    path: "/about-us",
    component: AboutUs,
  },
  { path: "/blog", component: Blog },
];
