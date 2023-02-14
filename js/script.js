
// counter up


$(function(){
  "use strict"

let animation_cls_button = document.querySelector(".animation_cls_button")
let line_1 = document.querySelector(".line_1")
let line_2 = document.querySelector(".line_2")
let line_3 = document.querySelector(".line_3")

animation_cls_button.addEventListener("click", function (){
  line_1.classList.toggle("rotate_1")
  line_2.classList.toggle("hide")
  line_3.classList.toggle("rotate_2")
})




  // progrees bar
  let PSection = document.querySelector('.progress_bar_section')
  let PSection_bar = document.querySelector('.progress_update')
  let PSection_num = document.querySelector('.progress_num')
  
  let x, y ;
  
  function updateProgressBar (){
    PSection_bar.style.height = `${getScrollPercentage()}%`
    requestAnimationFrame(updateProgressBar)
  }
  
  function getScrollPercentage(){
    return((window.scrollY)/ (document.body.scrollHeight - window.innerHeight) * 100) 
  } 
  
  updateProgressBar()



 
   let mouse = document.querySelector(".mouse")
  let mouse_inner = document.querySelector(".mouse_inner")






  document.addEventListener("mousemove", function(e){
    mouse.style.cssText = mouse_inner.style.cssText = "left: " + e.clientX + "px;  top:" + e.clientY + "px;";
   })

   let links = Array.from(document.querySelectorAll('a'));
   let serviceItem = Array.from(document.querySelectorAll('.service_item'));
   let image = Array.from(document.querySelectorAll('img'));
   console.log(serviceItem);

   links.forEach (link => {
    link.addEventListener('mouseover', () => {
      mouse.classList.add('grow');
      mouse_inner.classList.add('not_grow');
    
    })

    link.addEventListener('mouseleave', () => {
      mouse.classList.remove('grow')
      mouse_inner.classList.remove('not_grow')
    })


   })

   
   serviceItem.forEach (link => {
    link.addEventListener('mouseover', () => {
      mouse.classList.add('grow')
      mouse_inner.classList.add('not_grow')
    })

    link.addEventListener('mouseleave', () => {
      mouse.classList.remove('grow')
      mouse_inner.classList.remove('not_grow')
    })


   })

   image.forEach (link => {
    link.addEventListener('mouseover', () => {
      mouse.classList.add('grow')
      mouse_inner.classList.add('not_grow')
    })

    link.addEventListener('mouseleave', () => {
      mouse.classList.remove('grow')
      mouse_inner.classList.remove('not_grow')
    })


   })

  



    $('.counter').counterUp({
        delay:20,
        time:2000 
    
    });
    
    // titl
      $('.service_item').tilt({
        maxTilt:5,
    
      });

      // masonary gallery

      $('.portfolio_gallery').mixItUp({  

        selectors: {
          target: '.tile',
          filter: '.filter',
          sort: '.sort-btn'
        },
        
            animation: {
            animateResizeContainer: false,
            effects: 'fade scale'
          }
      
      });

      // masonary gallery end

      // venobox start
      
      new VenoBox({
        selector: '.image_popup',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
      });
      
      new VenoBox({
        selector: '.youtube_play',
        
      });

      new VenoBox({
        
    selector: '.cloud',
    
  });
  
  new VenoBox({

    selector: '.vimeo',
  
  });
  
  // venobox end
  
  
  // barfiller start

      $('#Illustrator').barfiller({
         barColor: 'rgb(247, 80, 35)',
         duration:2000,
        
      });

      $('#Photoshop').barfiller({
        barColor: '#1cbe59',
        duration:2000,


      });
      $('#Figma').barfiller({
        barColor: '#8067f0',
        duration:2000,

      });
    
   })

  //  barfiller end

  // slick slider start

  $(".testimonial_slider").slick({
    arrows:false,
    dots:true,
  })
  // slick slider end




let nav = document.querySelector("#navbar")
let back_to = document.querySelector(".back_to")
let progress_bar_section = document.querySelector(".progress_bar_section")
let Ptext = document.querySelector(".Ptext")
let boom_image = document.querySelector(".boom_image")
let image_two = document.querySelector(".images_two")
let blog_leftimage = document.querySelector(".blog_leftimage")
let blog_rightimage = document.querySelector(".blog_rightimage")






window.addEventListener("scroll", function(){

    let scroll_value = Math.floor(window.scrollY);
  
    if(scroll_value > 150) {
        nav.classList.add("sticky_menu")
        // back_to.classList.add("show")
    }

    else{
      nav.classList.remove("sticky_menu")
      // back_to.classList.remove("show")
    
    }

    if(scroll_value > 250) {
      
      progress_bar_section.classList.add("update")
      Ptext.classList.add("update2")
      
  }

  else{
    
    progress_bar_section.classList.remove("update")
    Ptext.classList.remove("update2")
 
    
  
  }

    if(scroll_value > 1450) {
      boom_image.classList.add("boom")
      
    }

    else{
      boom_image.classList.remove("boom")
     
    
    }

    
    if(scroll_value > 3700) {
      image_two.classList.add("boom_2")
      
    }

    else{
      image_two.classList.remove("boom_2")
     
    
    }

        
    if(scroll_value > 6100) {
      console.log()
      blog_leftimage.classList.add("boom_3")
      blog_rightimage.classList.add("boom_4")
      
    }

    else{
      blog_leftimage.classList.remove("boom_3")
      blog_rightimage.classList.remove("boom_4")
     
    
    }

})
AOS.init();


// back to top start

// let PSection = document.querySelector('.progress_bar_section')
// let PSection_bar = document.querySelector('.progress_bar')
// let PSection_num = document.querySelector('.progress_num')

// let x, y ;

// function updateProgressBar (){
//   PSection_bar.style.height = `${getScrollPercentage()}%`
//   requestAnimationFrame(updateProgressBar)
// }

// function getScrollPercentage(){
//   return((window.scrollY)/ (document.body.scrollHeight - window.innerHeight) * 100) 
// } 

// updateProgressBar()
// back to top end



// preloader start
var  preload = document.querySelector(".preloaderDiv")
var  left_side = document.querySelector(".left_side")
var  right_side = document.querySelector(".right_side")

setTimeout(() => {
  preload.style.display = "none"
}, 3000);

// setTimeout(() => {
//   left_side.style.display = "none"
// }, 2500);

// setTimeout(() => {
//   right_side.style.display = "none"
// }, 2500);
// preloader end





