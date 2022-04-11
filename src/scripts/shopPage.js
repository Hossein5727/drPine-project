let containerFilterBest = document.getElementById("container-filter-best");
let containerDropDown1 = document.getElementById("container-dropDown-1");
let containerDropDown2 = document.getElementById("container-dropDown-2");
let containerDropDown3 = document.getElementById("container-dropDown-3");
let containerDropDown4 = document.getElementById("container-dropDown-4");

$(document).ready(function () {
  $("#btn-filter-best").click(function (e) {
    e.preventDefault();
    $("#container-filter-best").css("display", "flex");
  });

  $("#btn-filter").click(function (e) {
    e.preventDefault();
    $("#container-filter").css("opacity", "1");
    $("#container-filter").css("bottom", "0px");
  });

  $("#btn-labaniat").click(function (e) {
    e.preventDefault();
    $("#labaniatContainer").css("display", "block");
    $("#labaniatContainer").css("opacity", "1");
  });

  $("#btn-location").click(function (e) {
    e.preventDefault();
    $("#rangeContainer").css("display", "block");
    $("#rangeContainer").css("opacity", "1");
  });

  $("#btn-price").click(function (e) {
    e.preventDefault();
    $("#rangeContainer").css("display", "block");
    $("#rangeContainer").css("opacity", "1");
  });
});

function closeContainerFilterBest() {
  $("#container-filter-best").css("display", "none");
}

function closeContainerFilter() {
  $("#container-filter").css("opacity", "0");
  $("#container-filter").css("bottom", "-100vh");
}

function backToContainerFilter() {
  $("#labaniatContainer").css("opacity", "0");
  $("#labaniatContainer").css("display", "none");
}

function closeRangeContainer() {
  $("#rangeContainer").css("opacity", "0");
  $("#rangeContainer").css("display", "none");
}

window.onclick = function (event) {
  if (event.target == containerFilterBest) {
    containerFilterBest.style.display = "none";
  }
};

$("#btn-dropDown-1").click(function (e) {
  e.preventDefault();
  if (containerDropDown1.style.display == "flex") {
    $("#container-dropDown-1").css("display", "none");
    $("#bottom-arrow-drop").css("transform", "rotate(0)");
  } else {
    $("#container-dropDown-1").css("display", "flex");
    $("#bottom-arrow-drop").css("transform", "rotate(180deg)");
  }
});

$("#btn-dropDown-2").click(function (e) {
  e.preventDefault();
  if (containerDropDown2.style.display == "flex") {
    $("#container-dropDown-2").css("display", "none");
    $("#bottom-arrow-drop-2").css("transform", "rotate(0)");
  } else {
    $("#container-dropDown-2").css("display", "flex");
    $("#bottom-arrow-drop-2").css("transform", "rotate(180deg)");
  }
});

$("#btn-dropDown-3").click(function (e) {
  e.preventDefault();
  if (containerDropDown3.style.display == "flex") {
    $("#container-dropDown-3").css("display", "none");
    $("#bottom-arrow-drop-3").css("transform", "rotate(0)");
  } else {
    $("#container-dropDown-3").css("display", "flex");
    $("#bottom-arrow-drop-3").css("transform", "rotate(180deg)");
  }
});

$("#btn-dropDown-4").click(function (e) {
  e.preventDefault();
  if (containerDropDown4.style.display == "flex") {
    $("#container-dropDown-4").css("display", "none");
    $("#bottom-arrow-drop-4").css("transform", "rotate(0)");
  } else {
    $("#container-dropDown-4").css("display", "flex");
    $("#bottom-arrow-drop-4").css("transform", "rotate(180deg)");
  }
}); //range price & location
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.right = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.left = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
//
