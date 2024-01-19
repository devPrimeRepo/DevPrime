/*modal jquery*/
$(document).ready(function($) {
    $('.btn').click(function() {
        $('.popup-fade').show();
        return false;
    });

    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').hide();
        return false;
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').hide();
        }
    });

    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).hide();
        }
    });
});

/* mask phone number +7()___-___*/

$(document).ready(function () {
    var thirdPhone = $(".third-phone");

    thirdPhone.inputmask({
        mask: "+7(999)999-99-99",
        placeholder: "+7(___)___-__-__",
        onBeforeMask: function (value, opts) {
            // Установка курсора в начало поля ввода
            return value;
        },
        onBeforePaste: function (pastedValue, opts) {
            // Установка курсора в начало поля ввода при вставке значения
            return pastedValue;
        }
    });

    // Установка курсора в начало при фокусе
    thirdPhone.on('focus', function () {
        var inputValue = $(this).val();
        $(this).val('').val(inputValue);
    });
});


/* fixed color header */
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 50) {
            $('.header__top').addClass('white-bg');
        } else {
            $('.header__top').removeClass('white-bg');
        }
    });
});

/* add class for top header */
$(document).ready(function () {
    // Добавляем класс "active" при наведении на пункт меню
    $('.header__top-link').hover(function () {
        $(this).parent().toggleClass('active');
    });
});

/* buttons for return top */
$(document).ready(function () {
    // Появление и исчезновение кнопки при скролле
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Плавный скролл наверх при клике на кнопку
    $('.scroll-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

$(document).ready(function () {
    // Initial state: Show all cards
    $('.nav__card-img').show();

    // Handle click on navigation links
    $('.navigation__links a').on('click', function (e) {
        e.preventDefault();

        // Get the selected category
        var category = $(this).data('category');

        // Hide all cards
        $('.nav__card-img').hide();

        // Show cards that belong to the selected category or show all if "Все" is selected
        if (category === 'all') {
            $('.nav__card-img').show();
        } else {
            $('.nav__card-img[data-category="' + category + '"]').show();
        }
    });
});

