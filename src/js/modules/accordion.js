const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {

            if (this.classList.contains('active-style' = false)) {
            for (var i = 0; i < btns.length; i++){
                btns[i].classList.remove('active-style');
                btns[i].nextElementSibling.classList.remove('active-content');
                btns[i].nextElementSibling.style.maxHeight = '0px';
            }
        }
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });
    //       blocks = document.querySelectorAll(itemsSelector);

    // blocks.forEach(block => {
    //     block.classList.add = ('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if(!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
};

export default accordion;