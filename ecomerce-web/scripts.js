
function loading(){
    var tl=gsap.timeline()
tl.to('#yellow1',{

    top:"-100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out"
});
tl.from("#yellow2",{
    top:"100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out"

},"anim");
tl.to(".loaders h1",{

    delay:0.6,
    duration:0.5,
    color:"black",
},"anim");

tl.to(".loaders ",{
    opacity:0,
})
tl.to(".loaders ",{
    display:"none",
})
}
loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elems=document.querySelectorAll(".elem");
var page2=document.querySelector("#page2")
elems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var bg=elem.getAttribute("data-img");
        page2.style.backgroundImage= `url(${bg})`
      
    })
      

})


document.getElementById("wishlist-btn").addEventListener("click", function() {
    this.classList.toggle("red");
});

  