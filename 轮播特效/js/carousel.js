
window.onload = function () {
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    // wrap.onmouseover = function () {
    //     animate(arrow, {"opacity": 1});
    // };
    // wrap.onmouseout = function () {
    //     animate(arrow, {"opacity": 0});
    // };

    var config = [
        {
            "width": 500,
            "top": 10,
            "left": 570,
            "opacity": 1,
            "zIndex":2

        },//0
        {
            "width": 500,
            "top": 15,
            "left": 50,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 700,
            "height":500,
            "left": 190,  
            "top": -15,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            'width': 500,
            'top': 13,
            'left': 570,
           'opacity': 0,
            'zIndex': 3
        },//3
        {
            "width": 500,
            "top": 7,
            "left": 720,
            "opacity": 0,
            "zIndex": 2
        },//4
         {
            "width": 500,
            "top": 10,
            "left": 720,
            "opacity": 0,
            "zIndex": 1
        }//5
    ];
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;
            });
        }
    }

    assign();
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            config.push(config.shift());
            assign();
        }

    };
    arrRight.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());
            assign();
        }
    };
    var flag = true;

};