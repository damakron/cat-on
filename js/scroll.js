//indentificar o cique
//verificar o item que foi clicado e fazer referencia com o alvo
//verificar a distancia entre o alvo e o topo
//animar o scroll

// jquery do nav
$('nav a, a #contato').click(function(e){
    e.preventDefault();
	var id = $(this).attr('href'),
		targetOffset = $(id).offset().top,
		menuHeight = $('nav').innerHeight();

		$('html, body').animate({
			scrollTop: targetOffset - (menuHeight + 30)
		}, 500)
});

// jquery do botão
$('a.btn').click(function(but){
    but.preventDefault();
	var id = $(this).attr('href'),
		targetOffset = $(id).offset().top,
		menuHeight = $('a.btn').innerHeight();

		$('html, body').animate({
			scrollTop: targetOffset - (menuHeight + 30)
		}, 500)
});

