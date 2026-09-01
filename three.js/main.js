import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.185.0/build/three.module.js";

// --------------------------------
// 기본 설정
// --------------------------------

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

camera.position.z = 8;

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

document.body.appendChild(renderer.domElement);

// --------------------------------
// U2 글자를 Canvas로 만들기
// --------------------------------

const textCanvas = document.createElement("canvas");

textCanvas.width = 600;
textCanvas.height = 300;

const ctx = textCanvas.getContext("2d");

ctx.fillStyle = "#000";
ctx.fillRect(0, 0, textCanvas.width, textCanvas.height);

ctx.fillStyle = "#fff";

ctx.font = "bold 180px Arial";

ctx.textAlign = "center";
ctx.textBaseline = "middle";

ctx.fillText("U2", textCanvas.width / 2, textCanvas.height / 2);

// --------------------------------
// 글자에서 밝은 픽셀 찾기
// --------------------------------

const imageData = ctx.getImageData(0, 0, textCanvas.width, textCanvas.height);

const pixels = imageData.data;

const positions = [];

// 입자 간격
const gap = 5;

for (let y = 0; y < textCanvas.height; y += gap) {
  for (let x = 0; x < textCanvas.width; x += gap) {
    const index = (y * textCanvas.width + x) * 4;

    const alpha = pixels[index + 3];

    // 흰색 픽셀이면 입자 생성
    if (alpha > 128) {
      const posX = (x - textCanvas.width / 2) / 50;

      const posY = -(y - textCanvas.height / 2) / 50;

      positions.push(posX, posY, 0);
    }
  }
}

// --------------------------------
// Particle Geometry
// --------------------------------

const geometry = new THREE.BufferGeometry();

const positionArray = new Float32Array(positions);

geometry.setAttribute("position", new THREE.BufferAttribute(positionArray, 3));

// --------------------------------
// Particle Material
// --------------------------------

const material = new THREE.PointsMaterial({
  color: 0xffffff,

  size: 0.045,

  transparent: true,

  opacity: 0.9,

  depthWrite: false,
});

// --------------------------------
// Particle 생성
// --------------------------------

const particles = new THREE.Points(geometry, material);

scene.add(particles);

// --------------------------------
// 원래 위치 저장
// --------------------------------

const originalPositions = new Float32Array(positionArray);

// --------------------------------
// 마우스
// --------------------------------

const mouse = new THREE.Vector2(999, 999);

// 마우스
window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;

  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// 모바일 터치
window.addEventListener(
  "touchmove",
  (event) => {
    const touch = event.touches[0];

    mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;

    mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
  },
  {passive: true},
);

// --------------------------------
// 애니메이션
// --------------------------------

function animate() {
  requestAnimationFrame(animate);

  const positionsAttribute = geometry.attributes.position;

  const currentPositions = positionsAttribute.array;

  for (let i = 0; i < currentPositions.length; i += 3) {
    const originalX = originalPositions[i];

    const originalY = originalPositions[i + 1];

    // 마우스 좌표를 Three.js 공간으로 변환

    const mouseX = mouse.x * 5;

    const mouseY = mouse.y * 3;

    // 입자와 마우스 사이 거리

    const dx = currentPositions[i] - mouseX;

    const dy = currentPositions[i + 1] - mouseY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    // 마우스 영향 범위

    const radius = 1.2;

    if (distance < radius) {
      // 마우스에서 멀어지는 방향

      const force = (radius - distance) / radius;

      currentPositions[i] += (dx / distance) * force * 0.08;

      currentPositions[i + 1] += (dy / distance) * force * 0.08;
    }

    // 원래 위치로 돌아가기

    currentPositions[i] += (originalX - currentPositions[i]) * 0.05;

    currentPositions[i + 1] += (originalY - currentPositions[i + 1]) * 0.05;
  }

  positionsAttribute.needsUpdate = true;

  renderer.render(scene, camera);
}

animate();

// --------------------------------
// 화면 크기 변경
// --------------------------------

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});
