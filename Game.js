var one  = document.getElementById("one")
var two  = document.getElementById("two")
function getParameter(x) {
          params = window.location.href.split("?")[1].split("&");
          for (i = 0; i < params.length; i++) {
                    // ["id","example"]
                    e = params[i].split("=");
                    if (e[0] == x) {
                              return e[1];
                    }
          }
}
var id = getParameter("id")

const data = {
      "l1":{
          "q1":"have a rewind button in your life",
          "q2":"have a pause button in your life",
          "a1":"55%",
          "a2":"45%",
      },
      "l2":{
          "q1":"be rich",
          "q2":"be famous",
          "a1":"65%",
          "a2":"35%",
      },
      "l3":{
          "q1":"eat spanish food",
          "q2":"eat french food",
          "a1":"25%",
          "a2":"75%",
      },
      "l4":{
          "q1":"have 100,000$",
          "q2":"have 1m$ in amzon gift card",
          "a1":"46%",
          "a2":"54%",
      },
      "l5":{
          "q1":"cat",
          "q2":"pet",
          "a1":"35%",
          "a2":"65%",
      },
      "l6":{
          "q1":"waffles",
          "q2":"pancake",
          "a1":"49%",
          "a2":"51%",
      },
      "l7":{
          "q1":"smoothies",
          "q2":"milkshake",
          "a1":"27%",
          "a2":"73%",
      },
      "l8":{
          "q1":"kit kat",
          "q2":"snickers",
          "a1":"65%",
          "a2":"35%",
      },
      "l9":{
          "q1":"have a billion dollars",
          "q2":"have a avility to fly",
          "a1":"60%",
          "a2":"40%",
      },
      "l10":{
          "q1":"stop all crime",
          "q2":"stop all polution",
          "a1":"47%",
          "a2":"53%",
      },
      "l11":{
          "q1":"fall",
          "q2":"spring",
          "a1":"33%",
          "a2":"67%",
      },
}
var k = data[id]

// document.getElementById("").innerText = 

// levels :

