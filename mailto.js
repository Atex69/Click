$("#submit").on("click", function() {
    let name = $("#name").val().trim();
    let phone = $("#phone").val().trim();
    let phone1 = $("#phone1").val().trim();

    if(name === "") {
        $("#erconts").text("Введите имя");
        return false;
    } else if ( phone === "" || !phone.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
        $("#erconts").text("Введите номер телефона");
        return false;
    }

    $("#erconts").text("");

    $.ajax({
        url:'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {'name': name,'phone' : phone, 'phone1' : phone1},
        dataType: 'html',
        beforeSend: function () {
            $("#submit").prop("disable", true);
            $("#submit1").prop("disable", true);
            $("#submit2").prop("disable", true);
        },
        success: function (data) {

            if(!data) {
                alert("Были ошибки,  сообщение не отправлено!");
            } else {
                $(".modal").addClass("disable");
                $(".modalGood").addClass("modalGoodEnable");
            }

           $("#mailForm").trigger("reset");

           $("#sendMail").prop("disable", false);


        }
    });
});

$('.head').on('click', function (){
    $('.modal-wrapper').removeClass('open');

    $(".modal").removeClass("disable");
    $(".modalGood").removeClass("modalGoodEnable");

});