import * as THREE from "three";
import { MindARThree } from "mindar-image-three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { mockWithVideo, mockWithImage } from "../libs/camera-mock.js";

document.addEventListener("DOMContentLoaded", () => {
  const start = async () => {
    mockWithVideo("./assets/mock-videos/musicband1.mp4");

    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: "../markers/musicband-raccoon.mind",
    });
    const { renderer, scene, camera } = mindarThree;

    const anchor = mindarThree.addAnchor(0);

    const loader = new GLTFLoader();
    loader.load("./assets/models/musicband-raccoon/scene.gltf", (gltf) => {
      anchor.group.add(gltf.scene);
    });

    await mindarThree.start();

    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  };

  start();
});
