import * as THREE from "three";
import { MindARThree } from "mindar-image-three";
import { mockWithVideo, mockWithImage } from "../libs/camera-mock.js";

document.addEventListener("DOMContentLoaded", () => {
  const start = async () => {
    mockWithVideo("./assets/mock-videos/course-banner1.mp4");
    // mockWithImage("../assets/mock-videos/course-banner1.png");

    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: "../markers/course-banner.mind",
    });

    const { renderer, scene, camera } = mindarThree;
    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      transparent: true,
      opacity: 0.5,
    });
    const plane = new THREE.Mesh(geometry, material);

    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(plane); //THREE.group

    await mindarThree.start();

    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  };
  start();
});
