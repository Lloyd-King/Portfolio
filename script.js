let hidden = true;
let row2Pending = false;
let row3Pending = false;
let playRow2 = true;
let playRow3 = true;

$(document).ready(function () {
  console.log("Script Loaded");
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  console.log("Current Scroll Amount: ", y);
  if (y > 800) {
    if (hidden) {
      hidden = false;
      $(".skillItem").fadeIn();
      row2Pending = true;
      row3Pending = true;
      playRow2 = true;
      playRow3 = true;
      setTimeout(() => {
        if (playRow2) {
          $(".skillItem2").fadeIn();
        }
      }, 150);
      setTimeout(() => {
        if (playRow3) {
          $(".skillItem3").fadeIn();
        }
      }, 300);
    }
  } else {
    if (!hidden) {
      if (row2Pending) {
        playRow2 = false;
        row2Pending = false;
      }
      if (row3Pending) {
        playRow3 = false;
        row3Pending = false;
      }
      $(".skillItem").fadeOut();
      $(".skillItem2").fadeOut();
      $(".skillItem3").fadeOut();
      hidden = true;
    }
  }
});

function testHide() {
  if (hidden) {
    $(".skillItem").fadeIn();
    hidden = false;
  } else {
    $(".skillItem").fadeOut();
    hidden = true;
  }
}
