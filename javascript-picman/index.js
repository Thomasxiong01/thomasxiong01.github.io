window.onload = function () {
  var snack = document.querySelector('.snack');
  document.querySelector('.map').addEventListener('mouseover', function(e) {
    if (e.target.className.indexOf('rect') > -1) {
      console.log(e.target.offsetTop, e.target.offsetLeft);
      e.target.style.backgroundColor = '#353430';

      snack.style.left = e.target.offsetLeft - 5 + 'px';
      snack.style.top = e.target.offsetTop - 5 + 'px';
    }
  })
};
