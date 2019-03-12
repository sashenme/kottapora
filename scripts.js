//Streangth of players
var userStreangth = 10;
var comStreangth = 20;

user = $("#user-Streangth");
com = $("#com-Streangth");

//Commands
var cmdHit;
var cmdStay;
var cmdCover;

//update streangth 

function updateSteanth() {
    user.html(userStreangth);
    com.html(comStreangth);

    if (userStreangth < 1) {
        clearInterval(computerHitting);
        // alert("Game Over: Computer won!");
        $(".user-player").css({"background-image": "url('img/user-down.png')", "top":"369px"});
        setTimeout(function(){
            $(".com-player").css("background-image", "url('img/com-win.png')");
        },300);
        $(".controls").hide();
        
    }
    if (comStreangth < 1) {
        // alert("Game Over: User won!");
        clearInterval(computerHitting);
        
        $(".com-player").css({"background-image": "url('img/com-down.png')", "top":"369px"});
        setTimeout(function(){
            $(".user-player").css("background-image", "url('img/user-win.png')");
        },300);

        $(".controls").hide();
    }
}


//userClick()
function userClick() {
    $(".user-cmd").click(function () {
        userCmd = $(this).attr("data-value");
        userCurrentCmd = userCmd;
        $(".user-rt-cmd").html(userCurrentCmd);
        $(".user-player").css("background-image", "url('img/user-" + userCurrentCmd + ".png')");
        setTimeout(function () {
            userCurrentCmd = 0;
            $(".user-rt-cmd").html(userCurrentCmd);
            $(".user-player").css("background-image", "url('img/user-" + userCurrentCmd + ".png')");
        }, 300);

    });
}


//com command random
function comCommands() {
    computerHitting = setInterval(function () {
        randomCmd = Math.floor((Math.random() * 2) + 1);
        comCurrentCmd = randomCmd;
        $(".com-rt-cmd").html(comCurrentCmd);
        $(".com-player").css("background-image", "url('img/com-" + comCurrentCmd + ".png')");
        setTimeout(function () {
            comCurrentCmd = 0;
            $(".com-rt-cmd").html(comCurrentCmd);
            $(".com-player").css("background-image", "url('img/com-" + comCurrentCmd + ".png')");
        }, 200);
    }, 1000);
}


//Change Streangth

function hitHitHit() {
    userHit = parseInt($(".user-rt-cmd").html());
    comHit = parseInt($(".com-rt-cmd").html());


    if (userHit == 1 && comHit == 1) {
        userStreangth = userStreangth - 1;
        comStreangth = comStreangth - 1;

    } else if (userHit == 1 && comHit == 2) {
        userStreangth = userStreangth;
        comStreangth = comStreangth;
    } else if (userHit == 1 && comHit == 0) {
        userStreangth = userStreangth;
        comStreangth = comStreangth - 1;
    }

    else if (userHit == 2 && comHit == 0) {
        userStreangth = userStreangth;
        comStreangth = comStreangth;
    }
    else if (userHit == 2 && comHit == 1) {
        userStreangth = userStreangth;
        comStreangth = comStreangth;
    }
    else if (userHit == 2 && comHit == 2) {
        userStreangth = userStreangth;
        comStreangth = comStreangth;
    }

    else if (userHit == 0 && comHit == 1) {
        userStreangth = userStreangth - 1;
        comStreangth = comStreangth;
    }
    else if (userHit == 0 && comHit == 2) {
        userStreangth = userStreangth;
        comStreangth = comStreangth;
    }
    else if (userHit == 0 && comHit == 0) {
        userStreangth = userStreangth;
        comStreangth = comStreangth;
    }
    updateSteanth();
}



$(document).ready(function () {
    updateSteanth();

    comCommands();
    userClick();
    $(".com-rt-cmd").bind('DOMSubtreeModified', function () {
        hitHitHit();
    });
    $(".user-rt-cmd").bind('DOMSubtreeModified', function () {
        hitHitHit();
    });

});