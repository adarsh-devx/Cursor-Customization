const customCursor = document.querySelector('.cursor');
if (customCursor) {
    window.addEventListener('mousemove', function (event) {
        customCursor.style.left = event.clientX + 'px'; 
        customCursor.style.top = event.clientY + 'px'; 
    });
    window.addEventListener('mousedown', function () {
        customCursor.classList.add('clicking');
    });
    window.addEventListener('mouseup', function () {
        customCursor.classList.remove('clicking');
    });
}