(function ($) {
  $(function () {
    $('.sidenav').sidenav()
    $('.parallax').parallax()
    $('#header-container').load('./components/navbar.html')
    $('#footer-container').load('./components/footer.html')
    $('#overview-container').load('./components/overview.html')
    $('#aspirations-container').load('./components/aspirations.html')
    $('#portfolio-container').load('./components/portfolio.html')
    $('#experiences-container').load('./components/experiences.html')
  }) // end of document ready
// eslint-disable-next-line no-undef
})(jQuery) // end of jQuery name space
