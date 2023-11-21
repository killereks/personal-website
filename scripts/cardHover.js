var sounds = {
	pop: new Audio("sounds/pop.ogg"),
	select: new Audio("sounds/ui-select.wav"),
	keystroke1: new Audio("sounds/keystroke-01.wav"),
	keystroke2: new Audio("sounds/keystroke-02.wav"),
	keystroke3: new Audio("sounds/keystroke-03.wav"),
	keystroke4: new Audio("sounds/keystroke-04.wav"),
	keystroke5: new Audio("sounds/keystroke-05.wav"),
	keystroke6: new Audio("sounds/keystroke-06.wav"),
	hide: new Audio("sounds/ui-hide.wav"),
}


function displayExperienceTimes(){
	var now = new Date(Date.now());
	
	var programming = dateDiff(new Date(2014, 10, 7), now);
	
	$('#programming-time').html(`${programming.years} years and ${programming.months} months`);
	
	var unity = dateDiff(new Date(2017, 10, 16), now);
	
	$('#unity-time').html(`${unity.years} years and ${unity.months} months`)

	var last_update_time = dateDiff(new Date(2023, 10, 21, 21, 4), now);

	if (last_update_time.years > 0){
		last_update = MathUtils.Englishfy(last_update_time.years, "year", "years");
	} else if (last_update_time.months > 0){
		last_update = MathUtils.Englishfy(last_update_time.months, "month", "months");
	} else if (last_update_time.days > 0){
		last_update = MathUtils.Englishfy(last_update_time.days, "day", "days");
	} else if (last_update_time.hours > 0){
		last_update = MathUtils.Englishfy(last_update_time.hours, "hour", "hours");
	} else if (last_update_time.minutes > 0){
		last_update = MathUtils.Englishfy(last_update_time.minutes, "minute", "minutes");
	} else {
		last_update = MathUtils.Englishfy(last_update_time.seconds, "second", "seconds");
	}

	$("#last-update-time").html(last_update+" ago");
}
displayExperienceTimes();

$('.hover-card').mousemove(function(e){
	var card = e.target;
	
	if (!card.classList.contains("hover-card")) return;
	
	var coordBox = card.getBoundingClientRect();
	
	var centerPointX = coordBox.x + coordBox.width/2;
	var centerPointY = coordBox.y + coordBox.height/2;
	
	const maxRot = 15;
	
	var rotationFactorY = maxRot / (coordBox.width/2);
	var yRotation = (e.clientX - centerPointX) * rotationFactorY;
	
	var rotationFactorX = maxRot / (coordBox.height/2);
	var xRotation = -(e.clientY - centerPointY) * rotationFactorX;
	
	card.style.cssText = `
transform: rotateY(${yRotation}deg) rotateX(${xRotation}deg) scale(1.1);
z-index: 999;
box-shadow: 0 0 10px black;`;
});

$('.hover-card').mouseout(function(e){
	var card = e.target;
	
	if (!card.classList.contains("hover-card")) return;
	
	card.style.cssText = `transform: rotateY(0) rotateX(0); z-index: 10;`;
})

var typeWriterTimeout;

function openCard(index, imageSrc){	
	var title = info[index].name;
	var desc = info[index].description;
	
	desc += `<div class="ui divider"></div>`+GetListHTML(info[index].features);
	
	$('#modal-title').html(title);
	
	$('#modal').css("opacity", "1");
	$('#modal').addClass("active");
	
	$('#modal-img').attr("src", imageSrc);
	
	$('#modal-footer').html(info[index].link);
	
	typewriter($('#modal-description'), desc);
}

function GetListHTML(list){
	var html = `<div class="ui list">`;
	
	for (var elem of list){
		html += `<div class="item"><i class="plus icon green"></i> ${elem}</div>`
	}
	
	return html +"</div>";
}

function typewriter(target, string){
	if (typeWriterTimeout){
		clearInterval(typeWriterTimeout);
		typewriterTimeout = null;
	}
	
	var index = 0;
	
	var text = "";
	
	var words = string.split(" ");
	
	var modal = $('#modal');
	
	function type(){
		$(target).html(text);
		
		text += words[index]+" ";
		index++;
		
		sounds["keystroke"+random(1,6)].play();
		
		if (index <= words.length && modal.hasClass("active")){
			typewriterTimeout = setTimeout(type, 25);
		}
	}
	
	type();
}

function random(min, max){
	return Math.floor(Math.random() * (max - min) + 1);
}

$('.card').click(function(e){
	var elem = $(this);
	
	setTimeout(function(){
		var index = elem.index();
	
		var img = elem.find("img").attr("src");
		
		sounds.select.play();

		openCard(index, img);
	}, 50)
})

$('.card').mouseenter(function(e){
	sounds.pop.play();
})

$(document).click(function(e){
	if ($('#modal').hasClass("active")){
		closeCard();
		sounds.hide.play();
	}
})

$('#modal').click(function(e){
	closeCard();
	sounds.hide.play();
})

function closeCard(){
	$('#modal').css("opacity", "0");
	$('#modal').removeClass("active");
}
