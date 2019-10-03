var masDice = [
	 '<i class="fas fa-dice-one animated rotateIn"></i>',
	 '<i class="fas fa-dice-two animated rotateIn"></i>',
	 '<i class="fas fa-dice-three animated rotateIn"></i>',
	 '<i class="fas fa-dice-four animated rotateIn"></i>',
	 '<i class="fas fa-dice-five animated rotateIn"></i>',
	 '<i class="fas fa-dice-six animated rotateIn"></i>'
]
var reset = false, close = false;
$('#diceU').on('click', () => {
	$('#presentU').remove();
	$('#firstDiceU').removeClass('d-none');
	$('#secondDiceU').removeClass('d-none');
	$('.toast').toast('show');
	$('.alert').html('<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>');
	let resF = Math.floor(Math.random() * 6) + 1;
	let resS = Math.floor(Math.random() * 6) + 1;
	resultU = resF + resS;
	$('#rollStatusU').text(resultU);
	$('#firstDiceU').html(masDice[(resF - 1)]);
	$('#secondDiceU').html(masDice[(resS - 1)]);
	$('.resultU').removeClass('d-none');
	$('.label').append('<div class="spinner-border ml-3 text-light" role="status" style="width: 20px; height: 20px;"><span class="sr-only">Loading...</span></div>');
	setTimeout(AIRoll, 900);
	setTimeout(winnerDetect, 1200);
	reset = true;
});

function AIRoll() {
	$('#presentAI').remove();
	$('#firstDiceAI').removeClass('d-none');
	$('#secondDiceAI').removeClass('d-none');
	$('div[role="status"]').remove();
	$('.resultAI').removeClass('d-none');
	let resF = Math.floor(Math.random() * 6) + 1;
	let resS = Math.floor(Math.random() * 6) + 1;
	resultAI = resF + resS;
	$('#rollStatusAI').text(resultAI);
	$('#firstDiceAI').html(masDice[(resF - 1)]);
	$('#secondDiceAI').html(masDice[(resS - 1)]);
}
var u = 0, ai = 0;
function winnerDetect() {
	$('#clear[data-toggle="tooltip"]').tooltip('show');
	$('.alert').removeClass('d-none');
	if (resultU > resultAI) {
		$('.alert').html('<h1 class="wow jackInTheBox"> Вы победили! </h1>');
		u++;
		$('#score').text(u + ' : ' + ai);
	}
	else if (resultAI > resultU) {
				$('.alert').html('<h1 class="wow jackInTheBox"> ИИ выиграл! </h1>');
				ai++;
				$('#score').text(u + ' : ' + ai);
	}
	else {
		$('.alert').html('<h1 class="wow jackInTheBox"> Ничья! </h1>');
		u++;
		ai++;
		$('#score').text(u + ' : ' + ai);
	}
}
var elem = document.documentElement;
var zoom = true;
$('#zoom').on('click', () => {
	if (zoom && elem.requestFullscreen) {
		elem.requestFullscreen();
		zoom = !zoom;
		$('#main').css({"width": "100%", "height": "100vh"}).removeClass('rounded-lg');
	} else {
			document.exitFullscreen();
			zoom = !zoom;
			$('#main').css({"width": "90%", "height": "90vh"}).addClass('rounded-lg');
	}
});
$('#zoom').on('mouseover', function() {
	if (zoom) {
		$(this).attr('src', 'img/Expand(hover).png');
	}
	else $(this).attr('src', 'img/Resize(hover).png');
});
$('#zoom').on('mouseout', function() {
	$(this).attr('src', 'img/Expand.png');
});
$('#close').on('click', () => {
	if (close) {
		$('#preview').removeClass('d-none');
		$('#game').addClass('d-none');
		$('#main').css("background-color", "#262626");
		$('.image').addClass('animated zoomIn');
		$('.info h1').addClass('animated zoomIn');
		$('#start').addClass('animated fadeIn');
		close = false;
	}
});
$('#close').on('mouseover', function() {
		$(this).attr('src', 'img/Close(hover).png');
});
$('#close').on('mouseout', function() {
	$(this).attr('src', 'img/Close.png');
});
$('#clear').on('mouseover', function() {
		$(this).attr('src', 'img/Minimize(hover).png');
});
$('#clear').on('mouseout', function() {
	$(this).attr('src', 'img/Minimize.png');
});
$('#start').on('click', () => {
	$('#preview').addClass('d-none');
	$('#game').removeClass('d-none');
	$('#main').css("background-color", "#fff");
	$('.image').removeClass('wow zoomIn');
	$('.info h1').removeClass('wow zoomIn');
	$(this).removeClass('wow fadeIn');
	close = true;
});
$('#close').hover(() => {
	$('#close[data-toggle="tooltip"]').tooltip('disable');
});
$('#zoom').hover(() => {
	$('#zoom[data-toggle="tooltip"]').tooltip('disable');
});
$('#clear').hover(() => {
	$('#clear[data-toggle="tooltip"]').tooltip('disable');
});
$('#clear').on('click', () => {
	if (reset) {
		u = 0;
		ai = 0;
		$('#score').text(u + ' : ' + ai);
		$('.alert').empty();
		$('#rollStatusU').text('0');
		$('#rollStatusAI').text('0');
		$('.backU').prepend('<div id="presentU" class="dice mx-auto mr-5 mt-5 text-center h1 pt-3"><i class="fas fa-user-alt animated zoomInDown" data-wow-delay="0.3s"></i></div>');
		$('#firstDiceU').addClass('d-none');
		$('#secondDiceU').addClass('d-none');
		$('.backAI').prepend('<div id="presentAI" class="dice mx-auto mr-5 mt-5 text-center h1 pt-3"><i class="fas fa-desktop animated zoomInDown" data-wow-delay="0.3s"></i></div>');
		$('#firstDiceAI').addClass('d-none');
		$('#secondDiceAI').addClass('d-none');
		reset = false;
	}
});
