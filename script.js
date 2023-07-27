var div = document.querySelector("#input-div")
var inp = document.querySelector("#input-div input")
var page1 = document.querySelector("#page1-center")
var inphover = document.querySelector("#input-div #input-hover")
var flag = 0
inp.addEventListener("click", function () {
  if (flag == 0) {
    div.style.transformOrigin = "right";
    div.style.transform = "scaleX(1.1)";
    div.style.borderColor = "#8230C6"
    inphover.style.visibility = "visible";
    flag = 1
  }

})
page1.addEventListener("click", function () {
  div.style.transformOrigin = "initial";
  div.style.transform = "initial";
  div.style.borderColor = "#4F3E46"
  inphover.style.visibility = "hidden";
  document.querySelector("#img2-hover").style.visibility = "hidden";
  flag = 0
})

// img2 ka code h

document.querySelector("#img2-div #img2").addEventListener("click", function () {
  if (flag === 0) {
    document.querySelector("#img2-hover").style.visibility = "visible"
    flag = 1
  }
  else {
    document.querySelector("#img2-hover").style.visibility = "hidden";
    flag = 0
  }
})
var box1 = document.querySelector("#img2-hover #box1")
var h6 = document.querySelectorAll("#img2-hover h6")
var boxi = document.querySelector("#img2-hover #box1 span")
var saif = 0

box1.addEventListener("click", function () {
  if (saif === 0) {
    box1.style.transformOrigin = "top";
    box1.style.overflow = "initial"
    box1.style.height = "1000px"
    boxi.innerHTML = `<i class="ri-arrow-up-s-line"></i>`
    document.querySelector("#img2-hover").style.height = "590px"
    h6.forEach(function (elem) {
      elem.style.display = "block"
    })
    saif = 1
  }
  else {
    document.querySelector("#img2-hover").style.height = "490px"
    box1.style.transformOrigin = "center";
    boxi.innerHTML = `<i class="ri-arrow-down-s-line"></i>`
    box1.style.overflow = "hidden"
    box1.style.height = "60px"
    h6.forEach(function (elem) {
      elem.style.display = "block"
    })
    saif = 0
  }

})

var box2 = document.querySelector("#img2-hover #box2")
var boxi2 = document.querySelector("#img2-hover #box2 span")
var saif2

box2.addEventListener("click", function () {
  if (saif2 === 0) {
    // box2.style.transformOrigin = "top";
    box2.style.overflow = "initial"
    box2.style.height = "203px"
    boxi2.innerHTML = `<i class="ri-arrow-up-s-line"></i>`
    document.querySelector("#img2-hover").style.height = "590px"
    h6.forEach(function (elem) {
      elem.style.display = "block"
    })
    saif2 = 1
  }
  else {
    document.querySelector("#img2-hover").style.height = "490px"
    // box2.style.transformOrigin = "center";
    box2.style.overflow = "hidden"
    box2.style.height = "60px"
    boxi2.innerHTML = `<i class="ri-arrow-down-s-line"></i>`
    h6.forEach(function (elem) {
      elem.style.display = "block"
    })
    saif2 = 0
  }

})

var box3 = document.querySelector("#img2-hover #box3")
var boxi3 = document.querySelector("#img2-hover #box3 span")
var saif3 = 0

box3.addEventListener("click", function () {
  if (saif3 === 0) {
    // box2.style.transformOrigin = "top";
    box3.style.overflow = "initial"
    box3.style.height = "140px"
    boxi3.innerHTML = `<i class="ri-arrow-up-s-line"></i>`
    document.querySelector("#img2-hover").style.height = "590px"
    h6.forEach(function (elem) {
      elem.style.display = "block"
    })
    saif3 = 1
  }
  else {
    document.querySelector("#img2-hover").style.height = "490px"
    // box2.style.transformOrigin = "center";
    box3.style.overflow = "hidden"
    box3.style.height = "60px"
    boxi3.innerHTML = `<i class="ri-arrow-down-s-line"></i>`
    h6.forEach(function (elem) {
      elem.style.display = "block"
    })
    saif3 = 0
  }

})


