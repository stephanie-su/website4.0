var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// VALUE ONE
function animateValue(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function() {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

animateValue("value", 0, 264, 6000);

// VALUE TWO
function animateValue2(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function() {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

animateValue2("value2", 0, 61, 6000);

// VALUE THREE
function animateValue3(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function() {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

animateValue3("value3", 0, 3, 6000);

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 3000); // Change image every 2 seconds
// }

// window.addEventListener(
//   "DOMContentLoaded",
//   function(e) {
//     var stage = document.getElementById("stage");
//     var fadeComplete = function(e) {
//       stage.appendChild(arr[0]);
//     };
//     var arr = stage.getElementsByTagName("a");
//     for (var i = 0; i < arr.length; i++) {
//       arr[i].addEventListener("animationend", fadeComplete, false);
//     }
//   },
//   false
// );

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $("section");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};

function myFunction() {
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_4_5581512740.png?v=1577176109887";
}
function myFunction1() {
  if (
    document.getElementById("e1").innerHTML == "08:30 AM Attendee Breakfast"
  ) {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_20_9611234472.png?v=1577179500595";
  }
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_6_8116093764.png?v=1577177005555";
}
function myFunction2() {
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_8_3772408452.png?v=1577177753694";
  if (document.getElementById("e2").innerHTML == "09:00 Submissions Due") {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_22_8522754641.png?v=1577179905833";
  }
}
function myFunction3() {
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_10_5525913779.png?v=1577177758520";
  if (document.getElementById("e3").innerHTML == "09:30 Judging Closes") {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_24_8691477230.png?v=1577179888122";
  }
}
function myFunction4() {
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_12_8716784710.png?v=1577177777542";
  if (document.getElementById("e4").innerHTML == "11:00 Closing Ceremony") {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_26_4501441982.png?v=1577179878189";
  }
}
function myFunction5() {
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_14_7939905670.png?v=1577177783437";
  if (document.getElementById("e5").innerHTML == "11:30 Superposition Ends") {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_28_6793321588.png?v=1577179872540";
  }
}
function myFunction7() {
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_16_5726766533.png?v=1577177789906";
}
function myFunction6() {
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_14_7939905670.png?v=1577177783437";
  if (document.getElementById("e5").innerHTML == "11:30 Superposition Ends") {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_28_6793321588.png?v=1577179872540";
  }
}

function myFunctionSat() {
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_4_5581512740.png?v=1577176109887";
  document.getElementById("e0").innerHTML = "Saturday Schedule";
  document.getElementById("e1").innerHTML = "10:00 AM Check In";
  document.getElementById("e2").innerHTML = "10:45 AM Opening Ceremony";
  document.getElementById("e3").innerHTML = "11:15 AM Form Teams";
  document.getElementById("e4").innerHTML = "12:00 PM Lunch; hacking begins!";
  document.getElementById("e5").innerHTML = "06:00 PM Dinner";
  document.getElementById("e6").innerHTML = "08:00 PM Women In Tech Panel";
}

function myFunctionSunday() {
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_18_7315619255.png?v=1577178187756";
  document.getElementById("e0").innerHTML = "Sunday Schedule";
  document.getElementById("e1").innerHTML = "08:30 AM Attendee Breakfast";
  document.getElementById("e2").innerHTML = "09:00 Submissions Due";
  document.getElementById("e3").innerHTML = "09:30 Judging Closes";
  document.getElementById("e4").innerHTML = "11:00 Closing Ceremony";
  document.getElementById("e5").innerHTML = "11:30 Superposition Ends";
  document.getElementById("e6").innerHTML = "";
}
