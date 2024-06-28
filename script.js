var colour = $(".selected").css("background-color");
var $canvas = $("#mainCanvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

// When clicking on colours items
$(".controls").on("click", "li", function () {
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
    colour = $(this).css("background-color");
});

// When New colour is pressed by user
$("#revealColorSelect").click(function () {
    changeColor();
    $("#colorSelect").toggle();
});

// Update the new colour span
function changeColor() {
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

// When new colour sliders change
$("input[type=range]").change(changeColor);

// When add colour is pressed
$("#addNewColor").click(function () {
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $(".controls ul").append($newColor);
    $newColor.click();
});

// On mouse events on the canvas
$canvas.mousedown(function (e) {
    lastEvent = e;
    mouseDown = true;
}).mousemove(function (e) {
    if (mouseDown) {
        draw(e.offsetX, e.offsetY);
    }
}).mouseup(function () {
    mouseDown = false;
}).mouseleave(function () {
    mouseDown = false;
});

// On touch events on the canvas
$canvas.on('touchstart', function (e) {
    var touch = e.originalEvent.touches[0];
    lastEvent = {
        offsetX: touch.pageX - $canvas.offset().left,
        offsetY: touch.pageY - $canvas.offset().top
    };
    mouseDown = true;
}).on('touchmove', function (e) {
    var touch = e.originalEvent.touches[0];
    if (mouseDown) {
        draw(touch.pageX - $canvas.offset().left, touch.pageY - $canvas.offset().top);
    }
    e.preventDefault();
}).on('touchend', function () {
    mouseDown = false;
});

// Draw function
function draw(x, y) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(x, y);
    context.strokeStyle = colour;
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.stroke();
    lastEvent = { offsetX: x, offsetY: y };
}

// Clear the canvas when button is clicked
function clear_canvas_width() {
    var s = document.getElementById("mainCanvas");
    var w = s.width;
    s.width = 10;
    s.width = w;
}
