let squareclick = anime({
    targets: '.square',
    translateX: 250,
    backgroundColor: '#FFF',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
    autoplay: false,
    loop: true
  });

  document.querySelector(".square").addEventListener("mouseup",function(){
    squareclick.play();
  })  