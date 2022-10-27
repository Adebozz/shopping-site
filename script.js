const bar = document.getElementsByClassName('open')[0];
const menu = document.getElementsByClassName('move')[0];
const bars = document.getElementsByClassName('bar')[0];
const close = document.getElementsByClassName('close')[0];


if (bar) {
    bar.addEventListener('click', () => {
        menu.style.right= '0px';
        bars.style.display= 'none';
        
    })
}
if(close){
    close.addEventListener('click', () => {
        menu.style.right= '-300px';
        bars.style.display= 'flex';
        
    })
}

function slide() {
    document.getElementsByClassName('drop')[0].style.display= 'flex';
}
function slideOut() {
    
    document.getElementsByClassName('drop')[0].style.display= 'none';
}
