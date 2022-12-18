(()=>{
    "use strict";
    const e = document.querySelectorAll(".get_price")
      , t = document.querySelector(".getPriceMain")
      , o = document.querySelector(".closeGetPrice");
    for (let n = 0; n < e.length; n++)
        e[n].addEventListener("click", (e=>{
            t && (e.preventDefault(),
            t.parentElement.classList.add("active"),
            document.body.style.overflow = "hidden")
        }
        )),
        t && (t.addEventListener("pointerdown", (e=>{
            e.stopPropagation()
        }
        )),
        t.addEventListener("touchstart", (e=>{
            e.stopPropagation()
        }
        )),
        t.parentElement.addEventListener("pointerdown", (e=>{
            e.target.classList.remove("active"),
            document.body.style.overflow = "auto"
        }
        )),
        t.parentElement.addEventListener("touchstart", (e=>{
            e.target.classList.remove("active"),
            document.body.style.overflow = "auto"
        }
        ))),
        o && t && (o.addEventListener("pointerdown", (e=>{
            t.parentElement.classList.remove("active"),
            document.body.style.overflow = "auto"
        }
        )),
        o.addEventListener("touchstart", (e=>{
            t.parentElement.classList.remove("active"),
            document.body.style.overflow = "auto"
        }
        )))
}
)();
