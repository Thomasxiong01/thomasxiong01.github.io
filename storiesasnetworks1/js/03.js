


let btn = document.getElementById("btn");

let container = document.querySelector(".container");

let animate = document.querySelector(".animate");
//click event
btn.addEventListener("click", function () {
  //create elements
  let animate = document.createElement("div");
  //class name
  animate.className = "animate";
  //tag/ contents/
  animate.innerHTML = `  <svg
    t="1614255608122"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3117"
    width="32"
    height="32"
  >
    <path
      d="M512 950.784c-17.92 0-35.84-6.144-50.176-18.432L130.56 645.12c-0.512-0.512-1.024-1.024-1.536-1.024C65.536 580.096 0 500.736 0 394.24c0-169.472 137.728-307.2 307.2-307.2 76.8 0 148.48 27.648 204.8 78.336 56.32-50.688 128-78.336 204.8-78.336 169.472 0 307.2 137.728 307.2 307.2 0 111.104-66.56 187.392-129.024 249.856-0.512 0.512-1.024 1.024-1.536 1.024l-331.264 287.232c-14.336 12.288-32.256 18.432-50.176 18.432z m364.544-324.608z"
      fill="#FF2B2B"
      p-id="3118"
    ></path>
    <path
      d="M801.28 509.952c-7.68 0-14.848-3.584-19.968-9.728-8.704-11.264-6.656-27.136 4.096-35.84 24.576-19.456 38.912-48.64 38.912-80.384 0-56.32-46.08-102.4-102.4-102.4H718.848c-14.336 0.512-26.112-10.752-26.624-24.576-0.512-14.336 10.752-26.112 24.576-26.624H721.408c84.48 0 153.6 69.12 153.6 153.6 0 47.104-21.504 91.136-58.368 120.832-4.608 3.584-9.728 5.12-15.36 5.12z"
      fill="#FFFFFF"
      p-id="3119"
    ></path>
  </svg>`;
  //随机一个数，0-1；200-1200
  const left = Math.random() * 1000 + 200 + "px";
  animate.style.left = left;
  //添加子元素
  container.appendChild(animate);
});