if (id === "351cc2f7-2049-42c9-B34e-79b62790062c") {
          console.log("your id is : " + id)
          one.innerHTML = data.l1.q1
          two.innerHTML = data.l1.q2
          one.addEventListener("click",()=>{
                    one.innerHTML = data.l1.a1
                    two.innerHTML = data.l1.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=190bd5d4-22c4-4cc2-878d-443214186a31"
                    },3000)   
          })
          two.addEventListener("click",()=>{
                    one.innerHTML = data.l1.a1
                    two.innerHTML = data.l1.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=190bd5d4-22c4-4cc2-878d-443214186a31"
                    },3000)
          })
} //l1
if (id === "190bd5d4-22c4-4cc2-878d-443214186a31") {
          console.log("your id is : " + id)
          one.innerHTML = data.l2.q1
          two.innerHTML = data.l2.q2
          one.addEventListener("click",()=>{
                    one.innerHTML = data.l2.a1
                    two.innerHTML = data.l2.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=11e330d8-383d-47c5-Ae6c-E4df027e6d81"
                    },3000)   
          })
          two.addEventListener("click",()=>{
                    one.innerHTML = data.l2.a1
                    two.innerHTML = data.l2.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=11e330d8-383d-47c5-Ae6c-E4df027e6d81"
                    },3000)
          })
} //l2
if (id === "11e330d8-383d-47c5-Ae6c-E4df027e6d81") {
          console.log("your id is : " + id)
          one.innerHTML = data.l3.q1
          two.innerHTML = data.l3.q2
          one.addEventListener("click",()=>{
                    one.innerHTML = data.l3.a1
                    two.innerHTML = data.l3.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=E5b802cf-D6f7-4d68-Af0f-Ae4e6beebe75"
                    },3000)   
          })
          two.addEventListener("click",()=>{
                    one.innerHTML = data.l3.a1
                    two.innerHTML = data.l3.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=E5b802cf-D6f7-4d68-Af0f-Ae4e6beebe75"
                    },3000)
          })
} //l3
if (id === "E5b802cf-D6f7-4d68-Af0f-Ae4e6beebe75") {
          console.log("your id is : " + id)
          one.innerHTML = data.l4.q1
          two.innerHTML = data.l4.q2
          one.addEventListener("click",()=>{
                    one.innerHTML = data.l4.a1
                    two.innerHTML = data.l4.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=18d0184e-Ed75-4fe3-A6d1-985eb13a0637"
                    },3000)   
          })
          two.addEventListener("click",()=>{
                    one.innerHTML = data.l4.a1
                    two.innerHTML = data.l4.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=18d0184e-Ed75-4fe3-A6d1-985eb13a0637"
                    },3000)
          })
} //l4
if (id === "18d0184e-Ed75-4fe3-A6d1-985eb13a0637") {
          console.log("your id is : " + id)
          one.innerHTML = data.l4.q1
          two.innerHTML = data.l4.q2
          one.addEventListener("click",()=>{
                    one.innerHTML = data.l4.a1
                    two.innerHTML = data.l4.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=B0135a7c-D7bf-44b5-9340-65c751bb6f4b"
                    },3000)   
          })
          two.addEventListener("click",()=>{
                    one.innerHTML = data.l4.a1
                    two.innerHTML = data.l4.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=B0135a7c-D7bf-44b5-9340-65c751bb6f4b"
                    },3000)
          })
} //l5
if (id === "B0135a7c-D7bf-44b5-9340-65c751bb6f4b") {
          console.log("your id is : " + id)
          one.innerHTML = data.l5.q1
          two.innerHTML = data.l5.q2
          one.addEventListener("click",()=>{
                    one.innerHTML = data.l5.a1
                    two.innerHTML = data.l5.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=3de00b2b-6c7d-45ef-91f6-1cfbef37f846"
                    },3000)   
          })
          two.addEventListener("click",()=>{
                    one.innerHTML = data.l5.a1
                    two.innerHTML = data.l5.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=3de00b2b-6c7d-45ef-91f6-1cfbef37f846"
                    },3000)
          })
} //l6
if (id === "3de00b2b-6c7d-45ef-91f6-1cfbef37f846") {
          console.log("your id is : " + id)
          one.innerHTML = data.l6.q1
          two.innerHTML = data.l6.q2
          one.addEventListener("click",()=>{
                    one.innerHTML = data.l6.a1
                    two.innerHTML = data.l6.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=4a65ccdc-206d-4e5c-A2e2-798b91e143cf"
                    },3000)   
          })
          two.addEventListener("click",()=>{
                    one.innerHTML = data.l6.a1
                    two.innerHTML = data.l6.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=4a65ccdc-206d-4e5c-A2e2-798b91e143cf"
                    },3000)
          })
} //l7
if (id === "4a65ccdc-206d-4e5c-A2e2-798b91e143cf") {
          console.log("your id is : " + id)
          one.innerHTML = data.l7.q1
          two.innerHTML = data.l7.q2
          one.addEventListener("click",()=>{
                    one.innerHTML = data.l7.a1
                    two.innerHTML = data.l7.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=77498d85-E9a0-4dae-Bf8a-978b7dd01c3c"
                    },3000)   
          })
          two.addEventListener("click",()=>{
                    one.innerHTML = data.l7.a1
                    two.innerHTML = data.l7.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=77498d85-E9a0-4dae-Bf8a-978b7dd01c3c"
                    },3000)
          })
} //l8
if (id === "77498d85-E9a0-4dae-Bf8a-978b7dd01c3c") {
          console.log("your id is : " + id)
          one.innerHTML = data.l8.q1
          two.innerHTML = data.l8.q2
          one.addEventListener("click",()=>{
                    one.innerHTML = data.l8.a1
                    two.innerHTML = data.l8.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=75db9f42-10fa-423f-B379-9a95f319d9fa"
                    },3000)   
          })
          two.addEventListener("click",()=>{
                    one.innerHTML = data.l8.a1
                    two.innerHTML = data.l8.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=75db9f42-10fa-423f-B379-9a95f319d9fa"
                    },3000)
          })
} //l9
if (id === "75db9f42-10fa-423f-B379-9a95f319d9fa") {
          console.log("your id is : " + id)
          one.innerHTML = data.l9.q1
          two.innerHTML = data.l9.q2
          one.addEventListener("click",()=>{
                    one.innerHTML = data.l9.a1
                    two.innerHTML = data.l9.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=6eff36fb-4cfc-49c8-A02d-0c1b282a99ab"
                    },3000)   
          })
          two.addEventListener("click",()=>{
                    one.innerHTML = data.l9.a1
                    two.innerHTML = data.l9.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=6eff36fb-4cfc-49c8-A02d-0c1b282a99ab"
                    },3000)
          })
} //l10
if (id === "6eff36fb-4cfc-49c8-A02d-0c1b282a99ab") {
          console.log("your id is : " + id)
          one.innerHTML = data.l10.q1
          two.innerHTML = data.l10.q2
          one.addEventListener("click",()=>{
                    one.innerHTML = data.l10.a1
                    two.innerHTML = data.l10.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=A140934e-A57b-4178-8593-4f55c75554ed"
                    },3000)   
          })
          two.addEventListener("click",()=>{
                    one.innerHTML = data.l10.a1
                    two.innerHTML = data.l10.a2
                    setTimeout(()=>{
                         location.href="/Game.html?id=A140934e-A57b-4178-8593-4f55c75554ed"
                    },3000)
          })
} //l11
if (id === "A140934e-A57b-4178-8593-4f55c75554ed") {
          console.log("your id is : " + id)
          one.innerHTML = data.l11.q1
          two.innerHTML = data.l11.q2
          one.addEventListener("click",()=>{
                    one.innerHTML = data.l11.a1
                    two.innerHTML = data.l11.a2
                    setTimeout(()=>{
                         location.href="/index.html"
                    },3000)   
          })
          two.addEventListener("click",()=>{
                    one.innerHTML = data.l11.a1
                    two.innerHTML = data.l11.a2
                    setTimeout(()=>{
                         location.href="/index.html"
                    },3000)
          })
}