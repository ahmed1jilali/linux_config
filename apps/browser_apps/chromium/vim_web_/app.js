const scrollRate = 50;
const scrollRateSpeed = 100;

var edit_state = false;
var high_light_link_state = false;

var state_indicator = document.createElement('span');
state_indicator.id = "state_indicator";
state_indicator.style.cssText = 'background:red;position: fixed;text-align: center;'+
	'z-index: 999;height: 15px;width: 40px;bottom: 0;font-size: 12px;left: 50%;';
state_indicator.innerHTML = '<span style="color:white;">view</span>';
document.body.appendChild(state_indicator);

// ____________________________________________________________________________________________________

function check_if_key_is_number(key){
	if (key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9' || key === '-' || key === '`'){
		return true;
	}else{ return false; };
};

function choose_link(key){
	if (key === '-'){
		let input = document.getElementById("link_input");
		input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length-1);
	}else if (key === '`'){
		let input = document.getElementById("link_input");
		atags = document.getElementsByTagName("a");
		if (input.innerHTML.length > 0){
			atags[parseInt(input.innerHTML)].style.cssText = "background: black; color:orange;";
			window.location.href = (atags[parseInt(input.innerHTML)].href);
		};

	}else{
		let input = document.getElementById("link_input");
		input.innerHTML += key;
	};
};


// ____________________________________________________________________________________________________

function scrollUp(){document.documentElement.scrollTop -= scrollRate;};

function scrollDown(){document.documentElement.scrollTop += scrollRate;};


function scrollUpSpeed(){document.documentElement.scrollTop -= scrollRateSpeed;};

function scrollDownSpeed(){document.documentElement.scrollTop += scrollRateSpeed;};


function scrollToTop(){window.scrollTo(0, 0);};

function scrollToBottom(){window.scrollTo(0, document.body.scrollHeight);};

// add an input and the number you type and enter chooses the link; press f to exit;
function high_light_link(key){
	high_light_link_state = !high_light_link_state;

	if (high_light_link_state == true){
		atags = document.getElementsByTagName("a");
		for (var i=0; i<atags.length; i++){
			var short_cut_logo = document.createElement('span');
		  	short_cut_logo.id = "link_tags";
		  	short_cut_logo.style = "background: yellow; border: 1px solid black; color: black;"+
		  	"position: relative; text-align: center; padding-right: 2px; padding-left: 2px;"+
		  	"z-index: 999; left: 0; font-size: 10px;";
		  	short_cut_logo.appendChild(document.createTextNode(i));
		  	atags[i].prepend(short_cut_logo);
		};

		var input = document.createElement('span');
		input.id="link_input";
		input.style = "background: yellow; border: 1px solid black; color: black;"+
		"position: fixed; text-align: center; padding-right: 2px; padding-left: 2px;"+
		"z-index: 999; bottom: 0; right: 0; font-size: 10px; width: 100px; height:15px;";
		document.body.appendChild(input);
		/*
		*/

	}else{
		link_tags_rect = document.querySelectorAll("[id='link_tags']");
		for (var i=0; i<link_tags_rect.length; i++){
			link_tags_rect[i].remove();
		};
		input = document.getElementById("link_input");
		input.remove();
	};

};


// ____________________________________________________________________________________________________
function main_key_handling_function(key){
	if (key === 'j'){scrollDown()};
	if (key === 'k'){scrollUp()};
	if (key === 'J'){scrollDownSpeed()};
	if (key === 'K'){scrollUpSpeed()};
	if (key === 't'){scrollToTop()};
	if (key === 'b'){scrollToBottom()};
	if (key === 'f'){high_light_link(key)};
	if (check_if_key_is_number(key)==true && high_light_link_state == true){
		choose_link(key);
	};
};


function change_edit_indicator(){
	if (edit_state == true){
		document.getElementById("state_indicator").style.cssText = 'background:green;position: fixed;'+
		'text-align: center;z-index: 999;height: 15px;width: 40px;bottom: 0;font-size: 12px;left: 50%;';
		document.getElementById("state_indicator").innerHTML = '<span style="color:white">edit</span>';
	}else{
		document.getElementById("state_indicator").style.cssText = 'background:red;position: fixed;'+
		'text-align: center;z-index: 999;height: 15px;width: 40px;bottom: 0;font-size: 12px;left: 50%;';
		document.getElementById("state_indicator").innerHTML = '<span style="color:white">view</span>';
	}
};


document.addEventListener('keydown', function(event){
	if (event.ctrlKey && event.key === 'e'){
		edit_state = !edit_state;
	};

	change_edit_indicator();

	if (edit_state == true){
		main_key_handling_function(event.key);
	};
});
