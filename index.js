
// tap rate -> color turn orange, overwrite text to rate value
// click submit redirect to next part

const rateNumber = document.querySelectorAll('.rate-number > div');
const submit = document.querySelector('.btn-submit');
const rateBox = document.querySelector('#rating-box');
const tqBox = document.querySelector('#thank-you-box');
const rateSummary = document.querySelector('.rate-text-box')

var currentRate = ''
var rateText = ''

function getRate() {
    rateNumber.forEach(element => {
        element.addEventListener('click', e => {
            let newRate = element

            if (currentRate == '') {
                currentRate = newRate;
                currentRate.classList.add('tick-box');
                rateText = currentRate.innerText
            }
            else if (newRate != currentRate) {
                currentRate.classList.remove('tick-box');
                newRate.classList.add('tick-box');
                currentRate = newRate;
                rateText = newRate.innerText;
            } else {
                newRate.classList.remove('tick-box');
                currentRate = ''
                rateText = ''
            }

            console.log('rateText', rateText)

            return rateText;

        })
    })
}

function submitBtn() {
    submit.addEventListener('click', () => {
        if(rateText != ''){
            rateBox.classList.add('hide');
            tqBox.classList.remove('hide');
            rateSummary.innerText = `You selected ${rateText} out of 5`
        }
        else{
            alert('Help to rate first please')
        }
    })
}

getRate()
submitBtn()