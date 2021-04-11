const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav = document.querySelectorAll('li');

function navAnimation(dir1, dir2){
    nav.forEach((nav, i)=> {
    nav.classList.replace(`slide-${dir1}-${i+1}`, `slide-${dir2}-${i+1}`);
    })
}

function toggleNav(){
    // toggle: Menu Bars Open/close
    menuBars.classList.toggle('change');
    // toggle: Menu active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')){
        // animate in overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        navAnimation('out', 'in');
    }else{
        //animate out overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        navAnimation('in', 'out');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
nav.forEach(nav=> nav.addEventListener('click', toggleNav));
