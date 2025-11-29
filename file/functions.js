// Responsive reload
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

// Typewriter effect
(function($) {
    $.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this),
                str = $ele.html(),
                progress = 0;
            $ele.html('');
            var timer = setInterval(function() {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 75);
        });
        return this;
    };
})(jQuery);

// Function to calculate time since birthday
function timeElapse(date) {
    var start = new Date(date);
    var now = new Date();
    var seconds = Math.floor((now - start) / 1000);

    var days = Math.floor(seconds / (3600 * 24));
    seconds %= 3600 * 24;

    var hours = Math.floor(seconds / 3600);
    if (hours < 10) hours = "0" + hours;

    seconds %= 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) minutes = "0" + minutes;

    var secs = seconds % 60;
    if (secs < 10) secs = "0" + secs;

    var result = days + " Days <span class='digit'>" + hours + "</span> Hours <span class='digit'>" + minutes + "</span> Minutes <span class='digit'>" + secs + "</span> Seconds";
    $("#clock").html(result);

    var text = "THE WORLD JUST GOT LUCKIER SINCE 10 DEC 2005 🎂";
    $("#message-box").html(text);
}

// Update the clock every second
setInterval(function() {
    timeElapse("2005-12-10");
}, 1000);

// Initial call
timeElapse("2005-12-10");

}
