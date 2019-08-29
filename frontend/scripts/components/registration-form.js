$('#registration-button').click(() => {
  $.fancybox.open({
    src  : '#registration-form',
    type : 'inline',
    touch: false,
  });
});
