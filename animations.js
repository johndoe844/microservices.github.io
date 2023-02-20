
function animOnScroll() {
	for (var i = 0; i < ANIM_ELEMENTS.length; i++) {
		const anim_element = ANIM_ELEMENTS[i];
		const anim_item_height = anim_element.offsetHeight;
		const anim_item_offset = offset(anim_element).top;
		const anim_start = 2;

		let anim_item_point = window.innerHeight - anim_item_height / anim_start;

		if ((pageYOffset > anim_item_offset - anim_item_point ) && pageYOffset < (anim_item_offset + anim_item_height)){
			anim_element.classList.add("_active_anim_on_scroll");
		}
	}
}

function offset(element) {
	const rect = element.getBoundingClientRect(),
		scroll_left = window.pageXOffset || document.documentElement.scrollLeft,
		scroll_top = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scroll_top, left: rect.left + scroll_left }
}

// Запуск анимация при скроле
var ANIM_ELEMENTS = document.querySelectorAll("._anim_on_scroll");
console.log(ANIM_ELEMENTS);
if (ANIM_ELEMENTS.length > 0 )
{
	window.addEventListener('scroll', animOnScroll);
}

animOnScroll();

// Якорное меню
const anchors = document.querySelectorAll('.scroll-to');
console.log(anchors);
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href');
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}