var box5 = document.querySelector("#img2-hover #box5")
var boxi5 = document.querySelector("#img2-hover #box5 span")
var saif4 = 0

box5.addEventListener("click", function () {
  if (saif4 === 0) {
    // box2.style.transformOrigin = "top";
    box5.style.overflow = "initial"
    box5.style.height = "395px"
    boxi5.innerHTML = `<i class="ri-arrow-up-s-line"></i>`
    document.querySelector("#img2-hover").style.height = "590px"
    h6.forEach(function (elem) {
      elem.style.display = "block"
    })
    saif4 = 1
  }
  else {
    document.querySelector("#img2-hover").style.height = "490px"
    // box2.style.transformOrigin = "center";
    box5.style.overflow = "hidden"
    box5.style.height = "60px"
    boxi5.innerHTML = `<i class="ri-arrow-down-s-line"></i>`
    h6.forEach(function (elem) {
      elem.style.display = "block"
    })
    saif4 = 0
  }

})
var btn01 = document.querySelector("#page1-center #btn01")
var btn02 = document.querySelector("#page1-center #btn02")
var boxer1 = document.querySelector("#page1-center #boxer1")
var boxer2 = document.querySelector("#page1-center #boxer2")
var boxer3 = document.querySelector("#page1-center #boxer3")
var boxer4 = document.querySelector("#page1-center #boxer4")
var boxer5 = document.querySelector("#page1-center #boxer5")
var boxer6 = document.querySelector("#page1-center #boxer6")
var boxer7 = document.querySelector("#page1-center #boxer7")
var kallu = 0

var raper = document.querySelector("#raper-div")
document.querySelector("#fspan").style.color = "purple"

