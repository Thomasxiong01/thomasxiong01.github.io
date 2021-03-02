// 获取元素
let messages = document.querySelectorAll(".message");
let boxs = document.querySelectorAll(".box");
// 遍历元素
boxs.forEach((item, i) => {
  // 添加点击事件
  item.addEventListener("click", function () {
    // 元素显示
    messages[i].style.display = "block";
  });
});