$(document).ready(function() {

	if (window.matchMedia('(max-width: 500px)').matches) {
		var lastScrollTop = 0;

		$(window).scroll(function(event){
		   var st = $(this).scrollTop();

		   if (st > lastScrollTop && lastScrollTop !== 0){
		       // downscroll code
		       $(".header").addClass("hideUp");
		   } else {
		      // upscroll code
		      $(".header").removeClass("hideUp");
		   }
		   lastScrollTop = st;
		});
	}

	$('.footer-privacy').click(function(e) {
		$('.modal-container.privacy').fadeIn(150);
		e.preventDefault();
	});

	$('.action-button, .reg-button').click(function(e) {
		$('.modal-container.registration').fadeIn(150);
		e.preventDefault();
	});

	$('.login-button').click(function(e) {
		$('.modal-container.login').fadeIn(150);
		e.preventDefault();
	});

	$('.footer-action-button').click(function(e) {
		$('.modal-container.request').fadeIn(150);
		e.preventDefault();
	});

	$('.modal-back-btn').click(function() {
		$(this).closest('.modal-container').fadeOut(150);
	});

	//form
	 $("form").submit(function (e) {
		$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			});
			return false;
	 });

	 /*scrollToLink*/
	$('a[href^="#"], a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
		 var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
			 if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
		 $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800); // анимируем скроолинг к элементу scroll_el
			 }
		 return false; // выключаем стандартное действие
	 });

});