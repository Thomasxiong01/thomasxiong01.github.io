// 获取元素
let spans = document.querySelectorAll(".green");

// 遍历元素
spans.forEach((item) => {
  // 添加事件
  item.flag = true;
  //click event; click can be changed
  item.addEventListener("click", function () {
    if (item.flag) {
      //this: element; dom node；color:black;
      this.style.color = "#000";
      this.style.backgroundColor = "#000";
      item.flag = false;
    } else {
      this.style.color = "rgb(31, 234, 80)";
      this.style.backgroundColor = "transparent";
      item.flag = true;
    }
  });
});
