$(document).ready(function(){

    function toggleDoorImage() {
        var door = $("#door");
        if (door.attr("src") === "media/images/door2.png") {
            door.attr("src", "media/images/door3.png");
        }
    }

    function playAudio() {
        document.getElementById('phonering').currentTime = 0;
        document.getElementById('phonering').play();
    }

    $("#door").mouseenter(function(){
        $(this).attr("src", "media/images/door2.png");
        $("h3").text("🌞: Is someone at the door?");
    }).mouseleave(function(){
        $(this).attr("src", "media/images/door2.png");
        $("h3").text("");
    }).click(function(){
        toggleDoorImage();
    });

    $("#fridge").mouseenter(function(){
        $(this).attr("src", "media/images/fridge2.png");
        $("h3").text("🌽 We 🍅 have 🧀 so 🥕 many 🥚 ingredients 🥩 to 🍞 cook 🌶️ with! 🧂");
    }).mouseleave(function(){
        $(this).attr("src", "media/images/fridge.png");
        $("h3").text("");
    });

    $("#phone").mouseenter(function(){
        $(this).attr("src", "media/images/phone2.png");
        $("h4").text("Pick up the phone?");
    }).mouseleave(function(){
        $(this).attr("src", "media/images/phone.png");
        $("h4").text("Pick up the phone?");
    }).click(function(){
        $("#phone").attr("src", "media/images/scene1.png");
        $("h4").text("You call up your pal, Olky.");
    });

    setInterval(playAudio, 8000);
});