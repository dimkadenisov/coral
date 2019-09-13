$('.licensed-collections__button-wrapper .button').click(function() {
  $(this).closest('.licensed-collections').addClass('licensed-collections_opened');
  $(this).remove();
});
