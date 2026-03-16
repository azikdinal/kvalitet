function scrollToPosition(targetPosition, duration) {
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    var elapsedTime = currentTime - startTime;
    var scrollPosition = easeInOut(elapsedTime, startPosition, distance, duration);
    window.scrollTo(0, scrollPosition);
    if (elapsedTime < duration) {
      requestAnimationFrame(animation);
    }
  }

  function easeInOut(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('about');
  link.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToPosition(650, 1000);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('catalog');
  link.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToPosition(1350, 1000);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('catalogBut');
  link.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToPosition(1350, 1000);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('contact');
  link.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToPosition(2050, 1000);
  });
}); document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('call');
  link.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToPosition(2050, 1000);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('logo');
  link.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToPosition(0, 1000);
  });
});
