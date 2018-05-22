$(document).ready(function() {

	$('.action-button, .reg-button').click(function(e) {
		$('.modal-container').fadeIn(150);
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