import "./app.scss";
import nyancat from "./nyancat.jpg";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `<img src="${nyancat}" />`;
});

console.log(process.env.NODE_ENV);

// 현재 preset-env 버전에서는 async / await 함수를 Promise를 사용한 코드로 변환해준다.
function awaitTest() {
  console.log("await function");
  return new Promise();
}

async function testAsync() {
  await awaitTest();
}

testAsync();
