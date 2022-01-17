
// Open and Close Header Menu
    const menuHeader = document.querySelector('.menu-js');
    const appearMenuHeader = document.querySelector('.appear-js')
    const btnCloses = document.querySelectorAll('.disappear-js')


    function openMenuHeader() {
        appearMenuHeader.classList.add('open-menu');
        appearMenuHeader.classList.remove('close-menu');
    };

    function closeMenuHeader() {
        btnCloses.forEach((btnClose, index) => {
            btnClose.onclick = function() {
                appearMenuHeader.classList.remove('open-menu');
                appearMenuHeader.classList.add('close-menu');
            }
        })
    }

    closeMenuHeader();

    menuHeader.addEventListener('click', openMenuHeader);
    


// Switch Img Contain Book Ticket


    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const images = $$('.contain__book-img');
    const lines = $$('.contain__book-line-change');




    

// Auto Change Img

    var num = 0;
    var arrayLineLength = lines.length;
    
    function removeClassActive() {
        lines[num].classList.remove('active')
        images[num].classList.remove('active')

    }


    function addClassActive() {
        if(num < arrayLineLength - 1) {
            lines[++num].classList.add('active')
            images[num].classList.add('active')

        } else {
            num = 0;
            lines[num].classList.add('active')
            images[num].classList.add('active')
        }  
    }

    function autoChangeImg() {
        removeClassActive();
        addClassActive();
    }
    
    ;(function handleChangeImg() {
        let flag = false
        // Click Event
        lines.forEach((line, index) => {
            const image = images[index];
            line.onclick = function() {
                flag = true
                if(flag) {
                    $('.contain__book-line-change.active').classList.remove('active');
                    $('.contain__book-img.active').classList.remove('active');

                    line.classList.add('active');
                    image.classList.add('active');
                }
            }

        })

        if(!flag) {
            setInterval(autoChangeImg, 15000)
        }
    })()
    


// Slider Scroll

const sliderImg = $('.slider__background-img');

document.onscroll = function() {
    const scrollTop = Math.floor(window.scrollY || document.documentElement.scrollTop);

    const newSliderWidth = (-37 + (scrollTop*5)/100) + '%';

    sliderImg.style.top =  newSliderWidth < 0 + '%' ? newSliderWidth : 0 + '%';

}