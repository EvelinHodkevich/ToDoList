// The ul that is already on the page, and the second argument that is
// "li" specifies if we even add others that weren't there when the
// page loaded!!!!!!!!!!!
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	// Removes the parent of the span(span-child; li-parent)
	// "this" refers to the span!!
	$(this).parent().fadeOut(500,function(){
		// "this" refers to the li!!
		$(this).remove();
	});
	// This stops the bubbling of the parent elements
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		// grabbing new todo text from input
		var todoText= $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todoText + "</li>");

	}
});

$(".fa-plus").click(function(){
	$("input[type = 'text'").fadeToggle(500);
});