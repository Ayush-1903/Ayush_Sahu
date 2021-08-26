$('.nav-links a').on('click', function(e){
    if(this.hash !== '') {
        e.preventDefault();
        
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 
        900
        );
    }
})

$('.wrapper1 a').on('click', function(e){
    if(this.hash !== '') {
        e.preventDefault();
        
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 
        900
        );
    }
})
