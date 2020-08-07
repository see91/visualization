/**
 * 路由渲染
 */
import * as React from "react";
import Routers from "./routerMap";
import "./styles/common.scss";
import { Switch, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename='/'>
      <div id='main-content'>
        <Switch>
          {Routers.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              exact
              render={(props) => <item.component {...props} />}
            />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
