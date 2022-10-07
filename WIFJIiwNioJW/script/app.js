"use strict";
!(function () {
  var i = IMAGE_HOST || "./";
  $(".series-video-button").click(function () {
    var e;
    $("body").height($("body").height()),
      $("html").addClass("limit-fly"),
      (e = i + "images/X60-蔡司品牌合作宣传片.mp4"),
      $("body").append(
        '\n      <div class="full-screen-popup">\n        <div class="full-screen-popup-mask"></div>\n        <div class="full-screen-popup-content">\n          <video src="'.concat(
          e,
          '" controls autoplay></video>\n        </div>\n        <div class="full-screen-popup-cancel"></div>\n      </div>\n    '
        )
      ),
      $(".full-screen-popup-cancel").click(function () {
        $(".full-screen-popup").remove(),
          $("body").height(""),
          $("html").removeClass("limit-fly");
      });
  }),
    $(".series-col-pic-1 .video-satus-button").click(function () {
      var e = $(".series-col-pic-1 video").get(0);
      $(this).hasClass("play")
        ? ($(this).removeClass("play"), e.play())
        : ($(this).addClass("play"), e.pause());
    });
  var c = 1,
    s = 5,
    t = !1,
    r = [0, 0, 0, 0, 0],
    a = [6, 6, 6, 6, 6];
  function o(e) {
    (t = !0),
      setTimeout(function () {
        t = !1;
      }, 500),
      0 === c
        ? $(".vivo-series-section-4 .cameraman-switch-arrow-top").addClass(
            "disabled"
          )
        : $(".vivo-series-section-4 .cameraman-switch-arrow-top").removeClass(
            "disabled"
          ),
      c === s - 1
        ? $(".vivo-series-section-4 .cameraman-switch-arrow-bottom").addClass(
            "disabled"
          )
        : $(
            ".vivo-series-section-4 .cameraman-switch-arrow-bottom"
          ).removeClass("disabled"),
      $(".vivo-series-section-4 .cameraman-switch-people").removeClass(
        "active"
      ),
      $(".vivo-series-section-4 .cameraman-switch-people")
        .eq(e)
        .addClass("active"),
      $(".vivo-series-section-4 .cameraman-picture-box").removeClass("active"),
      $(".vivo-series-section-4 .cameraman-picture-box")
        .eq(e)
        .addClass("active"),
      v(),
      l();
  }
  $(".vivo-series-section-4 .cameraman-switch-arrow-top").click(function () {
    t || (0 !== c && o(--c));
  }),
    $(".vivo-series-section-4 .cameraman-switch-people").click(function () {
      var e;
      t ||
        ((e = $(this).attr("data-index")),
        (c = Number(e)) === s - 1
          ? $(".vivo-series-section-4 .cameraman-switch-arrow-bottom").addClass(
              "disabled"
            )
          : $(
              ".vivo-series-section-4 .cameraman-switch-arrow-bottom"
            ).removeClass("disabled"),
        o(e));
    }),
    $(".vivo-series-section-4 .cameraman-switch-arrow-bottom").click(
      function () {
        t || (c !== s - 1 && o(++c));
      }
    );
  var n = !1;
  function e() {
    var e = r[c],
      i = $(".vivo-series-section-4 .cameraman-picture-box")
        .eq(c)
        .find(".cameraman-pics");
    ++e >= i.length - 1 && ((e = i.length - 1), $(this).addClass("disabled")),
      (r[c] = e),
      v(),
      l(),
      i.eq(e).addClass("active");
  }
  function v() {
    var e = r[c],
      i = a[c];
    0 === e
      ? $(".vivo-series-section-4 .section-arrow-left").addClass("disabled")
      : $(".vivo-series-section-4 .section-arrow-left").removeClass("disabled"),
      e === i - 1
        ? $(".vivo-series-section-4 .section-arrow-right").addClass("disabled")
        : $(".vivo-series-section-4 .section-arrow-right").removeClass(
            "disabled"
          );
  }
  function l() {
    var e = r[c] + 1,
      i = a[c],
      s = 1 === e.toString().length ? "0" + e.toString() : e.toString(),
      t = 1 === i.toString().length ? "0" + i.toString() : i.toString(),
      o = $(".vivo-series-section-4 .section-scroll-progress").width();
    $(".vivo-series-section-4 .section-scroll-progress .progress-span").width(
      (o / i) * e
    ),
      $(".vivo-series-section-4 .section-scroll-progress .progress-text").html(
        "".concat(s, "<span>/").concat(t, "</span>")
      );
  }
  setInterval(function () {
    n && e();
  }, 5e3),
    $(".vivo-series-section-4 .section-arrow-left").click(function () {
      (n = !1),
        setTimeout(function () {
          n = !0;
        }, 5e3);
      var e = r[c],
        i = $(".vivo-series-section-4 .cameraman-picture-box")
          .eq(c)
          .find(".cameraman-pics");
      --e <= 0 && ((e = 0), $(this).addClass("disabled")),
        (r[c] = e),
        v(),
        l(),
        i.eq(e + 1).removeClass("active");
    }),
    $(".vivo-series-section-4 .section-arrow-right").click(function () {
      (n = !1),
        setTimeout(function () {
          n = !0;
        }, 5e3),
        e();
    }),
    $(".offcial-switcher-title.children").each(function () {
      var e = this;
      $(this)
        .find("h3")
        .click(function () {
          $(e).toggleClass("active");
        });
    });
  var d = 0,
    p = [0, 0, 0, 0, 0, 0],
    m = [6, 4, 2, 2, 2, 2],
    u =
      ($(".vivo-series-section-5 .offical-items").click(function () {
        var e = $(this).attr("data-index");
        (d = Number(e)),
          $(".vivo-series-section-5 .offical-items").removeClass("active"),
          $(this).addClass("active"),
          $(".official-pic-picture-box").removeClass("active"),
          $(".official-pic-picture-box").eq(e).addClass("active"),
          y(),
          g();
      }),
      !1);
  function f() {
    var e = p[d],
      i = $(".vivo-series-section-5 .official-pic-picture-box")
        .eq(d)
        .find(".official-pic-pics");
    ++e >= i.length - 1 && ((e = i.length - 1), $(this).addClass("disabled")),
      (p[d] = e),
      y(),
      g(),
      i.eq(e).addClass("active");
  }
  function y() {
    var e = p[d],
      i = m[d];
    0 === e
      ? $(".vivo-series-section-5 .section-arrow-left").addClass("disabled")
      : $(".vivo-series-section-5 .section-arrow-left").removeClass("disabled"),
      e === i - 1
        ? $(".vivo-series-section-5 .section-arrow-right").addClass("disabled")
        : $(".vivo-series-section-5 .section-arrow-right").removeClass(
            "disabled"
          );
  }
  function g() {
    var e = p[d] + 1,
      i = m[d],
      s = 1 === e.toString().length ? "0" + e.toString() : e.toString(),
      t = 1 === i.toString().length ? "0" + i.toString() : i.toString(),
      o = $(".vivo-series-section-5 .section-scroll-progress").width();
    $(".vivo-series-section-5 .section-scroll-progress .progress-span").width(
      (o / i) * e
    ),
      $(".vivo-series-section-5 .section-scroll-progress .progress-text").html(
        "".concat(s, "<span>/").concat(t, "</span>")
      );
  }
  function h(e) {
    var i =
        2200 <= $(window).width()
          ? 80
          : 1700 <= $(window).width()
          ? 60
          : 1300 <= $(window).width()
          ? 45
          : 37,
      s = $(".vivo-series-section-6 .section-scroll-progress .progress-span"),
      t = $(".vivo-series-section-6 .section-scroll-progress .progress-text");
    $(".vivo-series-section-6 .sticky-content").removeClass("active"),
      $(".vivo-series-section-6 .sticky-content")
        .eq(e - 1)
        .addClass("active"),
      s.height(e * i),
      t.html("0".concat(e, "<span>/0").concat(4, "</span>"));
  }
  function w(e) {
    $(".camera-head-list>div").removeClass("active"),
      $(".camera-head-list>div")
        .eq(e - 1)
        .addClass("active");
  }
  function b() {
    var e = [
      ".vivo-series-sticky-box",
      ".series-section-title",
      ".series-section-desc-text",
      ".section-picture-container",
      ".progress-span",
      ".series-col-text-1",
      ".series-col-text-2",
      ".series-col-pic-2",
      ".series-col-text-2",
      ".series-col-text-3",
      ".series-col-pic-3",
      ".camera-coating-pic",
      ".camera-coating-text",
      ".sticky-camera-1",
      ".camera-head-pics",
      ".sticky-camera-2",
      ".sticky-camera-3",
      ".sticky-camera-4",
      ".camera-movie-video",
      ".camera-nature-pic",
      ".howtobuy-content",
      ".cameraman-picture-switcher",
      ".official-pic-picture-switcher",
    ].join(",");
    gsap.set(e, { clearProps: "all" });
  }
  function x() {
    var e = gsap.timeline({
        scrollTrigger: {
          trigger: ".vivo-series-section-2 .vivo-series-sticky-box",
          pin: ".vivo-series-section-2 .vivo-series-sticky-box",
          scrub: "1",
          start: "top top",
          end: "+=5000",
        },
      }),
      i =
        (e.to(".vivo-series-section-2 .series-section-title", {
          y: -100,
          opacity: 0,
          duration: 1,
        }),
        e.to(
          ".vivo-series-section-2 .series-section-desc-text",
          { y: -100, opacity: 0, duration: 1 },
          "-=1"
        ),
        2200 <= $(window).width()
          ? -832
          : 1700 <= $(window).width()
          ? -624
          : 1300 <= $(window).width()
          ? -465
          : -387),
      i =
        (e.to(".vivo-series-section-2 .section-picture-container", {
          x: i,
          duration: 5,
        }),
        2200 <= $(window).width()
          ? 240
          : 1700 <= $(window).width()
          ? 180
          : 1300 <= $(window).width()
          ? 135
          : 113),
      e =
        (e.to(
          ".vivo-series-section-2 .progress-span",
          {
            x: i,
            onUpdate: function () {
              var e = Math.floor(this.ratio / 0.25) + 1;
              4 < e && (e = 4),
                $(".vivo-series-section-2 .progress-text").html(
                  "0".concat(e, "<span>/04</span>")
                );
            },
            duration: 5,
          },
          "-=5"
        ),
        gsap.timeline({
          scrollTrigger: {
            trigger: ".vivo-series-section-3 .vivo-series-sticky-box",
            pin: ".vivo-series-section-3 .vivo-series-sticky-box",
            scrub: "1",
            start: "top top-=100",
            end: "+=8000",
          },
        })),
      i =
        (e.from(".vivo-series-section-3 .series-col-text-1", {
          y: 100,
          opacity: 0,
          duration: 1,
        }),
        e.to(".vivo-series-section-3 .series-col-text-1", {
          y: 0,
          opacity: 1,
          duration: 2,
        }),
        e.to(".vivo-series-section-3 .series-col-text-1", {
          y: -100,
          opacity: 0,
          duration: 1,
        }),
        e.from(".vivo-series-section-3 .series-col-text-2", {
          y: 100,
          opacity: 0,
          duration: 1,
        }),
        e.to(
          ".vivo-series-section-3 .series-col-pic-2",
          { y: "-100%", duration: 2 },
          "-=2"
        ),
        e.to(".vivo-series-section-3 .series-col-text-2", {
          y: 0,
          opacity: 1,
          duration: 2,
        }),
        e.to(".vivo-series-section-3 .series-col-text-2", {
          y: -100,
          opacity: 0,
          duration: 1,
        }),
        e.from(".vivo-series-section-3 .series-col-text-3", {
          y: 100,
          opacity: 0,
          duration: 1,
        }),
        e.to(
          ".vivo-series-section-3 .series-col-pic-3",
          { y: "-100%", duration: 2 },
          "-=2"
        ),
        e.to(".vivo-series-section-3 .series-col-text-3", {
          y: 0,
          opacity: 1,
          duration: 2,
        }),
        gsap.to(".cameraman-picture-switcher", {
          scrollTrigger: {
            trigger: ".cameraman-picture-switcher",
            start: "top bottom",
            scrub: 1,
            end: "bottom top",
          },
          onUpdate: function () {
            n = n || !0;
          },
          onComplete: function () {
            setTimeout(function () {
              n = !1;
            }, 500);
          },
          onReverseComplete: function () {
            setTimeout(function () {
              n = !1;
            }, 500);
          },
        }),
        gsap.to(".official-pic-picture-switcher", {
          scrollTrigger: {
            trigger: ".official-pic-picture-switcher",
            start: "top bottom",
            scrub: 1,
            end: "bottom top",
          },
          onUpdate: function () {
            u = u || !0;
          },
          onComplete: function () {
            setTimeout(function () {
              u = !1;
            }, 500);
          },
          onReverseComplete: function () {
            setTimeout(function () {
              u = !1;
            }, 500);
          },
        }),
        gsap.from(
          ".vivo-series-section-6 .sticky-camera-1 .camera-coating-pic",
          {
            scrollTrigger: {
              trigger: ".vivo-series-section-6 .vivo-series-sticky-box",
              scrub: "1",
              start: "top top+=400",
              end: "+=400",
            },
            x: -400,
            opacity: 0,
          }
        ),
        gsap.from(
          ".vivo-series-section-6 .sticky-camera-1 .camera-coating-text",
          {
            scrollTrigger: {
              trigger: ".vivo-series-section-6 .vivo-series-sticky-box",
              scrub: "1",
              start: "top top+=400",
              end: "+=400",
            },
            x: 400,
            opacity: 0,
          }
        ),
        gsap.timeline({
          scrollTrigger: {
            trigger: ".vivo-series-section-6 .vivo-series-sticky-box",
            pin: ".vivo-series-section-6 .vivo-series-sticky-box",
            scrub: "1",
            start: "top top",
            end: "+=16000",
          },
        }));
    i.to(".vivo-series-section-6 .sticky-camera-1", {
      y: 0,
      opacity: 1,
      duration: 1,
    }),
      i.to(".vivo-series-section-6 .sticky-camera-1", {
        y: -400,
        opacity: 0,
        duration: 1,
      }),
      i.to(".vivo-series-section-6 .sticky-camera-1", {
        y: -400,
        opacity: 0,
        duration: 1,
        onComplete: function () {
          h(2);
        },
        onReverseComplete: function () {
          h(1);
        },
      }),
      i.from(".vivo-series-section-6 .sticky-camera-2 .camera-coating-text", {
        x: -400,
        opacity: 0,
        duration: 1,
      }),
      i.from(
        ".vivo-series-section-6 .sticky-camera-2 .camera-head-pics",
        { x: 400, opacity: 0, duration: 1 },
        "-=1"
      ),
      i.to(".vivo-series-section-6 .sticky-camera-2", {
        y: 0,
        opacity: 1,
        duration: 1,
      }),
      i.to(".vivo-series-section-6 .sticky-camera-2 .camera-head-pic1", {
        y: "-200%",
        opacity: 1,
        duration: 1,
        onStart: function () {
          w(2);
        },
        onReverseComplete: function () {
          w(1);
        },
      }),
      i.to(
        ".vivo-series-section-6 .sticky-camera-2 .camera-head-pic2",
        { scale: 1, duration: 1 },
        "-=1"
      ),
      i.to(
        ".vivo-series-section-6 .sticky-camera-2 .camera-head-pic3",
        { scale: 0.965, duration: 1 },
        "-=1"
      ),
      i.to(
        ".vivo-series-section-6 .sticky-camera-2 .camera-head-pic4",
        { scale: 0.93, duration: 1 },
        "-=1"
      ),
      i.to(".vivo-series-section-6 .sticky-camera-2 .camera-head-pic2", {
        y: "-200%",
        opacity: 1,
        duration: 1,
        onStart: function () {
          w(3);
        },
        onReverseComplete: function () {
          w(2);
        },
      }),
      i.to(
        ".vivo-series-section-6 .sticky-camera-2 .camera-head-pic3",
        { scale: 1, duration: 1 },
        "-=1"
      ),
      i.to(
        ".vivo-series-section-6 .sticky-camera-2 .camera-head-pic4",
        { scale: 0.965, duration: 1 },
        "-=1"
      ),
      i.to(".vivo-series-section-6 .sticky-camera-2 .camera-head-pic3", {
        y: "-200%",
        opacity: 1,
        duration: 1,
        onStart: function () {
          w(4);
        },
        onReverseComplete: function () {
          w(3);
        },
      }),
      i.to(
        ".vivo-series-section-6 .sticky-camera-2 .camera-head-pic4",
        { scale: 1, duration: 1 },
        "-=1"
      ),
      i.to(".vivo-series-section-6 .sticky-camera-2", {
        y: -400,
        opacity: 0,
        onComplete: function () {
          h(3);
        },
        onReverseComplete: function () {
          h(2);
        },
      }),
      i.from(".vivo-series-section-6 .sticky-camera-3 .camera-coating-text", {
        x: -400,
        opacity: 0,
        duration: 1,
      }),
      i.from(
        ".vivo-series-section-6 .sticky-camera-3 .camera-movie-video",
        { x: 400, opacity: 0, duration: 1 },
        "-=1"
      ),
      i.to(".vivo-series-section-6 .sticky-camera-3", {
        y: 0,
        opacity: 1,
        duration: 1,
      }),
      i.to(".vivo-series-section-6 .sticky-camera-3", {
        y: -400,
        opacity: 0,
        onComplete: function () {
          h(4);
        },
        onReverseComplete: function () {
          h(3);
        },
      }),
      i.from(".vivo-series-section-6 .sticky-camera-4 .camera-nature-pic", {
        x: -400,
        opacity: 0,
        duration: 1,
      }),
      i.from(
        ".vivo-series-section-6 .sticky-camera-4 .camera-coating-text",
        { x: 400, opacity: 0, duration: 1 },
        "-=1"
      ),
      i.to(".vivo-series-section-6 .sticky-camera-4", {
        y: 0,
        opacity: 1,
        duration: 1,
      }),
      gsap.from(".vivo-series-section-7 .howtobuy-content", {
        scrollTrigger: {
          trigger: ".vivo-series-section-7 .howtobuy-content",
          scrub: "1",
          start: "top bottom",
          end: "+=300",
        },
        y: 200,
        opacity: 0,
      });
  }
  setInterval(function () {
    u && f();
  }, 5e3),
    $(".vivo-series-section-5 .section-arrow-left").click(function () {
      (u = !1),
        setTimeout(function () {
          u = !0;
        }, 5e3);
      var e = p[d],
        i = $(".vivo-series-section-5 .official-pic-picture-box")
          .eq(d)
          .find(".official-pic-pics");
      --e <= 0 && ((e = 0), $(this).addClass("disabled")),
        (p[d] = e),
        y(),
        g(),
        i.eq(e + 1).removeClass("active");
    }),
    $(".vivo-series-section-5 .section-arrow-right").click(function () {
      (u = !1),
        setTimeout(function () {
          u = !0;
        }, 5e3),
        f();
    }),
    $(".vivo-series-section-6 .video-satus-button").click(function () {
      var e = $(".vivo-series-section-6 video").get(0);
      $(this).hasClass("play")
        ? ($(this).removeClass("play"), e.play())
        : ($(this).addClass("play"), e.pause());
    }),
    ScrollTrigger.matchMedia({
      "(min-width: 2200px)": function () {
        b(), x();
      },
      "(min-width: 1700px)": function () {
        b(), x();
      },
      "(min-width: 1300px)": function () {
        b(), x();
      },
      "(min-width: 1000px)": function () {
        b(), x();
      },
    });
})();
