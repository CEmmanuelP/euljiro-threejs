import * as THREE from "three";

const state = {
  activeMesh: null,
  cameraPos: new THREE.Vector3(12, 12, 12),
  target: new THREE.Vector3(0, 0, 0),
  shouldUpdate: true,
};

export default state;
