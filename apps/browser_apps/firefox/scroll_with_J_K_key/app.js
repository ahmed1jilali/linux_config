function change_a_tag_color(){
	const atags = document.getElementsByTagName("a");
	for (var i=0; i < atags.length ; i++){
		atags[i].style.color = "orange";
		//atags[i].appendChild(document.createTextNode("JoJo"));
	};
};

function scrollUp(){
	document.documentElement.scrollTop -= 30;
};

function scrollDown(){
	document.documentElement.scrollTop += 30;
};

document.onkeydown = function(e){
	e = e || window.event;
	var key = e.which || e.keyCode;
	// the_j_key
	if (key === 74){
		scrollDown();
	};
	// the_k_key
	if (key === 75){
		scrollUp();
	};

	if (key === 70){
		change_a_tag_color();
	};
};

