import React, { Component } from 'react';
import './style.css'

export default class About extends Component {
  constructor() {
    super();
    this.ctx = null
  }

  initCanvas() {
    const canvas = document.getElementById("canvas");
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
      this.drawPathAvatar()
      return;
    }
    console.log('当前浏览器不支持<canvas>标签元素');
  }

  // test() {
  //   const data = {
  //     "165": [
  //       {
  //         "className": "未知",
  //         "count": 3914,
  //         "tagId": null
  //       },
  //       {
  //         "className": "31~40岁",
  //         "count": 639,
  //         "tagId": null
  //       },
  //       {
  //         "className": "21~30岁",
  //         "count": 564,
  //         "tagId": null
  //       },
  //       {
  //         "className": "41~50岁",
  //         "count": 193,
  //         "tagId": null
  //       },
  //       {
  //         "className": "51~60岁",
  //         "count": 54,
  //         "tagId": null
  //       },
  //       {
  //         "className": "60岁以上",
  //         "count": 20,
  //         "tagId": null
  //       },
  //       {
  //         "className": "18~20岁",
  //         "count": 6,
  //         "tagId": null
  //       },
  //       {
  //         "className": "11~17岁",
  //         "count": 1,
  //         "tagId": null
  //       }
  //     ],
  //     "232": [
  //       {
  //         "className": "未知",
  //         "count": 4456,
  //         "tagId": null
  //       },
  //       {
  //         "className": "被推荐购房",
  //         "count": 627,
  //         "tagId": null
  //       },
  //       {
  //         "className": "自主购房",
  //         "count": 308,
  //         "tagId": null
  //       }
  //     ],
  //     "287": [
  //       {
  //         "className": "未成交客户",
  //         "count": 4456,
  //         "tagId": null
  //       },
  //       {
  //         "className": "成交客户",
  //         "count": 935,
  //         "tagId": null
  //       }
  //     ],
  //     "211": [
  //       {
  //         "className": "未知",
  //         "count": 5371,
  //         "tagId": null
  //       },
  //       {
  //         "className": "1",
  //         "count": 18,
  //         "tagId": null
  //       },
  //       {
  //         "className": "2",
  //         "count": 2,
  //         "tagId": null
  //       }
  //     ],
  //     "-400": [
  //       {
  //         "className": "未知",
  //         "count": 5390,
  //         "tagId": null
  //       },
  //       {
  //         "className": "高楼层",
  //         "count": 1,
  //         "tagId": null
  //       }
  //     ],
  //     "204": [
  //       {
  //         "className": "未知",
  //         "count": 4497,
  //         "tagId": null
  //       },
  //       {
  //         "className": "1套房",
  //         "count": 858,
  //         "tagId": null
  //       },
  //       {
  //         "className": "2套房",
  //         "count": 27,
  //         "tagId": null
  //       },
  //       {
  //         "className": "3套房",
  //         "count": 7,
  //         "tagId": null
  //       },
  //       {
  //         "className": "4套房",
  //         "count": 2,
  //         "tagId": null
  //       }
  //     ],
  //     "194": [
  //       {
  //         "className": "未知",
  //         "count": 5369,
  //         "tagId": null
  //       },
  //       {
  //         "className": "有成功推荐客户购房",
  //         "count": 22,
  //         "tagId": null
  //       }
  //     ],
  //     "163": [
  //       {
  //         "className": "未知",
  //         "count": 3914,
  //         "tagId": null
  //       },
  //       {
  //         "className": "男",
  //         "count": 816,
  //         "tagId": null
  //       },
  //       {
  //         "className": "女",
  //         "count": 661,
  //         "tagId": null
  //       }
  //     ],
  //     "395": [
  //       {
  //         "className": "未知",
  //         "count": 5373,
  //         "tagId": null
  //       },
  //       {
  //         "className": "已订阅",
  //         "count": 18,
  //         "tagId": null
  //       }
  //     ],
  //     "241": [
  //       {
  //         "className": "未知",
  //         "count": 4456,
  //         "tagId": null
  //       },
  //       {
  //         "className": "1~2套",
  //         "count": 908,
  //         "tagId": null
  //       },
  //       {
  //         "className": "3~5套",
  //         "count": 25,
  //         "tagId": null
  //       },
  //       {
  //         "className": "21~50套",
  //         "count": 1,
  //         "tagId": null
  //       },
  //       {
  //         "className": "6~10套",
  //         "count": 1,
  //         "tagId": null
  //       }
  //     ]
  //   }

  //   const reg = /(^-)/g;
  //   Object.keys(data).forEach((x, i) => {
  //     if (reg.test(x)) {
  //       const xTemp = x.replace(reg, '')
  //       data[xTemp] = data[x];
  //       delete data[x];
  //     }
  //   })
  // }

  render() {
    return (
      <div id='About'>
        <canvas id="canvas" width="600" height="300"></canvas>
      </div>
    );
  }

}
