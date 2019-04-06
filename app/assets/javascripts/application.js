//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	$(".jquery").on("click", function(){
		$(this).css("color","red");
	});
});