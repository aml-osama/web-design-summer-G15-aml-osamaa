var img = document.getElementById('myImage');
var btn = document.getElementById('changeBtn');

btn.addEventListener('click', function() {
    if (img.src.includes('id/1015')) {
        img.src = 'https://picsum.photos/id/1040/300/200';
    } else {
        img.src = 'https://picsum.photos/id/1015/300/200';
    }
});