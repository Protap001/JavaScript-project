$('.desings').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    dotsClass: 'car_dot',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.bok2').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
});

$('.pulse2').click(function(){
	$('#modal').show();
});
$('#close').click(function(){
	$('#modal').hide();
});
// $('#background').click(function(){
// 	$('#modal').hide();
// });


$('.boots').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    
    
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true,
                slidesToScroll: 1,
                dotsClass: 'desin_dot',
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                infinite: true,
                dots: true,
                slidesToScroll: 1,
                dotsClass: 'desin_dot',
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                dotsClass: 'desin_dot',
            }
        },

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                dotsClass: 'desin_dot',
            }
        }
    ]
});
   