btn02.addEventListener("click", function () {
  if (kallu === 0) {

    boxer1.style.transform = "translatex(-86%)"
    boxer2.style.transform = "translatex(-86%)"
    boxer3.style.transform = "translatex(-86%)"
    boxer4.style.transform = "translatex(-86%)"
    boxer5.style.transform = "translatex(-86%)"
    boxer6.style.transform = "translatex(-86%)"
    boxer7.style.transform = "translatex(-86%)"
    document.querySelector("#fspan").style.color = "white"
    document.querySelector("#sespan").style.color = "purple"
    kallu = 1
  }
  else if (kallu === 1) {
    
    boxer1.style.transform = "translatex(-186%)"
    boxer2.style.transform = "translatex(-186%)"
    boxer3.style.transform = "translatex(-186%)"
    boxer4.style.transform = "translatex(-186%)"
    boxer5.style.transform = "translatex(-186%)"
    boxer6.style.transform = "translatex(-186%)"
    boxer7.style.transform = "translatex(-186%)"
    document.querySelector("#fspan").style.color = "white"
    document.querySelector("#sespan").style.color = "white"
    document.querySelector("#tspan").style.color = "purple"
    kallu = 2
    
  }

  else if (kallu === 2) {

    boxer1.style.transform = "translatex(-288%)"
    boxer2.style.transform = "translatex(-288%)"
    boxer3.style.transform = "translatex(-288%)"
    boxer4.style.transform = "translatex(-288%)"
    boxer5.style.transform = "translatex(-288%)"
    boxer6.style.transform = "translatex(-288%)"
    boxer7.style.transform = "translatex(-288%)"
    document.querySelector("#fspan").style.color = "white"
    document.querySelector("#sespan").style.color = "white"
    document.querySelector("#tspan").style.color = "white"
    document.querySelector("#fospan").style.color = "purple"
    kallu = 3
    
  }
  
  else if (kallu === 3) {
    
    boxer1.style.transform = "translatex(-388%)"
    boxer2.style.transform = "translatex(-388%)"
    boxer3.style.transform = "translatex(-388%)"
    boxer4.style.transform = "translatex(-388%)"
    boxer5.style.transform = "translatex(-388%)"
    boxer6.style.transform = "translatex(-388%)"
    boxer7.style.transform = "translatex(-388%)"
    document.querySelector("#fspan").style.color = "white"
    document.querySelector("#sespan").style.color = "white"
    document.querySelector("#tspan").style.color = "white"
    document.querySelector("#fospan").style.color = "white"
    document.querySelector("#fivspan").style.color = "purple"
    kallu = 4

  }

  else if (kallu === 4) {

    boxer1.style.transform = "translatex(-488%)"
    boxer2.style.transform = "translatex(-488%)"
    boxer3.style.transform = "translatex(-488%)"
    boxer4.style.transform = "translatex(-488%)"
    boxer5.style.transform = "translatex(-488%)"
    boxer6.style.transform = "translatex(-488%)"
    boxer7.style.transform = "translatex(-488%)"
    document.querySelector("#fspan").style.color = "white"
    document.querySelector("#sespan").style.color = "white"
    document.querySelector("#tspan").style.color = "white"
    document.querySelector("#fospan").style.color = "white"
    document.querySelector("#fivspan").style.color = "white"
    document.querySelector("#sispan").style.color = "purple"
    kallu = 5
    
  }
  
  else if (kallu === 5) {
    
    boxer1.style.transform = "translatex(-588%)"
    boxer2.style.transform = "translatex(-588%)"
    boxer3.style.transform = "translatex(-588%)"
    boxer4.style.transform = "translatex(-588%)"
    boxer5.style.transform = "translatex(-588%)"
    boxer6.style.transform = "translatex(-588%)"
    boxer7.style.transform = "translatex(-588%)"
    document.querySelector("#fspan").style.color = "white"
    document.querySelector("#sespan").style.color = "white"
    document.querySelector("#tspan").style.color = "white"
    document.querySelector("#fospan").style.color = "white"
    document.querySelector("#fivspan").style.color = "white"
    document.querySelector("#sispan").style.color = "white"
    document.querySelector("#sevspan").style.color = "purple"
    kallu = 6
    
  }

  else if (kallu === 6) {

    boxer1.style.transform = "translatex(0%)"
    boxer2.style.transform = "translatex(0%)"
    boxer3.style.transform = "translatex(0%)"
    boxer4.style.transform = "translatex(0%)"
    boxer5.style.transform = "translatex(0%)"
    boxer6.style.transform = "translatex(0%)"
    boxer7.style.transform = "translatex(0%)"
    kallu = 0
    document.querySelector("#fspan").style.color = "purple"
    document.querySelector("#sevspan").style.color = "white"


    
  }
})

