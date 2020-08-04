import React, { Component } from "react";
import * as THREE from "three";
import Stats from "stats-js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: null,
      camera: null,
      renderer: null,
      geometry: null,
      material: null,
      cubeObj: null,
      stats: null,
    };
  }

  animate() {
    const { cubeObj } = this.state;
    requestAnimationFrame(this.animate.bind(this));
    cubeObj.rotation.y += 0.01;
    cubeObj.rotation.x += 0.01;
    this.renderThree();
  }

  // 渲染场景
  renderThree() {
    const { renderer, scene, camera, stats } = this.state;
    stats.update();
    renderer.render(scene, camera);
  }

  initThree() {
    const threeContainer = document.querySelector("#three-container");
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
        this.animate();
      }
    );
  }

  componentDidMount() {
    this.initThree();
  }

  render() {
    return <div id='three-container'></div>;
  }
}
