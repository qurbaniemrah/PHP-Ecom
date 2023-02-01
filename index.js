$(document).ready(function () {
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1
    });

    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 3
            },

            1000: {
                items: 5
            }

        }
    });

    var $grid = $(".grid").isotope({
        itemSelector : '.grid-item',
        layoutMode : 'fitRows'
    });

    // filter items on button click
    $(".button-group").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue});
    })

    // New Phones Owl Carousel
    $("#new-phones .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 3
            },

            1000: {
                items: 5
            }

        }
    });
// Blogs owl carousel
$("#blogs .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 3
        },
    }
})


});