var ballu = 0
btn01.addEventListener("click", function () {
  if (ballu === 0) {

    boxer1.style.transform = "translatex(-488%)"
    boxer2.style.transform = "translatex(-488%)"
    boxer3.style.transform = "translatex(-488%)"
    boxer4.style.transform = "translatex(-488%)"
    boxer5.style.transform = "translatex(-488%)"
    boxer6.style.transform = "translatex(-488%)"
    boxer7.style.transform = "translatex(-488%)"
    document.querySelector("#sevspan").style.color = "white"
    document.querySelector("#sispan").style.color = "purple"
    ballu = 1


  }
  else if (ballu === 1) {

    boxer1.style.transform = "translatex(-388%)"
    boxer2.style.transform = "translatex(-388%)"
    boxer3.style.transform = "translatex(-388%)"
    boxer4.style.transform = "translatex(-388%)"
    boxer5.style.transform = "translatex(-388%)"
    boxer6.style.transform = "translatex(-388%)"
    boxer7.style.transform = "translatex(-388%)"
    document.querySelector("#sispan").style.color = "white"
    document.querySelector("#fivspan").style.color = "purple"

    ballu = 2

  }

  else if (ballu === 2) {

    boxer1.style.transform = "translatex(-288%)"
    boxer2.style.transform = "translatex(-288%)"
    boxer3.style.transform = "translatex(-288%)"
    boxer4.style.transform = "translatex(-288%)"
    boxer5.style.transform = "translatex(-288%)"
    boxer6.style.transform = "translatex(-288%)"
    boxer7.style.transform = "translatex(-288%)"
    document.querySelector("#fivspan").style.color = "white"
    document.querySelector("#fospan").style.color = "purple"
    ballu = 3

  }

  else if (ballu === 3) {
    

    boxer1.style.transform = "translatex(-188%)"
    boxer2.style.transform = "translatex(-188%)"
    boxer3.style.transform = "translatex(-188%)"
    boxer4.style.transform = "translatex(-188%)"
    boxer5.style.transform = "translatex(-188%)"
    boxer6.style.transform = "translatex(-188%)"
    boxer7.style.transform = "translatex(-188%)"
    document.querySelector("#fospan").style.color = "white"
    document.querySelector("#tspan").style.color = "purple"
    ballu = 4

  }


  else if (ballu === 4) {

  boxer1.style.transform = "translatex(-88%)"
  boxer2.style.transform = "translatex(-88%)"
  boxer3.style.transform = "translatex(-88%)"
  boxer4.style.transform = "translatex(-88%)"
  boxer5.style.transform = "translatex(-88%)"
  boxer6.style.transform = "translatex(-88%)"
  boxer7.style.transform = "translatex(-88%)"
  document.querySelector("#tspan").style.color = "white"
  document.querySelector("#sespan").style.color = "purple"
  ballu = 5

}

else if (ballu === 5) {

  boxer1.style.transform = "translatex(-0%)"
  boxer2.style.transform = "translatex(-0%)"
  boxer3.style.transform = "translatex(-0%)"
  boxer4.style.transform = "translatex(-0%)"
  boxer5.style.transform = "translatex(-0%)"
  boxer6.style.transform = "translatex(-0%)"
  boxer7.style.transform = "translatex(-0%)"
  document.querySelector("#sespan").style.color = "white"
  document.querySelector("#fspan").style.color = "purple"
  ballu = 6

}

else if (ballu === 6) {

  boxer1.style.transform = "translatex(-588%)"
  boxer2.style.transform = "translatex(-588%)"
  boxer3.style.transform = "translatex(-588%)"
  boxer4.style.transform = "translatex(-588%)"
  boxer5.style.transform = "translatex(-588%)"
  boxer6.style.transform = "translatex(-588%)"
  boxer7.style.transform = "translatex(-588%)"
  document.querySelector("#fspan").style.color = "white"
  document.querySelector("#sevspan").style.color = "purple"
  ballu = 0

}
})

var btnn1 = document.querySelector(".btn011")
var btnn2 = document.querySelector(".btn022")
var raper1 = document.querySelector("#raper-first")
var raper2 = document.querySelector("#raper-second")
var raper3 = document.querySelector("#raper-third")
var golu = 0
var bolu = 0
btnn2.addEventListener("click",function(){
  if(golu === 0){
    raper1.style.transform = "translatex(-82%)"
    raper2.style.transform = "translatex(-82%)"
    raper3.style.transform = "translatex(-82%)"
    golu = 1

  }
  else if(golu === 1){
    raper1.style.transform = "translatex(-165.5%)"
    raper2.style.transform = "translatex(-165.5%)"
    raper3.style.transform = "translatex(-165.5%)"
    golu = 2
  }
  
  else if(golu === 2){
    raper1.style.transform = "translatex(-200%)"
    raper2.style.transform = "translatex(-200%)"
    raper3.style.transform = "translatex(-200%)"
    golu = 3
  }
  
  else if(golu === 3){
    raper1.style.transform = "translatex(0%)"
    raper2.style.transform = "translatex(0%)"
    raper3.style.transform = "translatex(0%)"
    golu = 0
  }
})

