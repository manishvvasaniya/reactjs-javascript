import React from "react";
import { BaseRoutes } from "./routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main/main";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Main}></Route>
      {BaseRoutes.map(({ component: Cmp, ...route }, index) => (
        <Route key={"baseRoute" + index} {...route} render={Cmp} />
      ))}
    </Router>
  );
}

export default App;
