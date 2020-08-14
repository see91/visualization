/*
 * @Author: qzw <isee_wang@outlook.com>
 * @Date: 2020-08-03 15:20:44
 * @LastEditTime: 2020-08-14 18:24:19
 * @Description: 
 * @FilePath: /visualization/src/pages/About/index.tsx
 * @say hello~
 */
import React, { Component } from "react";
import { SVG, Rect } from "@svgdotjs/svg.js";
import "./style.scss";

interface IState {}

export default class About extends Component<{}, IState> {
  private ctx: any = null;

  initCanvas() {
    const canvas: any = document.getElementById("canvas");
    if (canvas.getContext) {
      this.ctx = canvas.getContext("2d");
      return true;
    }
    return false;
  }

  /**
   * 绘制图形
   * @param fillRect(x, y, width, height)  填充矩形
   * @param strokeRect(x, y, width, height)  绘制矩形边框
   * @param clearRect(x, y, width, height)  清除指定矩形区域，让清除部分完全透明
   */
  drawRectangle() {
    const { ctx } = this;
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 55, 50);
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 55, 50);
    ctx.strokeRect(85, 80, 50, 70);
    ctx.clearRect(30, 30, 55, 50);
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }

  /**
   * 绘制路径
   * @param beginPath  新建一条路径
   * @param closePath  闭合路径
   * @param stroke  通过线条来绘制图形轮廓
   * @param fill  通过填充路径的内容区域生成实心的图形
   */
  drawPath() {
    const { ctx } = this;
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.fillStyle = "rgb(600,0,0)";
    ctx.lineTo(100, 25);
    ctx.lineTo(100, 75);
    // ctx.lineTo(75, 50);
    // ctx.stroke();
    ctx.fill();
  }

  /**
   * 绘制笑脸头像
   * @param arc(x, y, radius, startAngle, endAngle, anticlockwise ?) (原点x坐标，原点y坐标，半径，起始点--x轴方向开始计算，true/false：为逆时针/顺时针)
   */
  drawPathAvatar() {
    const { ctx } = this;
    ctx.beginPath();
    ctx.arc(150, 150, 50, 0, Math.PI * 2, true);
    ctx.moveTo(110, 150);
    ctx.arc(150, 150, 35, 0, Math.PI, false);
    // ctx.moveTo(65, 65);
    ctx.fill();
  }

  /**
   * 初始化SVG
   */
  initSvg() {
    const draw = SVG().addTo("#draw").size("50%", "50%");
    draw.rect(100, 100).move(100, 50).fill("#f06");

    const nested = draw.nested(); // svg 嵌套
    const rect = nested.rect(50, 50);

    const group = draw.group();
    group.path("M10,20L30,40");
    group.add(rect);

    const symbol = draw.symbol();
    symbol.rect(150, 150).fill("#f09");
    draw.use(symbol).move(-60, 70);

    const link = draw.link("http://baidu.com/");
    link.target("_blank");
    link.rect(100, 100);

    new Rect().size(150, 20).addTo(draw).fill("#f39");
    // var rect1 = new Rect(rect).size(100, 100);

    // link.to("https://www.jd.com");
    // rectLink.linkTo("http://baidu.com/");
    // rectLink.linkTo(function (link) {
    //   link.to("http://svgdotjs.github.io/").target("_blank");
    // });
  }

  /**
   * svg动画
   */
  animateSvg() {
    var input: any = document.querySelector("input[type=text]");
    var draw = SVG()
      .addTo("#drawing")
      .size("100%", "100%")
      .viewbox(0, 0, 300, 140);
    var text = draw.text(function (add) {
      add.tspan(input.value);
    });
    let textPath = text.path("M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
    textPath
      .animate({ duration: 1000, ease: "<>" })
      .plot("M10 80 C 40 150, 65 150, 95 80 S 150 10, 180 80")
      .loop(1000, true);
    input.addEventListener("keyup", this.updateText(textPath, input));
  }

  updateText(textPath: any, input: any) {
    return function () {
      textPath.tspan(input.value);
    };
  }

  componentDidMount() {
    /**
     * svg
     */
    this.initSvg(); // base svg
    this.animateSvg(); //svg 动画

    /**
     * canvas
     */
    const isCanvas = this.initCanvas();
    if (isCanvas) {
      this.drawRectangle(); // 绘图
      this.drawPath(); // 绘制路径
      this.drawPathAvatar();
      return;
    }
    console.log("当前浏览器不支持<canvas>标签元素");
  }

  public render() {
    return (
      <div id='About'>
        <canvas id='canvas' width='600' height='300'></canvas>
        <div id='draw'></div>
        <section id='drawing'>
          <input
            type='text'
            defaultValue='Dragon----- - - - ->'
            placeholder='Type text here...'
          />
        </section>
      </div>
    );
  }
}