btnn1.addEventListener("click",function(){
  if(bolu === 0){
    raper1.style.transform = "translatex(-200%)"
    raper2.style.transform = "translatex(-200%)"
    raper3.style.transform = "translatex(-200%)"    
    bolu = 1

  }
  else if(bolu === 1){
    raper1.style.transform = "translatex(-120.5%)"
    raper2.style.transform = "translatex(-120.5%)"
    raper3.style.transform = "translatex(-120.5%)"
    bolu = 2
  }
  
  else if(bolu === 2){
    raper1.style.transform = "translatex(-38%)"
    raper2.style.transform = "translatex(-38%)"
    raper3.style.transform = "translatex(-38%)"
    bolu = 3
  }
  
  else if(bolu === 3){
    raper1.style.transform = "translatex(0%)"
    raper2.style.transform = "translatex(0%)"
    raper3.style.transform = "translatex(0%)"
    bolu = 0
  }
})


var btnsec1 = document.querySelector("#btnsec1")
var btnsec2 = document.querySelector("#btnsec2")
var raper11 = document.querySelector("#raper1-first")
var raper22 = document.querySelector("#raper2-second")
// var raper33 = document.querySelector("#raper3-third")
var goolu = 0
var boolu = 0
btnsec2.addEventListener("click",function(){
  if(goolu === 0){
    raper11.style.transform = "translatex(-50%)"
    raper22.style.transform = "translatex(-75%)"
    // raper33.style.transform = "translatex(-82%)"
    goolu = 1

  }
  else if(goolu === 1){
    raper11.style.transform = "translatex(-68.5%)"
    raper22.style.transform = "translatex(-103%)"
    // raper33.style.transform = "translatex(-165.5%)"
    goolu = 2
  }
  
  else if(goolu === 2){
    raper11.style.transform = "translatex(0%)"
    raper22.style.transform = "translatex(0%)"
    // raper33.style.transform = "translatex(0%)"
    goolu = 0
  }
})

btnsec1.addEventListener("click",function(){
  if(boolu === 0){
    raper11.style.transform = "translatex(-68.5%)"
    raper22.style.transform = "translatex(-103%)"
    // raper33.style.transform = "translatex(-200%)"    
    boolu = 1

  }
  else if(boolu === 1){
    raper11.style.transform = "translatex(-20%)"
    raper22.style.transform = "translatex(-30%)"
    // raper33.style.transform = "translatex(-120.5%)"
    boolu = 2
  }
  
  else if(boolu === 2){
    raper11.style.transform = "translatex(0%)"
    raper22.style.transform = "translatex(0%)"
    // raper33.style.transform = "translatex(-38%)"
    boolu = 3
  }
  
  else if(boolu === 3){
    raper11.style.transform = "translatex(0%)"
    raper22.style.transform = "translatex(0%)"
    // raper33.style.transform = "translatex(0%)"
    boolu = 0
  }
})





var butn1 = document.querySelector("#butn1")
var butn2 = document.querySelector("#butn2")
var rap1 = document.querySelector("#raper-first-1")
var rap2 = document.querySelector("#raper-second-2")
var rap3 = document.querySelector("#raper-third-3")
var hero = 0
var zero = 0
butn2.addEventListener("click",function(){
  if(hero === 0){
    rap1.style.transform = "translatex(-82%)"
    rap2.style.transform = "translatex(-82%)"
    rap3.style.transform = "translatex(-82%)"
    hero = 1

  }
  else if(hero === 1){
    rap1.style.transform = "translatex(-165.5%)"
    rap2.style.transform = "translatex(-165.5%)"
    rap3.style.transform = "translatex(-165.5%)"
    hero = 2
  }
  
  else if(hero === 2){
    rap1.style.transform = "translatex(-200%)"
    rap2.style.transform = "translatex(-200%)"
    rap3.style.transform = "translatex(-200%)"
    hero = 3
  }
  
  else if(hero === 3){
    rap1.style.transform = "translatex(0%)"
    rap2.style.transform = "translatex(0%)"
    rap3.style.transform = "translatex(0%)"
    hero = 0
  }
})

