$(function() {

   $('#about_us').hover(
     function() {
       $('#descripion > img').attr("src","./img/news.jpg");
     },
     function() {
       $('#descripion > img').attr("src","./img/zan-oda.png");
     }
   );

   $('#ceo').hover(
     function() {
       $('#descripion > img').attr("src","./img/ceo.jpg");
     },
     function() {
       $('#descripion > img').attr("src","./img/zan-oda.png");
     }
   );

   $('#news').hover(
     function() {
       $('#descripion > img').attr("src","./img/news.jpg");
     },
     function() {
       $('#descripion > img').attr("src","./img/zan-oda.png");
     }
   );

   $('#contact').hover(
     function() {
       $('#descripion > img').attr("src","./img/ceo.jpg");
     },
     function() {
       $('#descripion > img').attr("src","./img/zan-oda.png");
     }
   );


  $('a[href^="#"]').on('click', function() {
    //移動完了までの時間(ms)を指定
    var speed = 500;

    var href = $(this).attr('href');
    var target;
    if (href === '#' || href === '') {
      target = $('html');
    } else {
      target = $(href);
    }

    var offset = -80;
    var position = target.offset().top + offset;

    $('html, body').stop().animate(
      {
        scrollTop: position
      },
      speed,
      'swing'
    );

    return false;
  });
});
