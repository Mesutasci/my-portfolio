// Certificate Cards with JS
function addCards(pCertificates) {
    return pCertificates
        .map((certificate, index) =>
            `
            <section class="card" id="${index + 1}">
                <div class="box">
                    <img src="${certificate.link}" alt="${certificate.alt}">
                    <div class="text">
                        <a href="
                            ${certificate.link}" target="_blank"> ${certificate.title}
                        </a>
                    </div>
                    <p>
                        <a href="${certificate.link}" target="_blank">
                            ${certificate.explanation}, ${certificate.issuer}, ${certificate.date}
                        </a>
                    </p>
                </div>
            </section>
        `
        ).join("");
}

function renderCards(pCertificates) {
    let owlCarousel = document.querySelector('.owl-carousel');
    owlCarousel.innerHTML = addCards(pCertificates);
    return owlCarousel;
}
renderCards(certificates);


// Skills Cards with JS
function addSkill(sList) {
    return sList
        .map(skill => `
            <div class="bars">
                <div class="info">
                    <span>${skill.technology}</span>
                    <span>${skill.percentage}</span>
                </div>
                <div class="${skill.line}"></div>
            </div>
    `
        ).join("")
}

function renderSkills(sList) {
    let barsSection = document.getElementById("bars-section");
    barsSection.innerHTML = addSkill(sList);
    return barsSection;
}
renderSkills(skillsList);


//  Project Cards with JS
function addProject(pList) {
    return pList
        .map(project => `
            <div class="card">
                <div class="box">
                    <i class="${project.class}"></i>
                    <h3 class="text">${project.title}</h3>
                    <p>Technologies: <br>${project.technologies}</p><br>
                    <p><a href="${project.link}" target="_blank">Page Link...</a></p>
                </div>
            </div>
    `).join("");
}

function renderProjects(pList) {
    let projectSection = document.querySelector(".serv-content");
    projectSection.innerHTML = addProject(pList);
    return projectSection;
}

renderProjects(myProjects);








$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 5) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
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
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

