const btnMore = document.querySelector('.more');
const moreInfo = document.querySelector('.more-info');
const quotes = document.querySelector('.quotes');
const clockBody = document.querySelector('.clock-body');
const btnChangeQuote = document.querySelector('.btn-change-quote');
const arrowDown = document.querySelector('.arrow-down');
const arrowUp = document.querySelector('.arrow-up');
const moreTxt = document.querySelector('.more-txt');
const quoteRandom = document.querySelector('.quote-random');
const quoteRandomAuthor = document.querySelector('.quote-random-author');
const dayOfWeek = document.querySelector('.day-week');
const dayOfYear = document.querySelector('.day-year');
const weekNumber = document.querySelector('.week');
const timezone = document.querySelector('.timezone');
const actuallyTime = document.querySelector('.acctually-time');
const city = document.querySelector('.city');

const currentTime = new Date();
console.log(currentTime)


const showMoreInfo = () => {

    moreInfo.style.display = 'grid';
    btnMore.classList.toggle('more2');
    quotes.style.display = 'none';
    quoteRandomAuthor.style.display = 'none';
    clockBody.classList.toggle('clock-body2');
    arrowUp.classList.toggle('arrow-up2');


    if (btnMore.classList == 'more') {
        moreInfo.style.display = 'none';
        quotes.style.display = 'flex';
        quoteRandomAuthor.style.display = 'inline';
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
            console.log(response.originator.name);
            quoteRandomAuthor.textContent = response.originator.name;
        })
        .catch(err => console.error(err));
}

changeQuote()

fetch('http://worldtimeapi.org/api/ip')
    .then(response => response.json())
    .then((res) => {
        console.log(res.day_of_week);
        dayOfWeek.textContent = res.day_of_week;
        console.log(res.day_of_year);
        dayOfYear.textContent = res.day_of_year;
        console.log(res.week_number);
        weekNumber.textContent = res.week_number;
        console.log(res.timezone);
        timezone.textContent = res.timezone;
        city.textContent = `in ${res.timezone}`;
        console.log(res.datetime);
        actuallyTime.textContent = res.datetime.slice(11, 16)

    })
    .catch(err => console.error(err));



btnMore.addEventListener('click', showMoreInfo);
btnChangeQuote.addEventListener('click', changeQuote);
