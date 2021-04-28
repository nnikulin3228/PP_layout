(() => {
  $.router.onViewChange((e, viewRoute, route) => {
    if ( (route.name === "home") ) {

      $(document).ready(function(){
        $('#slider').slick({
          // arrows: true,
          // nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
          // prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          infinite: true,
          centerMode: true,
          centerPadding: '2%',
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 300,
          // autoplay: true,
          // autoplaySpeed: 4000,
        });
        $('.slick-arrow').html('');
        
          console.log('erwtyewrwe', $('.slick-arrow'));
      });
    }
  });
})();