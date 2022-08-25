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
  $(".home-loggedin").show("slide", {direction: "left"}, 350)
  $(".signup").hide("slide", {direction: "left"}, 350)
  $(".services").hide("slide", {direction: "down"}, 350)
  $(".login").hide("slide", {direction: "left"}, 350)
  $(".buy").hide("slide", {direction: "left"}, 350)
  $(".updates").hide("slide", {direction: "left"}, 350)
  $(".profile").hide("slide", {direction: "right"}, 350)
  document.getElementById("display-head").innerHTML = "  Home"
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

$(".to-services").click(function(){
  $(".services").show("slide", {direction: "down"}, 300)
  $(".buy").hide("slide", {direction: "up"}, 300)
  $(".home-loggedin").hide("slide", {direction: "up"}, 350)
  $(".updates").hide("slide", {direction: "left"}, 350)
  $(".profile").hide("slide", {direction: "right"}, 350)
  document.getElementById("display-head").innerHTML = "  Services"
  document.getElementById("dimg").src="/static/notif.svg";
})

$(".to-updates").click(function(){
  $(".updates").show("slide", {direction: "left"}, 300)
  $(".buy").hide("slide", {direction: "up"}, 300)
  $(".home-loggedin").hide("slide", {direction: "up"}, 350)
  $(".services").hide("slide", {direction: "down"}, 300)
  $(".profile").hide("slide", {direction: "right"}, 350)
  document.getElementById("display-head").innerHTML = "  Updates"
  document.getElementById("dimg").src="/static/notif.svg";
})

$(".to-buy").click(function(){
  $(".buy").show("slide", {direction: "left"}, 300)
  $(".updates").hide("slide", {direction: "left"}, 300)
  $(".home-loggedin").hide("slide", {direction: "up"}, 350)
  $(".services").hide("slide", {direction: "down"}, 300)
  $(".profile").hide("slide", {direction: "right"}, 350)
  document.getElementById("display-head").innerHTML = "  Buy"
  document.getElementById("dimg").src="/static/cart.svg";
  document.getElementById("dimg").setAttribute('class', 'display-img to-cart')
  $("#dimg").css('cursor', "pointer")
  $(".to-cart").click(function(){
    $(".cart").show("slide", {direction: "left"}, 300)
  })
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

$(".to-profile").click(function(){
  $(".profile").show("slide", {direction: "right"}, 300)
  $(".buy").hide("slide", {direction: "left"}, 300)
  $(".updates").hide("slide", {direction: "left"}, 300)
  $(".home-loggedin").hide("slide", {direction: "up"}, 350)
  $(".services").hide("slide", {direction: "down"}, 300)
  document.getElementById("display-head").innerHTML = "  Profile"
  document.getElementById("dimg").src="/static/notif.svg";
})

$("#to-system").click(function(){
  $(".profile-system").show("slide", {direction: "right"}, 300)
})

$(".sys-title").click(function(){
  $(".profile-system").hide("slide", {direction: "right"}, 300)
})

$("#to-account").click(function(){
  $(".profile-account").show("slide", {direction: "right"}, 300)
  $("#acccc-img").css("display", "none")
})

$(".sys-title").click(function(){
  $(".profile-system").hide("slide", {direction: "right"}, 300)
  $(".profile-account").hide("slide", {direction: "right"}, 300)
  $("#acccc-img").css("display", "block")
})

$("#repair-floor").click(function(){
  $(".product-floors").show("slide", {direction: "right"}, 300)
})

$("#repair-sensors").click(function(){
  $(".product-sensors").show("slide", {direction: "right"}, 300)
})

$("#repair-battery").click(function(){
  $(".product-battery").show("slide", {direction: "right"}, 300)
})

$("#repair-general").click(function(){
  $(".product-general").show("slide", {direction: "right"}, 300)
})

$("#subscription-sensorbattery").click(function(){
  $(".product-sensorbattery").show("slide", {direction: "right"}, 300)
})

$("#subscription-quaterlycheck").click(function(){
  $(".product-quaterlycheck").show("slide", {direction: "right"}, 300)
})

$("#subscription-monthlycheck").click(function(){
  $(".product-monthlycheck").show("slide", {direction: "right"}, 300)
})

$("#buy-grass").click(function(){
  $(".product-grassrange").show("slide", {direction: "right"}, 300)
})

$("#buy-tiles").click(function(){
  $(".product-tiles").show("slide", {direction: "right"}, 300)
})

$("#buy-smoothewood").click(function(){
  $(".product-smoothewood").show("slide", {direction: "right"}, 300)
})

$("#to-support").click(function(){
  alert("Looks like you need support? Click 'ok' to get support")
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
})

$("#to-settings").click(function(){
  window.open("https://www.youtube.com/watch?v=fC7oUOUEEi4")
})

$("#to-appinfo").click(function(){
  alert("Ran out of budget ;-;")
})

$("#to-manual").click(function(){
  alert("Ran out of budget ;-;")
})

$(".back").click(function(){
  $(".product-smoothewood").hide("slide", {direction: "right"}, 300);
  $(".product-grassrange").hide("slide", {direction: "right"}, 300);
  $(".product-tiles").hide("slide", {direction: "right"}, 300);
  $(".product-quaterlycheck").hide("slide", {direction: "right"}, 300);
  $(".product-monthlycheck").hide("slide", {direction: "right"}, 300);
  $(".product-general").hide("slide", {direction: "right"}, 300);
  $(".product-battery").hide("slide", {direction: "right"}, 300);
  $(".product-sensors").hide("slide", {direction: "right"}, 300);
  $(".product-floors").hide("slide", {direction: "right"}, 300);
  $(".product-sensorbattery").hide("slide", {direction: "right"}, 300);
})

$(".back2").click(function(){
    $(".cart").hide("slide", {direction: "left"}, 350)
    $(".back2").css("cursor", "pointer")
})


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

// Loader
var delaylol = 100
    $(window).onload= setTimeout(function(){
    $(".loader").fadeOut(2000);
}, delaylol);

txt = "<p class='appinfo'><strong class='appinfo-title'>Browser Codename: </strong>" + navigator.appCodeName + "</p>";
txt+= "<p class='appinfo'><strong class='appinfo-title'>Browser Name:  </strong>" + navigator.appName + "</p>";
txt+= "<p class='appinfo'><strong class='appinfo-title'>Browser Version:  </strong>" + navigator.appVersion + "</p>";
txt+= "<p class='appinfo'><strong class='appinfo-title'>Cookies Enabled:  </strong>" + navigator.cookieEnabled + "</p>";
txt+= "<p class='appinfo'><strong class='appinfo-title'>Platform:  </strong>" + navigator.platform + "</p>";
 
document.getElementById("mogus").innerHTML=txt;