var section = document.querySelectorAll('section');
var header = document.querySelectorAll('.header__link');

window.onscroll = function() {
    section.forEach(function(item) {
        var top = window.scrollY;
        var offset = item.offsetTop - 50;
        var height = item.offsetHeight;
        let id = item.getAttribute('id');
        if(top > offset && top < offset+height) {
            header.forEach(function(header) {
                header.classList.remove('active');
                document.querySelector('.header__link[href*='+id+']').classList.add('active')
            })
        }
    })
}
