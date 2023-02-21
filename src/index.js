import './index.css';

const buttonMapAll = document.querySelector('#zone_1'); 
const buttonMapMoscow = document.querySelector('#zone_2');
const buttonMapCenter = document.querySelector('#zone_3');
const buttonMapNorthWest = document.querySelector('#zone_4'); 
const buttonMapSouth = document.querySelector('#zone_5');
const buttonMapVolga = document.querySelector('#zone_6');
const buttonMapUral = document.querySelector('#zone_7');
const buttonMapSibir = document.querySelector('#zone_8');
const buttonMapEast = document.querySelector('#zone_9');  

const pointsMoscow = document.querySelectorAll('.map__moscow'); 
const pointsCenter = document.querySelectorAll('.map__center');
const pointsNorthWest = document.querySelectorAll('.map__north-west');
const pointsSouth = document.querySelectorAll('.map__south');
const pointsVolga = document.querySelectorAll('.map__volga');
const pointsUral = document.querySelectorAll('.map__ural');
const pointsSibir = document.querySelectorAll('.map__sibir');
const pointsEast = document.querySelectorAll('.map__east');

function addMapPoints(item) {
    item.forEach((element) => {
        element.classList.add('map__img-visibility_active');
    });
};


function removeMapPoints(item) {
    item.forEach((element) => {
        element.classList.remove('map__img-visibility_active');
    })
};

buttonMapAll.addEventListener('click', () => {
    addMapPoints(pointsMoscow);
    addMapPoints(pointsCenter);
    addMapPoints(pointsNorthWest);
    addMapPoints(pointsSouth);
    addMapPoints(pointsUral);
    addMapPoints(pointsVolga);
    addMapPoints(pointsSibir);
    addMapPoints(pointsEast);
})

buttonMapMoscow.addEventListener('click', () => {
    addMapPoints(pointsMoscow);

    removeMapPoints(pointsCenter);
    removeMapPoints(pointsNorthWest);
    removeMapPoints(pointsSouth);
    removeMapPoints(pointsVolga);
    removeMapPoints(pointsUral);
    removeMapPoints(pointsSibir);
    removeMapPoints(pointsEast);
});

buttonMapCenter.addEventListener('click', () => {
    addMapPoints(pointsCenter);
    
    removeMapPoints(pointsMoscow);
    removeMapPoints(pointsNorthWest);
    removeMapPoints(pointsSouth);
    removeMapPoints(pointsVolga);
    removeMapPoints(pointsUral);
    removeMapPoints(pointsSibir);
    removeMapPoints(pointsEast);
});

buttonMapNorthWest.addEventListener('click', () => {
    addMapPoints(pointsNorthWest);

    removeMapPoints(pointsMoscow);
    removeMapPoints(pointsCenter);
    removeMapPoints(pointsSouth);
    removeMapPoints(pointsVolga);
    removeMapPoints(pointsUral);
    removeMapPoints(pointsSibir);
    removeMapPoints(pointsEast);
});

buttonMapSouth.addEventListener('click', () => {
    addMapPoints(pointsSouth);
    removeMapPoints(pointsMoscow);
    removeMapPoints(pointsNorthWest);
    removeMapPoints(pointsCenter);
    removeMapPoints(pointsVolga);
    removeMapPoints(pointsUral);
    removeMapPoints(pointsSibir);
    removeMapPoints(pointsEast);
});

buttonMapVolga.addEventListener('click', () => {
    addMapPoints(pointsVolga);
    removeMapPoints(pointsMoscow);
    removeMapPoints(pointsNorthWest);
    removeMapPoints(pointsSouth);
    removeMapPoints(pointsCenter);
    removeMapPoints(pointsUral);
    removeMapPoints(pointsSibir);
    removeMapPoints(pointsEast);
});

