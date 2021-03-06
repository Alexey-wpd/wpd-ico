
	$(".dropdown").click(function() {
		$(this).next().slideToggle();
	});

	$(".js-dropdown-subsection-button").click(function() {
		$(".js-dropdown-subsection").slideToggle();
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

	$(".js-thead-show").click(function() {
		$(".js-tbody").slideToggle();
		$(".js-tfoot").slideToggle();
	});

	$(".js-share-social-dropdown").click(function() {
		$(".user-reviews_item-social").slideToggle();
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



  // In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
    $('.js-example-basic-single').select2();
});
