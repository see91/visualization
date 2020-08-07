import React, { Component } from "react";
import * as THREE from "three";
// import Stats from "stats-js";

interface IState {
  scene: any;
  camera: any;
  renderer: any;
  geometry: any;
  material: any;
  cubeObj: any;
  // stats: any;
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
    const { renderer, scene, camera } = this.state;// stats
    // stats.update();
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

    // const stats = new Stats();
    // stats.showPanel(0);
    // threeContainer.appendChild(stats.dom);
    threeContainer.appendChild(renderer.domElement);

    this.setState(
      {
        scene,
        camera,
        renderer,
        geometry,
        material,
        // stats,
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
