// ======================= 스크롤에 따라 움직이는 쿠키
$(document).ready(function () {

    // 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
    var floatPosition = parseInt($(".cookie").css('top'));
    // 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );

    $(window).scroll(function () {
        // 현재 스크롤 위치를 가져온다.
        var scrollTop = $(window).scrollTop();
        var newPosition = scrollTop + floatPosition - "300" + "px";


        $(".cookie").css('top', newPosition);

        // $(".cookie").stop().animate({
        //     "top": newPosition
        // }, 2000);

    }).scroll();

    $(window).scroll(function () {
        if ($(document).scrollTop() > 400) {
            $('.p1').fadeIn(1000);
        };
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 700) {
            $('.p2').fadeIn(1000);
        };
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 898) {
            $('.p3').fadeIn(1000);
        };
    });
    // 마우스 휠다운으로 이미지 변경
    $(window).on("wheel", function (event) {
        // 휠오버다운 확인
        // console.log(event.originalEvent.deltaY);

        if (event.originalEvent.deltaY < 0) {
            $('.cookie img').attr("src", "./src/images/brave-cookie_b.gif");
            // wheeled up
        } else {
            $('.cookie img').attr("src", "./src/images/runningcookie.gif");
            // wheeled down
        };
    });
    // 900을 넘어갔을때 뒷모습으로 이미지 속성 변경
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 1000) {
            $('.cookie').css("top", "870px")
        };

    });
    $(window).scroll(function () {
        if ($(document).scrollTop() <= 400) {
            $('.cookie').css("top", "50")
        };
    });

    // ======================= logo, btnTop 클릭시 최상단
    $(".topbtn").on("click", function () {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 400); // 0.4초
    });

});