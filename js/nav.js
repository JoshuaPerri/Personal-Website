$(".nav-link-menu").hover(
  (e) => {
    console.log($(this));
    $(e.currentTarget).parent().find(".nav-link-list").removeClass("closed");
  },
  (e) => {
    $(e.currentTarget).parent().find(".nav-link-list").addClass("closed");
  }
);

$(".nav-link-menu").focusin((e) => {
  $(e.currentTarget).parent().find(".nav-link-list").removeClass("closed");
});

$(".nav-link-menu").focusout((e) => {
  $(e.currentTarget).parent().find(".nav-link-list").addClass("closed");
});
