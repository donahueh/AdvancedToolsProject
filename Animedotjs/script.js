let t1 = anime.timeline({
  easing: 'easeOutExpo',
  autoplay: false
});

t1
  .add({
    targets: '.text',
    opacity: "0",
    duration: 5
  })
  .add({
    targets: '.button',
    width: "0",
    duration: 750
  })
  .add({
    targets: '.opener',
    translateY: -1000,
    duration: 1000
  });

  document.querySelector(".button").addEventListener("mouseup",function(){
    t1.play();
  })  