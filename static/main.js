
<<<<<<< HEAD
$(".auth-input").focus(function(){
    console.log("niece")
    $(this).animate({
      "border-color": 'white',
    }, 500)
  })
  
  $(".auth-input").focusout(function(){
    console.log("niecee")
    $(this).animate({
      "border-color": '#525252',
    }, 500)
  })
=======
$(".to-home").click(function(){
  $(".signup").hide("slide", {direction: "left"}, 350)
  var delay =400
  setTimeout(function(){
    $(".topbar-statpath").css("fill", "black");
  }, delay-500);
  setTimeout(function(){
    $(".topbar-time").css("z-index", "100");
    $(".topbar-time").css("color", "black");
  }, delay)
});
>>>>>>> parent of 5cb7e8e (Update cuz why not)

$(".alternate-auth").hover(function(){
    $(".alternate-auth-vector").animate({
        left: "2em"
    }, 500)
    $(this).stop().animate({
        width: "8.5em"
    }, 500)
})

<<<<<<< HEAD
$(".alternate-auth").mouseleave(function(){
    $(".alternate-auth-vector").animate({
        left: "50%;"
    }, 500)
    $(this).stop().animate({
        width: "4em"
    }, 500)
})


const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
=======
$(".to-home").click(function(){
  $(".login").hide("slide", {direction: "left"}, 350)
  var delay =400
  setTimeout(function(){
    $(".topbar-statpath").css("fill", "black");
  }, delay-500);
  setTimeout(function(){
    $(".topbar-time").css("z-index", "100");
    $(".topbar-time").css("color", "black");
  }, delay)
});

$(".to-services").click(function(){
  $(".services").show("slide", {direction: "down"}, 300)
  document.getElementById("display-head").innerHTML = "< Services"
})

function iTried(){
  alert("I tried making google auth, couldnt make :(. discord auth works tho :)")
>>>>>>> parent of 5cb7e8e (Update cuz why not)
}

function onMouseMove(e) {
    TweenMax.to($bigBall, .4, {
      x: e.clientX - 15,
      y: e.clientY - 15

<<<<<<< HEAD
    })
    $(".cursor").css("display", "block")
  TweenMax.to($smallBall, .1, {
    x: e.clientX - 5,
    y: e.clientY - 5
  })
}

function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 2
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}

$('#signupform').submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/ajax/post',
      data: $(this).serialize(),
      success: function(response) {
        console.log(response);
      },
      error: function(error) {
        console.log(error);
      }
    });
});

$("#goto-signup").click(function(){
  $()
})
=======
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}
>>>>>>> parent of 5cb7e8e (Update cuz why not)
