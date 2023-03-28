let t1 = anime.timeline({
  easing: 'easeOutExpo',
  autoplay: false
});

let t2 = anime.timeline({
  easing: 'easeOutExpo',
  autoplay: false
});

let t3 = anime.timeline({
  easing: 'easeOutExpo',
  autoplay: false
});

let tickmarks = document.querySelectorAll('.tickmark');
let ticknumbers = document.querySelectorAll('.ticknumber');


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
    targets: '.chartbox',
    translateY: -1000,
    duration: 1
  })
  .add({
    targets: '.nextbutton2',
    translateX: 300,
    duration: 1
  })
  .add({
    targets: '.chart',
    translateY: -1000,
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
    translateY: 125,
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
  })
  .add({
    targets: '.page1',
    translateX: 2000,
    duration: 1
  })
  .add({
    targets: '.chartbox',
    translateY: -47,
    duration: 1
  })
  .add({
    targets: '.chart',
    translateY: 0,
    duration: 1
  })
  .add({
    targets: tickmarks,
    opacity: "0",
    duration: 1,
  })
  .add({
    targets: ticknumbers,
    opacity: "0",
    duration: 1,
  })
  .add({
    targets: '.legendtext',
    opacity: "0",
    rotate: -90,
    duration: 1,
  })
  .add({
    targets: '.cattext',
    opacity: "0",
    duration: 1,
  })
  .add({
    targets: '.dogtext',
    opacity: "0",
    duration: 1,
  })
  .add({
    targets: '.titletext',
    translateX: 1500,
    translateY: -100,
    duration: 1,
  })
  .add({
    targets: '.bottomline',
    translateX: -2000,
    duration: 1
  })
  .add({
    targets: '.nextcover',
    width: '0%',
    duration: 2000
  })
  .add({
    targets: '.bottomline',
    translateX: 0,
    duration: 3000,
    easing: 'easeOutElastic'
  })
  .add({
    targets: tickmarks,
    opacity: '1',
    duration: 1,
  })
  .add({
    targets: tickmarks,
    bottom: anime.stagger(['10%', '80%']),
    duration: 1000,
    easing: 'easeOutBack'
  })
  .add({
    targets: ticknumbers,
    bottom: anime.stagger(['10%', '80%']),
    duration: 1,
  })
  .add({
    targets: ticknumbers,
    opacity: '1',
    duration: 1000,
  })
  .add({
    targets: '.legendtext',
    opacity: "1",
    duration: 1000,
  })
  .add({
    targets: '.titletext',
    translateX: 0,
    translateY: 0,
    duration: 2000,
    easing: 'easeInExpo',
  })
  .add({
    targets: '.dogline',
    height: '79%',
    duration: 2000,
    easing: 'easeOutElastic'
  })
  .add({
    targets: '.dogtext',
    opacity: '1',
    duration: 1,
  })
  .add({
    targets: '.dogtext',
    bottom: '-7%',
    duration: 1000,
    easing: 'easeOutBounce',
  })
  .add({
    targets: '.catline',
    height: '50%',
    duration: 2000,
    easing: 'easeOutElastic'
  })
  .add({
    targets: '.cattext',
    opacity: '1',
    duration: 1,
  })
  .add({
    targets: '.cattext',
    bottom: '-7%',
    duration: 1000,
    easing: 'easeOutBounce',
  })
  .add({
    targets: '.nextbutton2',
    easing: 'easeOutElastic',
    translateX: 0,
    duration: 2000
  });

t3
  .add({
    targets: '.nextcover2',
    height: '100%',
    duration: 2000
  })
  .add({
    targets: '.endbox',
    width: '35%',
    duration: 2000
  })
  .add({
    targets: '.endtext',
    opacity: '1',
    duration: 1000
  });

document.querySelector(".button").addEventListener("mouseup", function () {
  t1.play();
})

document.querySelector(".nextbutton").addEventListener("mouseup", function () {
  t2.play();
})

document.querySelector(".nextbutton2").addEventListener("mouseup", function () {
  t3.play();
})  
