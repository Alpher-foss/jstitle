var jstitle = {
  animateTitle: function(title, repeatCount, speed) {
    var i = 0;
    var message = title.split(' ');
    var currentTitle = '';
    var count = 0;
    var animationSpeed = speed || 200;
    function animate() {
      currentTitle += message[i] + ' ';
      document.title = currentTitle;
      i++;
      if (i < message.length) {
        setTimeout(animate, animationSpeed);
      } else if (repeatCount === undefined || count < repeatCount - 1) {
        i = 0;
        currentTitle = '';
        count++;
        setTimeout(animate, animationSpeed);
      }
    }
    animate();
  }
};

window.jstitle = jstitle;
