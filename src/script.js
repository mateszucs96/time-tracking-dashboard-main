'use strict';

const buttons = document.querySelectorAll('.btn');
const secondaryTime = document.querySelectorAll('.secondary-time');
const previous = document.querySelectorAll('.previous');
const sectionContent = document.querySelectorAll('.section-content');
const currentTime = document.querySelectorAll('.main-time');

const buttonFunc = async function () {

    const json = await fetch('./data.json')
    const data = await json.json()

    buttons.forEach(el => el.addEventListener('click', function () {
        buttons.forEach(element => {
            element.classList.remove('active')
        });

        el.classList.add('active');

        if (el === buttons[0]) {
            for (let i = 0; i < previous.length; i++) {
                console.log(data[i].timeframes.daily)
                secondaryTime[i].textContent = `Yesterday - ${data[i].timeframes.daily.previous}hrs`
                currentTime[i].textContent = `${data[i].timeframes.daily.current}hrs`
            }

        }

        if (el === buttons[1]) {
            for (let i = 0; i < previous.length; i++) {
                console.log(data[i].timeframes.weekly)
                secondaryTime[i].textContent = `Last week - ${data[i].timeframes.weekly.previous}hrs`
                currentTime[i].textContent = `${data[i].timeframes.weekly.current}hrs`
            }

        }

        if (el === buttons[2]) {
            for (let i = 0; i < previous.length; i++) {
                console.log(data[i].timeframes.monthly)
                secondaryTime[i].textContent = `Last month - ${data[i].timeframes.monthly.previous}hrs`
                currentTime[i].textContent = `${data[i].timeframes.monthly.current}hrs`
            }

        }

    }))


}
buttonFunc()





