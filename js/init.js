(function ($) {
  $(function () {
    $('.sidenav').sidenav()
    $('.parallax').parallax()
    $('#header-container').load('./components/navbar.html')
    $('#footer-container').load('./components/footer.html')
  }) // end of document ready
// eslint-disable-next-line no-undef
})(jQuery) // end of jQuery name space
