const btnMore = document.querySelector('.more')
const moreInfo = document.querySelector('.more-info')
const quotes = document.querySelector('.quotes')
const clockBody = document.querySelector('.clock-body')
const btnChangeQuote = document.querySelector('.btn-change-quote')
const arrowDown = document.querySelector('.arrow-down');
const arrowUp = document.querySelector('.arrow-up');
const moreTxt = document.querySelector('.more-txt');
const quoteRandom = document.querySelector('.quote-random');
const quoteRandom2 = document.querySelector('.quote-random2');

const URL = 'https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731';


const showMoreInfo = () => {

    moreInfo.style.display = 'flex';
    btnMore.classList.toggle('more2');
    quotes.style.display = 'none';
    clockBody.classList.toggle('clock-body2');
    arrowUp.classList.toggle('arrow-up2');




    if (btnMore.classList == 'more') {
        moreInfo.style.display = 'none';
        quotes.style.display = 'flex';
        moreTxt.textContent = 'more';
    } else {
        moreTxt.textContent = 'less';
    }
}


const changeQuote = () => {

    if(quoteRandom2.style.display = 'inline'){
    quoteRandom.style.display = 'none'
    }
}




btnMore.addEventListener('click', showMoreInfo);
btnChangeQuote.addEventListener('click', changeQuote)
