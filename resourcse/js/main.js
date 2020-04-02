
// SMOOTH SCROLL


$(function(){
    $('.main-nav a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        
        return false;
    });
});

// ACTIVE LINK
    $("nav ul li a").click(function(){
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });

    $("nav .logo").click(function(){
        $("nav ul li a").removeClass("active");
        $("nav ul li:first-child a").addClass("active");
    });
//MOBILE MENU
function openNav(){
 document.getElementById("myNav").style.width= "100%";
}
function closeNav(){
 document.getElementById("myNav").style.width= "0%";
}

// STICKY MENU

$(window).on('scroll', function(){
    if($(window).scrollTop()){
            $('nav').addClass('sticky');
       }
       else {
            $('nav').removeClass('sticky');
       }
});


//COUNT DOWM

$('.count-num').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

//CAROUSEL
$('.owl-carousel').owlCarousel({
    autoplay:!0,
    loop:1,
    dots:0,
    margin:10,
    nav:1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$(".snake").snakeify({
        speed: 200
    });



// JUMP BUTTON 


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 



//ACCORDION

$(".acc-title").click(function() {
        $(this).closest(".acc-item").siblings().removeClass("active").find(".acc-content").slideUp(400), $(this).closest(".acc-item").toggleClass("active").find(".acc-content").slideToggle(400)
    });














