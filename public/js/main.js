// Lightbox Init
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// Init Slick
$(".slider").slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1
});

// Video Play
$(function () {
    // Auto play modal video
    $(".video").click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto =
            videoSRC +
            "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + " iframe").attr("src", videoSRCauto);
        $(theModal + " button.close").click(function () {
            $(theModal + " iframe").attr("src", videoSRC);
        });
    });
});



// Configure Slider
$(".carousel").carousel({
    interval: 6000,
    pause: "hover"
});

// Flip effect
$('.ml1').on('click', function () {
    $('.card-front').addClass('card-container card-flip clickedFront');
    $('.card-back').addClass('card-container card-flip clickedBack')
});

// Flip effect
$('.ctn').on('click', function () {
    $('#basicInfo').removeClass('clickedBack')
    $('#basicInfo').addClass('clickedFront')
    $('#frontCard').addClass('card-container card-flip clickedBack')
    document.getElementById('numTwo').style.display = 'flex'
    setTimeout(function () {
        document.getElementById('numOne').style.display = 'none'
    }, 500)
})

$('.cton').on('click', function () {
    $('#numTwo').flip(true)
})
$('.toStdProfile').on('click', function () {
    document.getElementById('studentProfile').style.display = 'flex'
    document.getElementById('numTwo').style.display = 'none'
})

$('.toStdAppl').on('click', function () {
    $('#studentProfile').flip(true)
})


// Date Picker
$(function () {
    $('.dates #user1').datepicker({
        'format': 'yyyy-mm-dd',
        'autoclose': true
    })
})

// TODO: Fix this,  Testimony Slider 
$(".slider").carousel({
    interval: 1,
    pause: "hover"
});



$(document).ready(function () {
    $('.displayMainRow').click(function () {
        storyOne = document.getElementById('pageOne')
        storyTwo = document.getElementById('pageTwo')
        storyTwo.style.display = 'none'
        storyOne.style.display = 'flex'
    })
    $('#pageBtnTwo').click(function () {
        storyOne = document.getElementById('pageOne')
        storyTwo = document.getElementById('pageTwo')
        storyTwo.style.display = 'flex'
        storyOne.style.display = 'none'

    })

    $('[data-toggle="popover"]').popover()

    $('.donnateIcon').popover({
        trigger: 'hover'
    })

})

// hide element
document.getElementById('numTwo').style.display = 'none'
document.getElementById('studentProfile').style.display = 'none'

// flip Application cards
$("#numTwo, #studentProfile").flip({
    trigger: 'manual'
});

// Wrap every letter.
var textWrapper1 = document.querySelector('.ml3');
textWrapper2 = document.querySelector('.ml2')
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
        loop: false,
    })
    .add({
        targets: ['.ml3 .letter', '.ml2 .letter'],
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 500,
        delay: (el, i) => 150 * (i + 1)
    });

anime({
    targets: '.ml1',
    translateX: [100, 250],
    delay: 500,
    direction: 'alternate',
    loop: true
});