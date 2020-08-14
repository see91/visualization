/*
 * @Author: qzw <isee_wang@outlook.com>
 * @Date: 2020-07-21 15:22:15
 * @LastEditTime: 2020-08-14 18:13:14
 * @Description:
 * @FilePath: /visualization/src/pages/Home/index.tsx
 * @say hello~
 */

import React, { Component } from "react";
import * as THREE from "three";
import Stats from "stats-js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
/**
 * assets
 */
const sceneBg = require("../../assets/img/t.png"); // scene background

interface IState {
  scene: any;
  camera: any;
  renderer: any;
  geometry: any;
  material: any;
  cubeObj: any;
  stats: any;
  orbitcontrol: any; // 轨道控制器
}

export default class App extends Component<{}, IState> {
  public animate() {
    const { cubeObj } = this.state;
    requestAnimationFrame(this.animate.bind(this));
    cubeObj.rotation.y += 0.01;
    cubeObj.rotation.x += 0.01;
    this.renderThree();
  }

  // 渲染场景
  public renderThree() {
    const { renderer, scene, camera, stats } = this.state;
    stats.update();
    renderer.render(scene, camera);
  }

  public initThree() {
    const threeContainer: any = document.querySelector("#three-container");
    /**
     * 创建场景
     */
    const scene = new THREE.Scene();
    /**
     * 创建透视相机
     */
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const stats = new Stats();
    stats.showPanel(0);
    threeContainer.appendChild(stats.dom);
    threeContainer.appendChild(renderer.domElement);

    scene.background = new THREE.TextureLoader().load(sceneBg); // 加载背景图片

    this.setState(
      {
        scene,
        camera,
        renderer,
        geometry,
        material,
        stats,
        cubeObj: cube,
      },
      () => {
        this.initControl();
        this.animate();
      }
    );
  }

  public initControl() {
    const { camera, renderer } = this.state;
    const orbitcontrol = new OrbitControls(camera, renderer.domElement);
    orbitcontrol.enableKeys = false;
    orbitcontrol.enableRotate = false;
    orbitcontrol.update();
    this.setState({ orbitcontrol });
  }

  componentDidMount() {
    this.initThree();
  }

  render() {
    return <div id='three-container'></div>;
  }
}
