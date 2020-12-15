window.onload = function () {
  document.querySelectorAll('a').forEach((dom, i) => {
    dom.addEventListener('mouseover', function (e) {
      const bd = document.querySelector('body');
      let color = 'white';

      if (i === 0) {
        color = 'yellow';
      } else if (i === 1) {
        color = '#f89218';
      } else if (i === 2) {
        color = 'pink';
      } else if (i === 3) {
        color = 'blue';
      } else if (i === 4) {
        color = 'green';
      } else if (i === 5) {
        color = 'purple';
      } else if (i === 6) {
        color = '#f14242';
      } else if (i === 7) {
        color = '#d63636';
      }

      bd.style.backgroundColor = color;
    });

    dom.addEventListener('mouseleave', function (e) {
      document.querySelector('body').style.backgroundColor = 'white';
    });
  })
};
