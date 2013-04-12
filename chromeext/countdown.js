function timer(time,update,complete) {
    var start = new Date().getTime();
    var interval = setInterval(function() {
        var now = time-(new Date().getTime()-start);
        if( now <= 1) {
            clearInterval(interval);
            complete();
        }
        else update(Math.floor(now/1000));
    },100); // the smaller this number, the more accurate the timer will be
}

timer(
    5000, // milliseconds
    function(timeleft) { // called every step to update the visible countdown
        document.getElementById('count').innerHTML = timeleft+" ";
    },
    function() { // what to do after
		document.getElementById('count').innerHTML = "Savior contacted!";
		setTimeout(function () {
			window.close();
		}, 1000);
    }
);