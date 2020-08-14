/*
 * @Author: qzw <isee_wang@outlook.com>
 * @Date: 2020-08-06 16:38:48
 * @LastEditTime: 2020-08-14 18:21:24
 * @Description: 
 * @FilePath: /visualization/src/pages/Hitokoto/index.tsx
 * @say hello~
 */
import React, { Component } from "react";
import "./style.scss";
import { getContent } from "@/service/Hitokoto/index";
interface IState {
  contentData: {
    hitokoto: string;
    from: string;
  };
}
class Hitokoto extends Component<{}, {}> {
  public timer: any = null;

  readonly state: IState = {
    contentData: {
      hitokoto: "",
      from: "",
    },
  };

  public getRandom = (num: number = 20): number =>
    Math.round(Math.random() * num);

  async _getMessage() {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      const random = this.getRandom();
      arr.push(`${random}%`);
    }
    const ele: any = document.querySelector(".box");
    ele.style.borderRadius = arr.join(" ");
    const contentData = await getContent({
      encode: "json",
    });
    this.setState({ contentData });
  }

  componentDidMount() {
    this._getMessage();
    this.timer = setInterval(() => {
      this._getMessage();
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  public render() {
    const { contentData } = this.state;
    return (
      <div id='Hitokoto'>
        <section className='box' onClick={this._getMessage.bind(this)}>
          <div className='word'>{contentData.hitokoto}</div>
          <div className='author'>—— {contentData.from}</div>
        </section>
      </div>
    );
  }
}

export default Hitokoto;
