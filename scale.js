window.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector(".wrap");
  const wrapParent = document.querySelector(".wrapParent");
  let padding = parseFloat(getComputedStyle(wrapParent).paddingLeft) * 2;
  let winW = window.clientWidth || document.documentElement.clientWidth;
  let wrapW = wrap.clientWidth + padding;
  // console.log(padding, "padding");
  // console.log(wrapW, "wrapW");

  window.addEventListener("resize", () => {
    let winW = window.clientWidth || document.documentElement.clientWidth;
    let wrapW = wrap.clientWidth + padding;

    if (winW < wrapW) {
      scale = winW / wrapW;
      wrap.style.transform = `scale(${scale})`;
    }
  });

  if (winW < wrapW) {
    scale = winW / wrapW;
    wrap.style.transform = `scale(${scale})`;
  }
});
