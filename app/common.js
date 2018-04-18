
	$(".dropdown").click(function() {
		$(this).next().slideToggle();
	});

	$(".dropdown-subsection-button").click(function() {
		$(".dropdown-subsection").slideToggle();
	});


//============language==============================

	$(document).ready(function(){
	$(".language_current").click(function(){
		$(".language_list").slideDown(100);
	});

	$(".language_list a").click(function(event){
	  event.preventDefault();
	  $(".language_list").slideUp(100);
	  $(".language_current").html($(this).html());
	});
});

	$(document).ready(function(){
	$(".language-header_current").click(function(){
		$(".language-header_list").slideDown(100);
	});

	$(".language-header_list a").click(function(event){
	  event.preventDefault();
	  $(".language-header_list").slideUp(100);
	  $(".language-header_current").html($(this).html());
	});
});


//================================tooltip===================
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