buttonMapUral.addEventListener('click', () => {
    addMapPoints(pointsUral);
    removeMapPoints(pointsMoscow);
    removeMapPoints(pointsNorthWest);
    removeMapPoints(pointsSouth);
    removeMapPoints(pointsVolga);
    removeMapPoints(pointsCenter);
    removeMapPoints(pointsSibir);
    removeMapPoints(pointsEast);
});

buttonMapSibir.addEventListener('click', () => {
    addMapPoints(pointsSibir);
    removeMapPoints(pointsMoscow);
    removeMapPoints(pointsNorthWest);
    removeMapPoints(pointsSouth);
    removeMapPoints(pointsVolga);
    removeMapPoints(pointsUral);
    removeMapPoints(pointsCenter);
    removeMapPoints(pointsEast);
});

buttonMapEast.addEventListener('click', () => {
    addMapPoints(pointsEast);
    removeMapPoints(pointsMoscow);
    removeMapPoints(pointsNorthWest);
    removeMapPoints(pointsSouth);
    removeMapPoints(pointsVolga);
    removeMapPoints(pointsUral);
    removeMapPoints(pointsSibir);
    removeMapPoints(pointsCenter);
});

const dropdownButton = document.querySelector('.map__dropdown-button');
const dropdownList = document.querySelector('.map__dropdown-border'); 
const arrowDown = document.querySelector('.map__dropdown-shape');
const arrowUp = document.querySelector('.map__dropdown-shape-up')


function showDropdownList() {
    dropdownList.classList.add('map__dropdown-border_active');
    arrowDown.classList.add('map__dropdown-shape_hidden');
    arrowUp.classList.add('map__dropdown-shape-up_visible');
    // console.log(arrowUp);
}

function hideDropdownList() {
    dropdownList.classList.remove('map__dropdown-border_active');
    arrowUp.classList.remove('map__dropdown-shape-up_visible');
    arrowDown.classList.remove('map__dropdown-shape_hidden');
}


dropdownButton.addEventListener('click', () => {
    if(dropdownList.classList.contains('map__dropdown-border_active')) {
        hideDropdownList();
    }
    else showDropdownList();
});



// let offset = 0;
const sliderLine = document.querySelector('.company__slider-container');

let position = 0;
let indicatorIndex = 0;

const companyButtonForward = document.querySelector('.company__button_forward');
const companyButtonBack = document.querySelector('.company__button_back');
const sliderIndicators = document.querySelectorAll('.company__pag-line');


const nextSlide = () => {
    if(position < (sliderIndicators.length - 1) * 100) {
        position = position + 100;
        indicatorIndex++;
    }
    else {
        position = 0;
        indicatorIndex = 0;
    }

    sliderLine.style.left = -position + '%';
    indicatorSlide(indicatorIndex); 
};

const prevSlide = () => {
    if(position > 0) {
        position = position - 100;
        indicatorIndex--;
    }

    else {
        position = (sliderIndicators.length - 1) * 100;
        indicatorIndex = sliderIndicators.length - 1;
    }

    sliderLine.style.left = -position + '%';
    indicatorSlide(indicatorIndex); 
}

const indicatorSlide = (index) => {
    for(let sliderIndicator of sliderIndicators) {
        sliderIndicator.classList.remove('company__pag-line_active');
    }
    sliderIndicators[index].classList.add('company__pag-line_active')
}


companyButtonForward.addEventListener('click', nextSlide); 
companyButtonBack.addEventListener('click', prevSlide); 

sliderIndicators.forEach((sliderIndicator, index) => {
    sliderIndicator.addEventListener('click', () => {
        position = 100 * index;
        sliderLine.style.left = -position + '%';
        indicatorIndex = index;
        indicatorSlide(indicatorIndex); 
    })
})

// companyButtonForward.addEventListener('click', () => {
//     offset = offset + 100;
//     if(offset > 300) {
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + '%';
// });

// companyButtonBack.addEventListener('click', () => {
//     offset = offset - 100;
//     if(offset < 0) {
//         offset = 300;
//     }
//     sliderLine.style.left = -offset + '%';
// });
