const incrementDecrementValue = function() {
  const input = $(this)
    .next()
    .hasClass('input-field_underlined')
    ? $(this).next()
    : $(this).prev();
  const operation = $(this)
    .next()
    .hasClass('input-field_underlined')
    ? 'decrement'
    : 'increment';

  const step = +input.attr('step') || 1;
  const maxValue = +input.attr('max') || 100;
  const minValue = +input.attr('min') || 0;
  let value = +input.val() || 0;

  switch (operation) {
    case 'increment':
      value = value + step >= maxValue ? maxValue : value + step;
      input.val(value);
      break;

    case 'decrement':
      value = value - step <= minValue ? minValue : value - step;
      input.val(value);
      break;
  }
};
