(()=>{
    "use strict";
    let e;
    window.addEventListener("load", (()=>{
        document.fonts.ready.then((t=>{
            setTimeout((()=>{
                e = $(".owl-carousel.owl-carousel-reviews").owlCarousel({
                    loop: !0,
                    autoWidth: !0,
                    center: !0,
                    dots: !1,
                    onInitialize: function(e) {},
                    onDrag: function(e) {},
                    onDragged: function(e) {},
                    onTranslate: function(e) {},
                    onTranslated: function(e) {}
                })
            }
            ), 100)
        }
        ))
    }
    )),
    document.addEventListener("DOMContentLoaded", (function() {
        for (var e = document.getElementsByClassName("youtube-player"), t = 0; t < e.length; t++) {
            var n = e[t].dataset.id
              , a = document.createElement("div");
            a.setAttribute("data-id", n);
            var o = document.createElement("img");
            //o.src = "//i.ytimg.com/vi/ID/maxresdefault.jpg".replace("ID", n),
            o.src = "../img/maxresdefault.jpg"
            a.appendChild(o);
            var d = document.createElement("div");
            d.setAttribute("class", "play"),
            a.appendChild(d),
            a.onclick = function() {}
            ,
            e[t].appendChild(a)
        }
    }
    ))
}
)();
