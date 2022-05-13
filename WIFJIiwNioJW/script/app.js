(()=>{
  let windowHeight = $(window).height();
  let chargePictureList = [];
  let chargePowerOffPicture =  null
  let chargePowerOnPicture = null
  let gsapPercentBase = 1;

  function refreshGsapPercentBase(windowWidth){
    if(windowWidth <= 1000) return
    let newGsapPercentBase = 1;
    if(windowWidth > 1000 && windowWidth < 1440 ) {
      newGsapPercentBase = 0.75
    }else if(windowWidth >= 1440 && windowWidth <= 1920) {
      newGsapPercentBase = 1
    }else if(windowWidth > 1920) {
      newGsapPercentBase = 1.33
    }
    if(newGsapPercentBase !== gsapPercentBase) {
      gsapPercentBase = newGsapPercentBase
    }
  }

  checkloadImage();
  checkLazyload();
  refreshGsapPercentBase($(window).width());

  $(window).resize(function(){
    windowHeight = $(window).height();
    let windowWidth = $(window).width();
    refreshGsapPercentBase(windowWidth);
  });

  window.requestAnimFrame = (function () {
    return  window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 6000 / 60);
            };
  })();

  function checkIn2Screen(obj){
    if(!obj.getBoundingClientRect) return false
    let rect = obj.getBoundingClientRect();
    return rect.top < windowHeight * 2
  }

  function checkLazyload(){
    $('.image-lazy').each(function(){
      let inScrren = checkIn2Screen(this);
      if(inScrren) $(this).removeClass('image-lazy');
    })
  }

  function checkloadImage(){
    let canvas = document.querySelector('.section-charger-phone-picture-canvas');
    let inScreen = checkIn2Screen(canvas);
    if(inScreen) {
      drawFirstImage();
    }
  }

  function drawFirstImage(){
    if(chargePowerOffPicture) return
    let image = new Image();
    image.src = IMAGE_HOST + 'images/phone-power-off_2x.png';
    let canvas = document.querySelector('.section-charger-phone-picture-canvas');
    let ctx = canvas.getContext('2d');
    image.onload = function(){
      if(!chargePowerOffPicture) {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        chargePowerOffPicture = image
      }
    }
    loadImages();
  }

  function loadImages(){
    for(let i = 0; i <= 60; i++) {
      let image = new Image();
      image.src = IMAGE_HOST + `images/charge_${ i }.png`;
      image.onload = setChargePictureList(i, image)
    }
    let phonePicture = new Image();
    phonePicture.src = IMAGE_HOST + `images/phone_2x.png`;
    phonePicture.onload = () => {
      chargePowerOnPicture = phonePicture
    }
  }

  function setChargePictureList(i, image){
    chargePictureList[i] = image
  }

  let drawPhoneCanvas = function(ctx, canvas, current = 0){
    if(current <= 60) {
      if(chargePowerOnPicture && chargePictureList[current]) {
        ctx.drawImage(chargePowerOnPicture, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(chargePictureList[current], -10, 10, canvas.width, canvas.height);
      }
      current++;
      requestAnimFrame(()=>{
        drawPhoneCanvas(ctx, canvas, current)
      })
    }
  }

  function playPhoneAnimation(){
    console.log('startPlay');
    let canvas = document.querySelector('.section-charger-phone-picture-canvas');
    let ctx = canvas.getContext('2d');
    drawPhoneCanvas(ctx, canvas)
  }

  function resetPhoneAnimation(){
    console.log('reset');
    if(chargePowerOffPicture) {
      let image = chargePowerOffPicture;
      let canvas = document.querySelector('.section-charger-phone-picture-canvas');
      let ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
  }

  let checkFadeInThrottleDeounce = throttleDeounce(()=>{
    checkLazyload();
    checkloadImage();
  }, 300);

  $(window).scroll(function(){
    checkFadeInThrottleDeounce();
  })

  function throttleDeounce(fn,delay){
    let valid = true
    let timeout = null;
    return function() {
      clearTimeout(timeout);
      if(!valid){
          return false 
      }
      valid = false
      setTimeout(() => {
          fn()
          valid = true;
      }, delay)

      timeout = setTimeout(() => {
        fn();
      }, delay)
    }
  }

  // title animation
  let titleGsapGroup = [];

  $('.gsap-title-animation').each(function(){
    let gsapInstance = gsap.from(this, {
      scrollTrigger: {
        trigger: this,
        start: "top+=0 bottom-=100",
        end: "top+=200 bottom-=100",
        scrub: 1,
      },
      y: 150,
      opacity: 0
    })
    titleGsapGroup.push(gsapInstance)
  });

  //cpu 

  let cpuDescGsap = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-cpu-detail-item1',
      start: "top+=0 bottom",
      end: "top+=200 bottom",
      toggleActions: "restart none none reset"
    }
  })
  cpuDescGsap.from('.section-cpu-detail-item1', {
    y: 100,
    opacity: 0,
    duration: .35
  })
  .from('.section-cpu-detail-item2', {
    y: 100,
    opacity: 0,
    duration: .35
  }, '-=0.2').from('.section-cpu-detail-item3', {
    y: 100,
    opacity: 0,
    duration: .35
  },'-=0.2').from('.section-cpu-detail-item4', {
    y: 100,
    opacity: 0,
    duration: .35
  },'-=0.2').from('.section-cpu-detail-item5', {
    y: 100,
    opacity: 0,
    duration: .35
  },'-=0.2').from('.section-cpu-detail-item6', {
    y: 100,
    opacity: 0,
    duration: .35
  },'-=0.35').from('.cpu-detail-speed-line-increase1', {
    width: 0,
    duration: 0.35
  }).from('.cpu-detail-speed-line-increase2', {
    width: 0,
    duration: 0.35
  },'-=0.35')

  // battery
  let gsapBatteryAnimation = gsap.from('.charger-battery-text-black', {
    scrollTrigger: {
      trigger: '.charger-battery-text-black',
      start: "top+=0 bottom-=100",
      end: "top+=200 bottom-=100",
      toggleActions: "restart none none reset"
    },
    width: 0,
    duration: 1
  })


  // charger
  let gsapChargerAnimation = gsap.from('.section-charger-phone-picture', {
    scrollTrigger: {
      trigger: '.section-charger-phone-picture',
      start: "top+=0 bottom",
      end: "top+=300 bottom",
      scrub: 1
    },
    y: 300
  });

  let gsapChargerCanvasAnimation = gsap.from('.section-charger-phone-picture-canvas', {
    scrollTrigger: {
      trigger: '.section-charger-phone-picture-canvas',
      start: "top-=300 center",
      onEnter: playPhoneAnimation,
      onLeaveBack: resetPhoneAnimation,
    }
  });

  let gsapFlashPictureAnimation = gsap.from('.section-flash-picture-img', {
    scrollTrigger: {
      trigger: '.section-flash-picture-img',
      start: "top+=0 center",
      end: "center center",
      scrub: true
    },
    opacity: 0.3
  })

  let gsapFlashBenefitAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: '.flash-benefit-item1',
      start: "top+=0 bottom",
      end: "top+=200 bottom",
      toggleActions: "restart none none reset"
    }
  })

  gsapFlashBenefitAnimation.from('.flash-benefit-item1', {
    y: 150,
    opacity: 0,
    duration: 0.35
  }).from('.flash-benefit-item2', {
    y: 150,
    opacity: 0,
    duration: 0.35
  }, '-=0.2').from('.flash-benefit-item3', {
    y: 150,
    opacity: 0,
    duration: 0.35
  }, '-=0.2').from('.flash-benefit-item4', {
    y: 150,
    opacity: 0,
    duration: 0.35
  }, '-=0.2').from('.flash-benefit-item5', {
    y: 150,
    opacity: 0,
    duration: 0.35
  }, '-=0.35').from('.flash-benefit-item6', {
    y: 150,
    opacity: 0,
    duration: 0.35
  }, '-=0.35')

  let gsapTuvAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-tuv-list',
      start: "top+=0 bottom",
      end: "top+=200 bottom",
      toggleActions: "restart none none reset"
    }
  })

  gsapTuvAnimation.from('.section-tuv-item:nth-child(1)', {
    y: 100,
    opacity: 0,
    duration: 0.35
  }).from('.section-tuv-item:nth-child(2)', {
    y: 100,
    opacity: 0,
    duration: 0.35
  }, '-=0.2').from('.section-tuv-item:nth-child(3)', {
    y: 100,
    opacity: 0,
    duration: 0.35
  }, '-=0.2').from('.section-tuv-item:nth-child(4)', {
    y: 100,
    opacity: 0,
    duration: 0.35
  }, '-=0.2').from('.section-tuv-item:nth-child(5)', {
    y: 100,
    opacity: 0,
    duration: 0.35
  }, '-=0.2')

  let kpl = gsap.timeline({
    scrollTrigger: {
      trigger: '.iqoolp-gaming',
      start: "top top",
      end: "bottom bottom",
      pin: '.gaming-sticky',
      scrub: true
    }
  })

  kpl.to('.gaming-front-svg-g', {
    scale: 20
  }).to('.gaming-front-svg-g', {
    opacity: 0
  }).to('.gaming-bg-picture-img', {
    scale: 1,
    duration: 2
  }).from('.section-gaming-subtitle', {
    y: 100,
    opacity: 0,
    duration: 1
  }, '-=1').to('.section-gaming-subtitle', {
    y: -100,
    opacity: 0
  }).from('.section-gaming-descs', {
    y: 100,
    opacity: 0
  })

  let colorPictureGsap = gsap.timeline({
    scrollTrigger: {
      trigger: '.iqoolp-color',
      start: "top top",
      end: "bottom bottom",
      pin: '.color-sticky',
      scrub: true
    }
  })

  colorPictureGsap.to('.color-black', {
    x: -270,
    duration: 1
  }).to('.color-blue', {
    x: 270,
    duration: 1
  }, '-=1').to('.iqoolp-color .section-subtitle', {
    opacity: 0,
    duration: 1
  }, '-=1').to('.section-color-descs', {
    opacity: 0,
    duration: 1
  }, '-=1').to('.color-black .color-item-desc', {
    opacity: 1,
    duration: 1
  }).to('.color-blue .color-item-desc', {
    opacity: 1,
    duration: 1
  },'-=1').to('.color-orange .color-item-desc', {
    opacity: 1,
    duration: 1
  },'-=1')


  let colorPhoneGsap = gsap.timeline({
    scrollTrigger: {
      trigger: '.iqoolp-color',
      start: "top bottom",
      end: "top top",
      scrub: true
    }
  })

  colorPhoneGsap.from('.color-lists', {
    y: 400,
    duration: 3
  })

  let materailGsap1 = gsap.from('.material-picture-img1', {
    scrollTrigger: {
      trigger: '.material-picture-img1',
      start: "top bottom-=200",
      end: "top top",
      scrub: true
    },
    x: 50,
    y: -50
  })

  let materailGsap2 = gsap.from('.material-picture-img2', {
    scrollTrigger: {
      trigger: '.material-picture-img2',
      start: "top bottom-=200",
      end: "top top",
      scrub: true
    },
    x: -50,
    y: 50
  })



  let sectionSystemGsap = gsap.timeline({
    scrollTrigger: {
      trigger: '.iqoolp-system',
      start: "top top",
      end: "bottom bottom",
      pin: '.system-sticky',
      scrub: true
    }
  })

  let sectionSystemGsap1 = gsap.from('.system-ui1',{
    scrollTrigger: {
      trigger: '.iqoolp-system',
      start: "top top",
      end: "bottom bottom",
      scrub: true
    },
    x: -1200
  })

  let sectionSystemGsap2 = gsap.from('.system-ui2',{
    scrollTrigger: {
      trigger: '.iqoolp-system',
      start: "top top",
      end: "bottom bottom",
      scrub: true
    },
    x: -1200
  })

  let sectionSystemGsap3 = gsap.from('.system-ui3',{
    scrollTrigger: {
      trigger: '.iqoolp-system',
      start: "top top",
      end: "bottom bottom",
      scrub: true
    },
    x: -1400
  })

  let sectionSystemGsap4 = gsap.from('.system-ui4',{
    scrollTrigger: {
      trigger: '.iqoolp-system',
      start: "top top",
      end: "bottom bottom",
      scrub: true
    },
    y: -900
  })

  let sectionSystemGsap5 = gsap.from('.system-ui5',{
    scrollTrigger: {
      trigger: '.iqoolp-system',
      start: "top top",
      end: "bottom bottom",
      scrub: true
    },
    y: -900
  })

  let sectionSystemGsap11 = gsap.from('.system-ui11',{
    scrollTrigger: {
      trigger: '.iqoolp-system',
      start: "top top",
      end: "bottom bottom",
      scrub: true
    },
    y: -1000
  })

  let sectionSystemGsap7 = gsap.from('.system-ui7',{
    scrollTrigger: {
      trigger: '.iqoolp-system',
      start: "top top",
      end: "bottom bottom",
      scrub: true
    },
    y: 900
  })

  let sectionSystemGsap8 = gsap.from('.system-ui8',{
    scrollTrigger: {
      trigger: '.iqoolp-system',
      start: "top top",
      end: "bottom bottom",
      scrub: true
    },
    y: 900
  })

  let sectionSystemGsap9 = gsap.from('.system-ui9',{
    scrollTrigger: {
      trigger: '.iqoolp-system',
      start: "top top",
      end: "bottom bottom",
      scrub: true
    },
    y: 1100
  })

  let sectionSystemGsap6 = gsap.from('.system-ui6',{
    scrollTrigger: {
      trigger: '.iqoolp-system',
      start: "top top",
      end: "bottom bottom",
      scrub: true
    },
    x: 900
  })

  let sectionSystemGsap10 = gsap.from('.system-ui10',{
    scrollTrigger: {
      trigger: '.iqoolp-system',
      start: "top top",
      end: "bottom bottom",
      scrub: true
    },
    x: 900
  })

  let sectionSystemGsap12 = gsap.from('.system-ui12',{
    scrollTrigger: {
      trigger: '.iqoolp-system',
      start: "top top",
      end: "bottom bottom",
      scrub: true
    },
    x: 900
  })

  sectionSystemGsap.from('.section-system-descs',{
    opacity: 0,
    y: 300
  })

  let sectionNfcGsap = gsap.timeline({
    scrollTrigger: {
      trigger: '.iqoolp-nfc',
      start: "top top",
      end: "bottom bottom",
      pin: '.nfc-sticky',
      scrub: true
    }
  })


  gsap.from('.nfc-text-boxs', {
    scrollTrigger: {
      trigger: '.nfc-text-boxs',
      start: "top+=0 bottom",
      end: "top+=200 bottom",
      scrub: 1,
    },
    y: 100,
    opacity: 0
  })

  gsap.to('.nfc-progress-slide', {
    scrollTrigger: {
      trigger: '.iqoolp-nfc',
      start: "top top",
      end: "bottom bottom",
      scrub: true
    },
    x: '300%'
  })

  sectionNfcGsap.to('.nfc-text-item1', {
    opacity: 0,
    y: -100
  }).from('.nfc-text-item2', {
    opacity: 0,
    y: 100
  }).to('.nfc-text-item2', {
    opacity: 0,
    y: -100
  }).from('.nfc-text-item3', {
    opacity: 0,
    y: 100
  }).to('.nfc-text-item3', {
    opacity: 0,
    y: -100
  }).from('.nfc-text-item4', {
    opacity: 0,
    y: 100
  })

})()