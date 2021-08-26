const slide = () => {
    const bar = document.querySelector('.bar');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    bar.addEventListener('click',() => {
        //Navigation Toggle
        nav.classList.toggle('nav-active');

        //Links Animation 
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = 'navFade 0.5s ease forwards ${index / 7 + 0.5}s';
            }
        });

        //Bar Animation 
        bar.classList.toggle('toggle');
    });
}

slide();