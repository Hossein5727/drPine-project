let modal = document.getElementById("signupContainer");
let signupLink = document.getElementById("signupLink");
let formSignup = document.getElementById("formSignup");
let inputPhoneNumber = formSignup.querySelector("input");
let sendCodeSignupBtn = formSignup.querySelector("button");
let enterPhoneNumber = formSignup.querySelector("#enterPhoneNumber");
let labelenterPhoneNumber = document.querySelector("#labelenterPhoneNumber");
let labelPrivcy = document.querySelector(".privcySignup");
let timerSignup = document.querySelector("#timerSignup");
let labelshowTimer = timerSignup.querySelector("p");
let labelchangePhoneNumber = document.querySelector("#labelchangePhoneNumber");
let searchBoxHome = document.querySelector("#search-box-home");

let isStartReverseTimer = false;

$("#back-to-top").click(function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
let navMenu = document.getElementById("navbar-container-2");
hamburger = document.getElementById("hamburger");

function openNav() {
  navMenu.style.width = "340px";
  navMenu.style.right = "0px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  navMenu.style.width = "0";
  navMenu.style.right = "-40px";
  document.body.style.backgroundColor = "white";
}

document.addEventListener("click", function (event) {
  if (
    navMenu.style.width == "340px" &&
    !event.target.isEqualNode(hamburger) &&
    !event.target.isEqualNode(navMenu) &&
    !navMenu.contains(event.target)
  ) {
    navMenu.style.width = "0";
    navMenu.style.right = "-40px";
    document.body.style.backgroundColor = "white";
  }
});

$(document).ready(function () {
  // create slider for products home page
  var slider = $("#lightSlider").lightSlider({
    item: 4,
    loop: false,
    slideMove: 1,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 600,
    rtl: true,
    // pager: false,
    // slideMargin: '5',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 2,
          slideMove: 1,
          slideMargin: 2,
        },
      },
    ],
  });
  $("#goToPrevSlide").on("click", function () {
    slider.goToPrevSlide();
  });
  $("#goToNextSlide").on("click", function () {
    slider.goToNextSlide();
  });
  //

  $("#bottom-arrow-search-box").click(function (e) {
    e.preventDefault();
    // searchBoxHome.style.height = "650px";
    $("#container-product-search-box").css("display", "flex");
    $("#bottom-arrow-search-box").hide();
    $("#up-arrow-search-box").css("display", "flex");
    $("#container-search-box").addClass("border-bottom-search-box");
    $("#btn-slider-search-box").css("display", "flex");
    $("#up-arrow-search-box").show();
  });

  $("#up-arrow-search-box").click(function (e) {
    e.preventDefault();
    // searchBoxHome.style.height = "auto";
    $("#container-product-search-box").css("display", "none");
    $("#up-arrow-search-box").hide();
    $("#bottom-arrow-search-box").css("display", "flex");
    $("#container-search-box").removeClass("border-bottom-search-box");
    $("#btn-slider-search-box").css("display", "none");
    $("#bottom-arrow-search-box").show();
  });
});

// show qty of product
$(document).ready(function () {
  let qtyNumber1 = document.getElementById("qty-number-1");

  $("#product-1").click(function (e) {
    e.preventDefault();
    $("#qty-1").css("display", "flex");
    $("#product-1").css("display", "none");
  });

  $("#plus-qty-1").click(function (e) {
    e.preventDefault();
    qtyNumber1.innerHTML++;
    if (qtyNumber1.innerHTML > 1) {
      $("#delete-qty-1").css("display", "none");
      $("#minus-qty-1").css("display", "block");
    }
  });
  $("#minus-qty-1").click(function (e) {
    e.preventDefault();
    qtyNumber1.innerHTML--;
    if (qtyNumber1.innerHTML == 1) {
      $("#delete-qty-1").css("display", "block");
      $("#minus-qty-1").css("display", "none");
    }
  });
  $("#delete-qty-1").click(function (e) {
    e.preventDefault();
    $("#qty-1").css("display", "none");
    $("#product-1").css("display", "flex");
  });
});

//

// show modal with click on btn
signupLink.addEventListener("click", () => {
  modal.style.display = "flex";
});

// if user clicked out of space this modal: modal is close !
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$(document).ready(function () {
  // validation signUp form
  let isSendCode = false;
  $(sendCodeSignupBtn).click(function (e) {
    e.preventDefault();
    let phoneNumberData = "";
    if (inputPhoneNumber.value.length == 11 && !isNaN(inputPhoneNumber.value)) {
      inputPhoneNumber.style.border = "none";
      enterPhoneNumber.style.display = "none";
      phoneNumberData = inputPhoneNumber.value;
      sendCodeSignupBtn.innerHTML = "ورود";
      inputPhoneNumber.value = "";
      labelenterPhoneNumber.innerHTML = `کد تایید برای شماره ${phoneNumberData} ارسال گردید`;
      labelPrivcy.style.display = "none";
      timerSignup.style.display = "flex";
      labelchangePhoneNumber.style.display = "block";
      isSendCode = true;
      isStartReverseTimer = true;
    } else {
      isStartReverseTimer = false;
      if (isSendCode == false) {
        inputPhoneNumber.style.border = "1px solid red";
        enterPhoneNumber.style.display = "block";
        inputPhoneNumber.focus();
      } else if (isSendCode) {
        inputPhoneNumber.style.border = "none";
        enterPhoneNumber.style.display = "none";
      }
    }
  });
});

// reverse timer
var timeleft = 59;
const timer = setInterval(function () {
  if (isStartReverseTimer) {
    if (timeleft == 0) {
      clearInterval(timer);
    }
    labelshowTimer.innerHTML = `ارسال مجدد کد تا ${timeleft} ثانیه دیگر`;
    timeleft -= 1;
  }
}, 1000);

// create slider homePage

let directionSliderProduct = "";
let isPanigation = "";
let heightSlider = "";

if (
  document.documentElement.clientWidth <= "768" ||
  window.innerWidth <= "768"
) {
  directionSliderProduct = "rtl";
  isPanigation = true;
} else if (
  document.documentElement.clientWidth > "768" ||
  window.innerWidth > "768"
) {
  directionSliderProduct = "";
}

if (
  document.documentElement.clientWidth <= "400" ||
  window.innerWidth <= "400"
) {
  heightSlider = "340px";
} else if (
  document.documentElement.clientWidth > "400" ||
  window.innerWidth > "400"
) {
  heightSlider = "";
}

new Splide(".splide", {
  width: "99%",
  isNavigation: false,
  direction: directionSliderProduct || "ttb",
  // changedirectionSliderProduct(direction),
  height: heightSlider || "345px",
  pagination: isPanigation || false,
  cover: true,
  arrows: false,
  classes: {
    arrows: "splide__arrows arrows",
    arrow: "splide__arrow ",
    prev: "splide__arrow--prev prev-btn",
    next: "splide__arrow--next next-btn",
    pagination: "splide__pagination panigation-sp",
    page: "splide__pagination__page panigation-page",
  },
}).mount();

new Splide("#slider1").mount();
new Splide("#slider2").mount();
new Splide("#slider3").mount();

var elms = document.getElementsByClassName("splide");

for (var i = 0; i < elms.length; i++) {
  new Splide(elms[i]).mount();
}
//

// click button and scroll to top page
// $(document).ready(function () {

// });

//
