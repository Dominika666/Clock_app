const btnMore = document.querySelector('.more');
const moreInfo = document.querySelector('.more-info');
const quotes = document.querySelector('.quotes');
const clockBody = document.querySelector('.clock-body');
const btnChangeQuote = document.querySelector('.btn-change-quote');
const arrowDown = document.querySelector('.arrow-down');
const arrowUp = document.querySelector('.arrow-up');
const moreTxt = document.querySelector('.more-txt');
const quoteRandom = document.querySelector('.quote-random');
const quoteRandomAuthor = document.querySelector('.quote-random-author')


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



const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '01254496aemsh90337ab63876538p17df15jsna1b752fd0285',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
};

changeQuote = () => {

    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response.content);
        quoteRandom.textContent = `"${response.content}"`;
    })
        .catch(err => console.error(err));

}



btnMore.addEventListener('click', showMoreInfo);
btnChangeQuote.addEventListener('click', changeQuote);
