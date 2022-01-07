$(".nav-link-menu").hover((e) => {
  $(e.currentTarget).parent().find(".nav-link-list").toggleClass("closed");
});
