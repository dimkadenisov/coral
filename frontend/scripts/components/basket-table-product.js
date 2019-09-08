$(".basket-table-product .button_delete").click(function() {
  $.when(
    $(this)
      .closest(".basket-table-product")
      .fadeOut()
  ).done(() => {
    $(this)
      .closest(".basket-table-product")
      .remove();
  });
});
