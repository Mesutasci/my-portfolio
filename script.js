// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(scrollY > 5) {
//             $('.navbar').addClass('.convert');
//         } else {
//             $('.navbar').removeClass('.convert');
//         }
//     })
    // $('.menu-btn').click(function(){
    //     $('.navbar .menu').toggleClass('.active');
    //     $('.menut-btn i').toggleClass('.active');
    // });
// })



$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 5){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// certificate cards
function addCards(pCertificates) {
    return pCertificates
        .map((a, index) =>
            `
            <section class="card" id="${index + 1}">
                <div class="box">
                    <img src="${a.link}" alt="${a.alt}">
                    <div class="text">
                        <a href="
                            ${a.link}"> ${a.title}
                        </a>
                    </div>
                    <p>
                        <a href="${a.link}">
                            ${a.explanation}, ${a.issuer}, ${a.date}
                        </a>
                    </p>
                </div>
            </section>
        `
        ).join("");
}

// Making carousel cards dynamic with javascript
function render (pCertificates) {
    let owlCarousel = document.querySelector('.owl-carousel');
    owlCarousel.innerHTML = addCards(pCertificates);
    return owlCarousel;
}

render(certificates);
