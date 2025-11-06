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

const h1 = document.querySelector('h1');
if (h1) {
    const text = h1.textContent;
    const newText = text.split('').map(char => `<span>${char}</span>`).join('');
    h1.innerHTML = newText;

    h1.addEventListener('mouseover', function(event) {
        if (event.target.tagName === 'SPAN') {
            event.target.classList.add('hovered');
        }
    });

    h1.addEventListener('mouseout', function(event) {
        if (event.target.tagName === 'SPAN') {
            event.target.classList.remove('hovered');
        }
    });

    h1.addEventListener('touchstart', function(event) {
        if (event.target.tagName === 'SPAN') {
            event.target.classList.add('hovered');
        }
    });

    h1.addEventListener('touchend', function(event) {
        if (event.target.tagName === 'SPAN') {
            event.target.classList.remove('hovered');
        }
    });
}

