$(".carousel-step-button").click((e) => {
  var stage = $("#carousel-nav-bar").data("stage");
  var dir = $(e.currentTarget).data("dir");

  if (stage + dir === $(".carousel-item").length) {
    stage = 0;
  } else if (stage + dir < 0) {
    stage = $(".carousel-item").length - 1;
  } else {
    stage += dir;
  }

  updateJumpButtons(stage);
  updateCarouselItems(stage);
  $("#carousel-nav-bar").data("stage", stage);
});

$(".carousel-jump-button").click((e) => {
  var jump = $(e.currentTarget).data("jump");

  updateJumpButtons(jump);
  updateCarouselItems(jump);
  $("#carousel-nav-bar").data("stage", jump);
});

function updateJumpButtons(stage) {
  $(".carousel-jump-button").removeClass("selected");
  $(".carousel-jump-button:eq(" + stage + ")").addClass("selected");
}

function updateCarouselItems(stage) {
  $(".carousel-item").removeClass("left").addClass("right clear");

  $(".carousel-item").find(".goal-header").attr("tabindex", "-1");
  $(".carousel-item").find(".goal-paragraph").attr("tabindex", "-1");

  var index;
  if (stage - 1 < 0) {
    index = $(".carousel-item").length - 1;
  } else {
    index = stage - 1;
  }

  $(".carousel-item:eq(" + index + ")")
    .removeClass("right")
    .addClass("left");

  $(".carousel-item:eq(" + stage + ")").removeClass("left right clear");

  // Only make visible item focusable
  $(".carousel-item:eq(" + stage + ")")
    .find(".goal-header")
    .attr("tabindex", "0");
  $(".carousel-item:eq(" + stage + ")")
    .find(".goal-paragraph")
    .attr("tabindex", "0");
}
