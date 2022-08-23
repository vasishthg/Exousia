// Signup
$(".to-signup").click(function(){
  $("#signup").show("slide", {direction: "left"}, 350);
  var delay = 400
  setTimeout(function() {
    $(".topbar-statpath").css("fill", "white");
  }, delay);
  setTimeout(function(){
    $(".topbar-time").css("z-index", "100");
    $(".topbar-time").css("color", "white");
  }, delay-500)
});

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

// Login
$(".to-login").click(function(){
  $("#login").show("slide", {direction: "left"}, 350);
  var delay = 400
  setTimeout(function() {
    $(".topbar-statpath").css("fill", "white");
  }, delay);
  setTimeout(function(){
    $(".topbar-time").css("z-index", "100");
    $(".topbar-time").css("color", "white");
  }, delay-500)
})

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

function iTried(){
  alert("I tried making google auth, couldnt make :(. discord auth works tho :)")
}

// document.addEventListener("readystatechange", function(){
//   var msg = document.getElementById("su-msg").innerHTML
//   if (msg === "Account registered."){
//     $("#su-msg").css("color", "green")
//   }
//   else{
//     $("#su-msg").css("color", "red")
//   }
// })

if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}