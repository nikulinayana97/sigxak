$(document).ready( function() {   
// isotop setup
 	$('.b-portfolio').isotope({
 		itemSelector: '.b-portfolio__b-img',
 	});

// filter setup
	$('.filters').on( 'click', 'li', function() {
		event.preventDefault();
		var filterValue = $(this).attr('data-filter');
		$('.b-portfolio').isotope({ filter: filterValue });
		$('.filters li').removeClass('active');
		$(this).addClass('active');
	});
});

// form validation
$('.b-contact').on('submit', function(e){
  
    // отменяем действие по умолчанию (делаем так что бы страница не перезагружалась)
    e.preventDefault();

    // записываем инпуты которые нужно валидировать в переменные
    let inputEmail = $('#email'),
        inputName = $('#name');
        inputMessage = $('#msg')
        
        
    // прячем все сообщения об ошибках
    $('.form--error').css('display', 'none');

    // создаем регулярное выражение проверки email
    let validateEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    let validateMsg = /^[A-Za-zА-Яа-яЁё]{5,}$/
    
    // проверяем если значение инпута не является имейлом
    if (!validateEmail.test(inputEmail.val())){
        // делаем блок с описание ошибки под инпутом видимым
        inputEmail.closest('.form__control').find('.form--error').css('display', 'block')
    }
    
    // потом проверяем блок на пустоту, это же можем сделать просто 
    // добавив к инпуту аттрибут required (но в этом случае мы не сможем показать свою ошибку, разве что только с помощью css)
    if( inputName.val() === '' ){
        // делаем блок с описание ошибки под инпутом видимым
        inputName.closest('.form__control').find('.form--error').css('display', 'block')
    }

    if ( inputMessage.val() === '' ){
        // делаем блок с описание ошибки под инпутом видимым
        inputMessage.closest('.form__control').find('.form--error').css('display', 'block')
    }
})




