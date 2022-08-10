var photos = document.getElementsByClassName('main-photo');
setInterval(main_anim, 5000);
var photo_number = 0;
function main_anim(){
    photos[photo_number].classList.remove('main-photo_first');
    photo_number++;
    if (photo_number > (photos.length - 1)){
        photo_number = 0;
    }
    photos[photo_number].classList.add('main-photo_first');
}