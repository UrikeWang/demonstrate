(function(document, window, $){
  $(document).ready(function(){
      $(".slider").slick({

        // slidesToShow: 3,
        // slidesToScroll:3,
        prevArrow: '.slider-container .prev',
        nextArrow: '.slider-container .next',
        centerPadding: '8%',
        focusOnSelect: true,
        slidesToShow: 4, // 1次顯示幾個選項
        slidesToScroll: 3,
        infinite: true,
        // fade: true,    //圖片淡出淡入
        // responsive: [{
        //     breakpoint: 25,
        //     settings: {
        //       arrows: false,
        //       centerMode: false, //滑動時不維持中央圖片置中
        //     }
        //   },
        //   {
        //     breakpoint: 25,
        //     settings: {
        //       arrows: false,
        //       centerMode: false, //滑動時不維持中央圖片置中
        //     }
        //   }
        // ]

      });
  });
})(document, window, jQuery);