butn1.addEventListener("click",function(){
  if(zero === 0){
    rap1.style.transform = "translatex(-200%)"
    rap2.style.transform = "translatex(-200%)"
    rap3.style.transform = "translatex(-200%)"    
    zero = 1

  }
  else if(zero === 1){
    rap1.style.transform = "translatex(-120.5%)"
    rap2.style.transform = "translatex(-120.5%)"
    rap3.style.transform = "translatex(-120.5%)"
    zero = 2
  }
  
  else if(zero === 2){
    rap1.style.transform = "translatex(-38%)"
    rap2.style.transform = "translatex(-38%)"
    rap3.style.transform = "translatex(-38%)"
    zero = 3
  }
  
  else if(zero === 3){
    rap1.style.transform = "translatex(0%)"
    rap2.style.transform = "translatex(0%)"
    rap3.style.transform = "translatex(0%)"
    zero = 0
  }
})





var butnn1 = document.querySelector("#butnn1")
var butnn2 = document.querySelector("#butnn2")
var rep1 = document.querySelector("#raper-first-1-1")
var rep2 = document.querySelector("#raper-second-2-2")
var rep3 = document.querySelector("#raper-third-3-3")
var heroo = 0
var zeroo = 0
butnn2.addEventListener("click",function(){
  if(heroo === 0){
    rep1.style.transform = "translatex(-82%)"
    rep2.style.transform = "translatex(-82%)"
    rep3.style.transform = "translatex(-82%)"
    heroo = 1

  }
  else if(heroo === 1){
    rep1.style.transform = "translatex(-165.5%)"
    rep2.style.transform = "translatex(-165.5%)"
    rep3.style.transform = "translatex(-165.5%)"
    heroo = 2
  }
  
  else if(heroo === 2){
    rep1.style.transform = "translatex(-200%)"
    rep2.style.transform = "translatex(-200%)"
    rep3.style.transform = "translatex(-200%)"
    heroo = 3
  }
  
  else if(heroo === 3){
    rep1.style.transform = "translatex(0%)"
    rep2.style.transform = "translatex(0%)"
    rep3.style.transform = "translatex(0%)"
    heroo = 0
  }
})

butnn1.addEventListener("click",function(){
  if(zeroo === 0){
    rep1.style.transform = "translatex(-200%)"
    rep2.style.transform = "translatex(-200%)"
    rep3.style.transform = "translatex(-200%)"    
    zeroo = 1

  }
  else if(zeroo === 1){
    rep1.style.transform = "translatex(-120.5%)"
    rep2.style.transform = "translatex(-120.5%)"
    rep3.style.transform = "translatex(-120.5%)"
    zeroo = 2
  }
  
  else if(zeroo === 2){
    rep1.style.transform = "translatex(-38%)"
    rep2.style.transform = "translatex(-38%)"
    rep3.style.transform = "translatex(-38%)"
    zeroo = 3
  }
  
  else if(zeroo === 3){
    rep1.style.transform = "translatex(0%)"
    rep2.style.transform = "translatex(0%)"
    rep3.style.transform = "translatex(0%)"
    zeroo = 0
  }
})




