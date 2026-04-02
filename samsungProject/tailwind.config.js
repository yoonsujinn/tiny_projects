/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/header.html",
    "./src/**/*.{js,ts,jsx,tsx}", // src 폴더 안의 모든 파일에서 Tailwind 클래스 탐색
  ],
  theme: {
    extend: {
      // 커스텀폰트 추가
      fontFamily: {
        nanumCoding: ["Nanum Gothic Coding", "monospace"],
      },
    },
  },
  plugins: [],
};
