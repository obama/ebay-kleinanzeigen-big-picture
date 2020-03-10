var activeImg = document.querySelector('.current #viewad-image');
var wrapper = document.querySelector('.galleryimage-large');
let bigImage = new Image();
if (wrapper !== null) {
    wrapper.addEventListener('mouseenter', (e) => {
        activeImg = document.querySelector('.current #viewad-image');
        activeImg.style.display = 'none';
        // replace URL with higher resolution url
        let imgUrl = activeImg.src.split('$');
        imgUrl = imgUrl.slice(0, imgUrl.length-1).concat(['_57.JPG']).join('$');
        if (bigImage.src != imgUrl) {
            bigImage.src = imgUrl;
        }
        wrapper.style.backgroundImage = `url("${imgUrl}")`;
        wrapper.style.backgroundSize = 'auto auto';
        // remove annoying overlay
        document.querySelector('.current .galleryimage-large--cover').style.backgroundImage = '';
    });
    wrapper.addEventListener('mouseleave', (e) => {
        activeImg.style.display = 'inline';
        wrapper.style.backgroundImage = '';
    });
    wrapper.addEventListener('mousemove', (e) => {
        let r = wrapper.getBoundingClientRect();
        let mX = (e.clientX - r.left) / wrapper.clientWidth;
        let mY = (e.clientY - r.top) / wrapper.clientHeight;
        wrapper.style.backgroundPosition = `${-mX*(bigImage.width-wrapper.clientWidth)}px ${-mY*(bigImage.height-wrapper.clientHeight)}px`;
    });
    wrapper.addEventListener('click', (e) => {
        wrapper.dispatchEvent(new Event('mouseleave'));
        wrapper.dispatchEvent(new Event('mouseenter'));
    });
}
else {
    console.log('no image found')
}