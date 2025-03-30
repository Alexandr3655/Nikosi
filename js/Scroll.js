(function () {
    let header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

//header_menu

(function () {
	const menuItem = document.querySelector('.menu');
	const menu = document.querySelector('.header_menu');
	const menuCloseItem = document.querySelector('.header_menu_exit');
	menuItem.addEventListener('click', () => {
		menu.classList.add('header_menu_active');	
	});
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header_menu_active');
	});
}());

