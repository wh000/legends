var pg_count = 0;

var links = {
    1: "../../chapter1.html",
    2: "../../chapter2.html"
};

$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('.menu-item').on('click', function () {

        $('.content').load($(this).attr("chp-path"));
        pg_count = $(this).attr("chp-no");
    });

    $('.font-size-item').on('click', function () {
        $(".font-size-item").each(function (index) {
            $(this).removeClass('active');
        });

        $(this).addClass('active');


        $(".content").css("font-size", $(this).attr("data-font-size") + "em");

    });

    $(".bottom-page-nav-backward").on('click', function () {
        console.log("backwards");
        if (pg_count >= 2){
            pg_count -= 1;
            $('.content').load(links[pg_count]);
        }
    });

    $(".bottom-page-nav-forward").on('click', function () {
        console.log("forwards");
        if (pg_count <= 1){
            pg_count += 1;
            $('.content').load(links[pg_count]);
        }
    });

    $(".reading-mode-btn").on('click', function () {
        console.log("woowwow");

        var $this = $(this);
        $this.toggleClass('night-mode');
        if ($this.hasClass('night-mode')) {
            $this.text('Day Mode  ');
            $("body").css("background-color", "black");
            $("#right-col").css("background-color", "black");
            $(".content").css("color", "#fafafa");           

        } else {
            $this.text('Night Mode');
            $("#right-col").css("background-color", "white");
            $("body").css("background-color", "white");
            $(".content").css("color", "black");
        }

        $(".separator-foreword").each(function (index) {
            $(this).toggleClass('night-mode');
        });
        $(".separator").each(function (index) {
            $(this).toggleClass('night-mode');
        });
    });

});

