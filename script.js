const btnMore = document.querySelector('.more')
const moreInfo = document.querySelector('.more-info')
const quotes = document.querySelector('.quotes')
const clockBody = document.querySelector('.clock-body')


const showMoreInfo =()=> {
    moreInfo.style.display ="flex";
    btnMore.style.display = "none";
    quotes.style.display = "none";
    clockBody.classList.add('clock-body2');
}


btnMore.addEventListener('click', showMoreInfo)