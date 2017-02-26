var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var counter;

//game object
var timer = {
	time:30,
	start: function() {
		 counter = setInterval(timer.count,1000);
		 //$('.endScreen').hide();
		 //$('.endScreen').css({visibility:visible});
	},

	count: function() {
		timer.time--;
		var newTime = timer.time;
		$("#timeCounter").html(timer.time);
		
		if (timer.time === 0) {
			$('.endScreen').show();
			timer.checkAnswers();
			$('#startGame').hide();
			$('.content').hide();
			$('.endScreen').css('visibility', 'visible');
			timer.stop();
		}
	},

	reset: function() {
		timer.time = 30;
	},

	stop: function() {
		clearInterval(counter);
	},


	checkAnswers: function() {
		//q1
		if ($("#answer1").is(':checked')) {
			rightAnswers++;
			//$("#rightAnswers").html(" " + rightAnswers);
		} else if ($(".wrong1").is(':checked')) {
			wrongAnswers++;
			//$("#wrongAnswers").html(" " + wrongAnswers);
		} else {
			unanswered++;
			//$("#unanswered").html(" " + unanswered);
		}

		//q2
		if ($("#answer2").is(':checked')) {
			rightAnswers++;
			//$("#rightAnswers").html(" " + rightAnswers);
		} else if ($(".wrong2").is(':checked')) {
			wrongAnswers++;
			//$("#wrongAnswers").html(" " + wrongAnswers);
		} else {
			unanswered++;
			//$("#unanswered").html(" " + unanswered);
		}

		//q3
		if ($("#answer3").is(':checked')) {
			rightAnswers++;
			//$("#rightAnswers").html(" " + rightAnswers);
		} else if ($(".wrong3").is(':checked')) {
			wrongAnswers++;
			//$("#wrongAnswers").html(" " + wrongAnswers);
		} else {
			unanswered++;
			//$("#unanswered").html(" " + unanswered);
		}

		//q4
		if ($("#answer4").is(':checked')) {
			rightAnswers++;
			//$("#rightAnswers").html(" " + rightAnswers);
		} else if ($(".wrong4").is(':checked')) {
			wrongAnswers++;
			//$("#wrongAnswers").html(" " + wrongAnswers);
		} else {
			unanswered++;
			//$("#unanswered").html(" " + unanswered);
		}
		
		$("#rightAnswers").html(" " + rightAnswers);
		$("#wrongAnswers").html(" " + wrongAnswers);
		$("#unanswered").html(" " + unanswered);

	}

};


/*
$(document).ready(function() {
    timer.start();
    $('#submit').on('click', function() {
    	$('.endScreen').hide();
    	timer.checkAnswers();
		
    })
});

*/
$(document).on("click", "#startGame", function() {
timer.start();
$('.endScreen').hide();
$('.content').css('visibility', 'visible');
$('#startGame').hide();
});

$(document).on("click", "#submit", function() {
	$('.endScreen').show();
	timer.checkAnswers();
	$('#startGame').hide();
	$('.content').hide();
	$('.endScreen').css('visibility', 'visible');
	timer.stop();
	//$('.endScreen').show();
});
//timer.checkAnswers();