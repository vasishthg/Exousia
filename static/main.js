
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

$(".alternate-auth").hover(function(){
    $(".alternate-auth-vector").animate({
        left: "2em"
    }, 500)
    $(this).stop().animate({
        width: "8.5em"
    }, 500)
})

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
}

function onMouseMove(e) {
    TweenMax.to($bigBall, .4, {
      x: e.clientX - 15,
      y: e.clientY - 15

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
