/*
 * @Author: qzw <isee_wang@outlook.com>
 * @Date: 2020-07-21 15:22:15
 * @LastEditTime: 2020-08-25 18:59:06
 * @Description:
 * @FilePath: /visualization/src/pages/Home/index.tsx
 * @say hello~
 */

import React, { Component } from "react";
import Cube from "@/components/home/cube";
import Hitokoto from "../Hitokoto/index";
import "./styles/index.scss";
import { AcUnitTwoTone } from "@material-ui/icons";

export default class App extends Component {
  render() {
    return (
      <div id="home">
        <div className="h-t center-layout">
          <div className="h-t-l">
            <AcUnitTwoTone style={{ color: "#f7821b" }} fontSize="large" />
          </div>
          <Cube width={200} height={100} />
        </div>
        <div className="main">
          <Hitokoto />
        </div>
      </div>
    );
  }
}
