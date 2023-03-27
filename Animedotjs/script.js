let t1 = anime.timeline({
  easing: 'easeOutExpo',
  autoplay: false
});

let t2 = anime.timeline({
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
    targets: '.piechart',
    translateY: -1000,
    duration: 1
  })
  .add({
    targets: '.nextbutton',
    translateX: 300,
    duration: 1
  })
  .add({
    targets: '.opener',
    translateY: -1000,
    duration: 1500
  })
  .add({
    targets: '.piechart',
    easing: 'easeOutBounce',
    translateY: 100,
    duration: 2000
  })
  .add({
    targets: '.nextbutton',
    easing: 'easeOutElastic',
    translateX: 0,
    duration: 2000
  });

t2
  .add({
    targets: '.nextcover',
    width: '100%',
    duration: 2000
  });


document.querySelector(".button").addEventListener("mouseup", function () {
  t1.play();
})  

document.querySelector(".nextbutton").addEventListener("mouseup", function () {
  t2.play();
})  
