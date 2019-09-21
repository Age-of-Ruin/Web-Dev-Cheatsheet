$(document).ready(function(){ // ALL JQUERY METHODS GO INTO A DOCUMENT READY EVENT
	$("#click").click(function(){
		alert("You clicked the button!");
	});
	
	$("p").on({ // The on() method attaches one or more event handlers
	mouseenter: function(){
		$(this).css("background-color", "lightgray");
	},  
	mouseleave: function(){
		$(this).css("background-color", "lightblue");
	}, 
	click: function(){
		$(this).css("background-color", "yellow");
	}  
	});
});

// Basic Syntax: $(selector).action()

/* Selectors

Normal: p:first, ul li:first, etc.
ID: #test
Class: p.test 

*/

/* Events

Mouse Events	Keyboard Events		Form Events		Document/Window Events

click			keypress			submit			load
dblclick		keydown				change			resize
mouseenter		keyup				focus			scroll
mouseleave	 						blur			unload
mousedown
mouseup
*/

