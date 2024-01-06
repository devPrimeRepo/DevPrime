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



