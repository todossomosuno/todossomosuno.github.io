$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
            $('.navbar .logo a .logo2').addClass("active");
            $('.navbar .logo a .logo1').removeClass("active");

        } else {
            $('.navbar').removeClass("sticky");
            $('.navbar .logo a .logo2').removeClass("active");
            $('.navbar .logo a .logo1').addClass("active");
        }
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings:["Orden","Seguridad","Oportunidades"],
        typedSpeed: 90,
        backSpeed: 100,
        loop: true
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
    $('.menu a').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Swipper
    new Swiper('.slider-wrapper', {
        // Optional parameters
        loop: true,
        spaceBetween: 10,
        type: 'bullets',
        //autoplay: {
        //    delay: 5000,
        //},

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 4
            }
        },
    });
    // buttons popup-alert
    function createPopup(id){
        let popupNode = document.querySelector(id);
        let overlay = popupNode.querySelector('.overlay');
        let closeBtn = popupNode.querySelector('.close-btn');
        function openPopup(){
            popupNode.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        function closePopup(){
            popupNode.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        overlay.addEventListener('click', closePopup);
        closeBtn.addEventListener('click', closePopup);
        return openPopup;
    }
    let pop1 = createPopup('#pop-1');
    document.querySelector('#open-1').addEventListener('click',pop1);
    let pop2 = createPopup('#pop-2');
    document.querySelector('#open-2').addEventListener('click',pop2);
    let pop3 = createPopup('#pop-3');
    document.querySelector('#open-3').addEventListener('click',pop3);
    let pop4 = createPopup('#pop-4');
    document.querySelector('#open-4').addEventListener('click',pop4);
    let pop5 = createPopup('#pop-5');
    document.querySelector('#open-5').addEventListener('click',pop5);
    let pop6 = createPopup('#pop-6');
    document.querySelector('#open-6').addEventListener('click',pop6);
    let pop7 = createPopup('#pop-7');
    document.querySelector('#open-7').addEventListener('click',pop7);
    let pop8 = createPopup('#pop-8');
    document.querySelector('#open-8').addEventListener('click',pop8);




    //buttons gallery
    let next = document.querySelector('.gallery .next');
    let prev = document.querySelector('.gallery .prev');

    next.addEventListener('click', function(){
        let items = document.querySelectorAll('.gallery .item');
        document.querySelector('.gallery .slide').appendChild(items[0])
    });

    prev.addEventListener('click', function(){
        let items = document.querySelectorAll('.gallery .item');
        document.querySelector('.gallery .slide').prepend(items[items.length - 1]);
        console.log('Presionaste prev')
    });
});

