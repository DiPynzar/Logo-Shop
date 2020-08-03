function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();

$(document).ready(function() {
	$('.icon-menu').click(function(event) { 
		$('.icon-menu,.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});



@@include('dynamic_adapt.js', {});

let menuParents = document.querySelectorAll('.menu-page__parent');

for (let i=0; i < menuParents.length; i++) {
	const menuParent = menuParents[i];
	menuParent.addEventListener('mouseenter', function(e) {
		menuParent.classList.add('_active');
	});
	menuParent.addEventListener('mouseleave', function(e) {
		menuParent.classList.remove('_active');
	});
}

let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBurger.addEventListener('click', function(e) {
	menuPageBurger.classList.toggle('active');
	menuPageBody.classList.toggle('active');
	// _slideToggle(menuPageBody);
});

// let searchTitle = document.querySelector('.searh-page__title');
// let categorieSearch = document.querySelector('.categories-search');
// searchTitle.addEventListener('click', function(e) {
// 	searchTitle.classList.toggle('active');
// 	// _slideToggle(categorieSearch);

// });

// let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');
// for (let i=0; i < categoriesCheckbox.length; i++) {
// 	const checkboxCategory = checkboxCategories[i];
// 	checkboxCategory.addEventListener('change', function(e) {
// 		checkboxCategory.classList.toggle('active');
// 		let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox.active');

// 		if (checkboxActiveCategories.length > 0) {
// 			searchTitle.classList.add('_categories');
// 			let searchQuantity = searchTitle.querySelector('.search-page__quantity')
// 			searchQuantity.innerHTML = searchQuantity.getAttribute('.data-text') + ' ' + checkboxActiveCategories.length;
// 		} else {
// 			searchTitle.classList.remove('_categories');
// 		}
// 	});
// }
