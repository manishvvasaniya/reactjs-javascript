import ButtonOne from "./pages/button-one/button-one";
import ButtonTwo from "./pages/buttton-two/button-two";
const BaseRoutes = [
  {
    path: "/sign-up",
    name: "sign-up",
    component: ButtonOne
  },
  {
    path: "/register",
    name: "register",
    component: ButtonTwo
  }
];

export { BaseRoutes };
