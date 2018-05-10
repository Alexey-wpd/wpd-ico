
	$(".dropdown").click(function() {
		$(this).next().slideToggle();
	});

	$(".dropdown-subsection-button").click(function() {
		$(".dropdown-subsection").slideToggle();
	});

	$(".portfolio_item-dropdown").click(function() {
		$(".portfolio_dropdown").slideToggle();
	});

	$(".js-replies-dropdown").click(function() {
		$(".user-reviews_item-replies").slideToggle();
	});

	$(".js-hide-details").click(function() {
		$(".table-score-wrapper").slideToggle();
	});

	$(".js-show-more-category").click(function() {
		$(".js-choosing-form_category--hidden").slideToggle();
	});

	$(".js-show-more-overall-score").click(function() {
		$(".js-choosing-form_overall-score--hidden").slideToggle();
	});

	$(".js-show-more-team-score").click(function() {
		$(".js-choosing-form_team-score--hidden").slideToggle();
	});

	$(".js-show-more-platforms").click(function() {
		$(".js-choosing-form_platforms--hidden").slideToggle();
	});

	$(".js-show-more-exchanges").click(function() {
		$(".js-choosing-form_exchanges--hidden").slideToggle();
	});

	$(".js-show-exchanges").click(function() {
		$(".js-choosing-form_list--hidden").slideToggle();
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

//==============================POPOVER================//

$(function(){
    // Enables popover
    $("[data-toggle=popover]").popover({
    	html: true,
    	content: $('#popover')
    });
});


//======================COLLAPSE==============

  var linkRestore = document.querySelector(".js-restore");
  var linkCollapse = document.querySelector(".js-collapse");
  var slider = document.querySelector(".header_slider");
  var collapse = document.querySelector(".header_collapse");

  linkRestore.addEventListener("click", function(event) {
    event.preventDefault();
    slider.classList.add("header_slider--show");
    collapse.classList.add("header_collapse--close");
  });

  linkCollapse.addEventListener("click", function(event) {
    event.preventDefault();
    slider.classList.add("header_slider--close");
    collapse.classList.add("header_collapse--show");
  });
