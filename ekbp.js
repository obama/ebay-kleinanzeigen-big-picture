var activeImg = document.querySelector('.ad-image-on img');
var wrapper = document.querySelector('.ad-gallery-horizontal--imagecontainer');
let bigImage = new Image();
if (wrapper !== null) {
    wrapper.addEventListener('mouseenter', (e) => {
        activeImg = document.querySelector('.ad-image-on img');
        activeImg.style.display = 'none';
        // replace URL with higher resolution url
        let imgUrl = activeImg.src.split('$');
        imgUrl = imgUrl.slice(0, imgUrl.length-1).concat(['_57.JPG']).join('$');
        if (bigImage.src != imgUrl) {
            bigImage.src = imgUrl;
        }
        wrapper.style.backgroundImage = `url("${imgUrl}")`;
        wrapper.style.backgroundSize = 'auto auto';
    });
    wrapper.addEventListener('mouseleave', (e) => {
        activeImg.style.display = 'inline';
        wrapper.style.backgroundImage = '';
    });
    wrapper.addEventListener('mousemove', (e) => {
        let mX = e.layerX / wrapper.clientWidth;
        let mY = e.layerY / wrapper.clientHeight;
        wrapper.style.backgroundPosition = `${-mX*(bigImage.width-wrapper.clientWidth)}px ${-mY*(bigImage.height-wrapper.clientHeight)}px`;
    });
}
else {
    console.log('no image found')
}