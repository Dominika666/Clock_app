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
const hello = document.querySelector('.hello-morning');
const appBody = document.querySelector('.app-body');



const currentTime = new Date().getHours();

if (currentTime < 12) {
    hello.textContent = "Good morning, it's currently";

} else if (currentTime < 18) {
    hello.textContent = "Good afternoon, it's currently";
    appBody.style.backgroundImage = "url(img/sunset.jpg)";

} else {
    hello.textContent = "Good evening, it's currently"
    appBody.style.backgroundImage = "url(img/evening.jpg)";
    moreInfo.style.color = "black";
    moreInfo.style.backgroundColor = "grey";

}


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


changeQuote = () => {
    fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
        .then(response => response.json())
        .then((response) => {
            console.log(response.message);
            if (response.message.length > 300) {
                quoteRandom.textContent = `"${response.message.slice(0, 300)}..."`;
            } else {
                quoteRandom.textContent = `"${response.message}"`;
            }

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
