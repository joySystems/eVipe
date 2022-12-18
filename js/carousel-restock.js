(()=>{
    "use strict";
    let e;
    function t(e) {
        $(".owl-carousel.owl-carousel-lines").trigger("prev.owl.carousel", [600])
    }
    function o(e) {
        $(".owl-carousel.owl-carousel-lines").trigger("next.owl.carousel", [600])
    }
    function l(e) {
        window.location.href = e.currentTarget.firstElementChild.getAttribute("customref")
    }
    $(".custom-next-btn").click((function(e) {
        $(".owl-carousel.owl-carousel-lines").trigger("next.owl.carousel", [600])
    }
    )),
    $(".custom-prev-btn").click((function(e) {
        $(".owl-carousel.owl-carousel-lines").trigger("prev.owl.carousel", [600])
    }
    )),
    window.addEventListener("load", (()=>{
        document.fonts.ready.then((r=>{
            setTimeout((()=>{
                e = $(".owl-carousel.owl-carousel-lines").owlCarousel({
                    loop: !0,
                    nav: !1,
                    dots: !1,
                    center: !0,
                    autoplay: !0,
                    autoplayTimeout: 4e3,
                    autoplayHoverPause: !1,
                    autoplaySpeed: 1e3,
                    slideTransition: "ease",
                    pullDrag: !1,
                    smartSpeed: 300,
                    mouseDrag: !1,
                    touchDrag: !0,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1e3: {
                            items: 3
                        }
                    },
                    onInitialize: function(e) {
                        document.querySelector(".slider-block-nav").classList.add("active"),
                        window.innerWidth > 599 ? setTimeout((()=>{
                            const e = document.querySelectorAll(".owl-carousel-lines .owl-item.active");
                            e[0].addEventListener("click", t),
                            e[1].addEventListener("click", l),
                            e[2].addEventListener("click", o)
                        }
                        ), 100) : setTimeout((()=>{
                            document.querySelector(".owl-carousel-lines .owl-item.active.center").addEventListener("click", l)
                        }
                        ), 100)
                    },
                    onDrag: function(e) {
                        const r = document.querySelectorAll(".owl-carousel-lines .owl-item");
                        for (let e = 0; e < r.length; e++)
                            r[e].removeEventListener("click", t),
                            r[e].removeEventListener("click", o),
                            r[e].removeEventListener("click", l);
                        $(".owl-carousel.owl-carousel-lines").trigger("stop.owl.autoplay"),
                        e.target.firstElementChild.firstElementChild.classList.add("notActive"),
                        document.querySelector(".twoBlockNav").classList.remove("active")
                    },
                    onDragged: function(e) {
                        const r = document.querySelectorAll(".owl-carousel-lines .owl-item");
                        for (let e = 0; e < r.length; e++)
                            r[e].removeEventListener("click", t),
                            r[e].removeEventListener("click", o),
                            r[e].removeEventListener("click", l);
                        setTimeout((()=>{
                            e.target.firstElementChild.firstElementChild.classList.remove("notActive")
                        }
                        ), 500)
                    },
                    onTranslate: function(e) {
                        const r = document.querySelectorAll(".owl-carousel-lines .owl-item");
                        for (let e = 0; e < r.length; e++)
                            r[e].removeEventListener("click", t),
                            r[e].removeEventListener("click", o),
                            r[e].removeEventListener("click", l);
                        $(".owl-carousel").trigger("stop.owl.autoplay"),
                        document.querySelector(".slider-block-nav").classList.remove("active")
                    },
                    onTranslated: function(e) {
                        if (window.innerWidth > 599) {
                            const e = document.querySelectorAll(".owl-carousel-lines .owl-item.active");
                            e[0].addEventListener("click", t),
                            e[1].addEventListener("click", l),
                            e[2].addEventListener("click", o)
                        } else
                            document.querySelector(".owl-carousel-lines .owl-item.active.center").addEventListener("click", l);
                        document.querySelector(".slider-block-nav .active-item-name").href = document.querySelector(".owl-carousel-lines .owl-item.center").firstElementChild.getAttribute("customref"),
                        document.querySelector(".slider-block-nav .active-item-name").innerHTML = document.querySelector(".owl-carousel-lines .owl-item.center").firstElementChild.getAttribute("linename"),
                        document.querySelector(".slider-block-nav").classList.add("active"),
                        $(".owl-carousel.owl-carousel-lines").trigger("play.owl.autoplay")
                    }
                }),
                document.querySelector(".owl-carousel.owl-carousel-lines").addEventListener("contextmenu", (e=>(e.preventDefault(),
                e.stopPropagation(),
                !1))),
                document.querySelector(".slider-section").addEventListener("mouseover", (e=>{
                    $(".owl-carousel.owl-carousel-lines").trigger("stop.owl.autoplay")
                }
                )),
                document.querySelector(".slider-section").addEventListener("mouseout", (e=>{
                    $(".owl-carousel.owl-carousel-lines").trigger("play.owl.autoplay")
                }
                ))
            }
            ), 100)
        }
        ))
    }
    ))
}
)();