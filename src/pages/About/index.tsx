import React, { Component } from "react";
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

  componentDidMount() {
    const isCanvas = this.initCanvas();
    if (isCanvas) {
      // this.drawRectangle();// 绘图
      // this.drawPath();// 绘制路径
      this.drawPathAvatar();
      return;
    }
    console.log("当前浏览器不支持<canvas>标签元素");
  }

  public render() {
    return (
      <div id='About'>
        <canvas id='canvas' width='600' height='300'></canvas>
      </div>
    );
  }
}