var butnnn1 = document.querySelector("#butnnn1")
var butnnn2 = document.querySelector("#butnnn2")
var repp1 = document.querySelector("#raper-first-1-1-1")
var repp2 = document.querySelector("#raper-second-2-2-2")
var repp3 = document.querySelector("#raper-third-3-3-3")
var india= 0
var england = 0
butnnn2.addEventListener("click",function(){
  if(india === 0){
    repp1.style.transform = "translatex(-82%)"
    repp2.style.transform = "translatex(-82%)"
    repp3.style.transform = "translatex(-82%)"
    india = 1

  }
  else if(india === 1){
    repp1.style.transform = "translatex(-165.5%)"
    repp2.style.transform = "translatex(-165.5%)"
    repp3.style.transform = "translatex(-165.5%)"
    india = 2
  }
  
  else if(india === 2){
    repp1.style.transform = "translatex(-200%)"
    repp2.style.transform = "translatex(-200%)"
    repp3.style.transform = "translatex(-200%)"
    india = 3
  }
  
  else if(india === 3){
    repp1.style.transform = "translatex(0%)"
    repp2.style.transform = "translatex(0%)"
    repp3.style.transform = "translatex(0%)"
    india = 0
  }
})

butnnn1.addEventListener("click",function(){
  if(england === 0){
    repp1.style.transform = "translatex(-200%)"
    repp2.style.transform = "translatex(-200%)"
    repp3.style.transform = "translatex(-200%)"    
    england = 1

  }
  else if(england === 1){
    repp1.style.transform = "translatex(-120.5%)"
    repp2.style.transform = "translatex(-120.5%)"
    repp3.style.transform = "translatex(-120.5%)"
    england = 2
  }
  
  else if(england === 2){
    repp1.style.transform = "translatex(-38%)"
    repp2.style.transform = "translatex(-38%)"
    repp3.style.transform = "translatex(-38%)"
    england = 3
  }
  
  else if(england === 3){
    repp1.style.transform = "translatex(0%)"
    repp2.style.transform = "translatex(0%)"
    repp3.style.transform = "translatex(0%)"
    england = 0
  }
})




var butnnnn1 = document.querySelector("#butnnnn1")
var butnnnn2 = document.querySelector("#butnnnn2")
var reppp1 = document.querySelector("#raper-first-1-1-1-1")
var reppp2 = document.querySelector("#raper-second-2-2-2-2")
var reppp3 = document.querySelector("#raper-third-3-3-3-3")
var indiaA= 0
var englandA = 0
butnnnn2.addEventListener("click",function(){
  if(indiaA === 0){
    reppp1.style.transform = "translatex(-82%)"
    reppp2.style.transform = "translatex(-82%)"
    reppp3.style.transform = "translatex(-82%)"
    indiaA = 1

  }
  else if(indiaA === 1){
    reppp1.style.transform = "translatex(-165.5%)"
    reppp2.style.transform = "translatex(-165.5%)"
    reppp3.style.transform = "translatex(-165.5%)"
    indiaA = 2
  }
  
  else if(indiaA === 2){
    reppp1.style.transform = "translatex(-200%)"
    reppp2.style.transform = "translatex(-200%)"
    reppp3.style.transform = "translatex(-200%)"
    indiaA = 3
  }
  
  else if(indiaA === 3){
    reppp1.style.transform = "translatex(0%)"
    reppp2.style.transform = "translatex(0%)"
    reppp3.style.transform = "translatex(0%)"
    indiaA = 0
  }
})

butnnnn1.addEventListener("click",function(){
  if(englandA === 0){
    reppp1.style.transform = "translatex(-200%)"
    reppp2.style.transform = "translatex(-200%)"
    reppp3.style.transform = "translatex(-200%)"    
    englandA = 1

  }
  else if(englandA === 1){
    reppp1.style.transform = "translatex(-120.5%)"
    reppp2.style.transform = "translatex(-120.5%)"
    reppp3.style.transform = "translatex(-120.5%)"
    englandA = 2
  }
  
  else if(englandA === 2){
    reppp1.style.transform = "translatex(-38%)"
    reppp2.style.transform = "translatex(-38%)"
    reppp3.style.transform = "translatex(-38%)"
    englandA = 3
  }
  
  else if(englandA === 3){
    reppp1.style.transform = "translatex(0%)"
    reppp2.style.transform = "translatex(0%)"
    reppp3.style.transform = "translatex(0%)"
    englandA = 0
  }
})











