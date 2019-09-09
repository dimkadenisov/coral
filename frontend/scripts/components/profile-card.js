$(".profile-card .button_delete").click(function() {
  $.when(
    $(this)
      .closest(".profile-card")
      .fadeOut()
  ).done(() => {
    $(this)
      .closest(".profile-card")
      .remove();
  });
});
