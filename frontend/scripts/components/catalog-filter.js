$('.filter-row-trigger').click(function(e) {
  e.preventDefault();
  $(this).closest('.filter-row').toggleClass('active');
});

(function() {
  let timer;

  window.onresize = () => {
    if (timer) clearTimeout(timer);

    if ($(window).width() > 991) {
      timer = setTimeout(() => {
        $('#catalog-filter').css('display', 'block');
      }, 100)
    }
  };

})();
