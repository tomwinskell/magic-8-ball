const greeting = document.querySelector('.greeting');
const result = document.querySelector('.result');
const form = document.getElementById('form')
const refresh = document.querySelector('.refresh');

refresh.addEventListener('click', () => {location.reload()});

form.addEventListener('submit', (e) => {
  e.preventDefault()

  form.classList.add('hidden');

  const userName = document.getElementById('form__name').value;
  const userQuestion = document.getElementById('form__question').value;

  greeting.innerHTML = `Hello ${userName} you asked: ${userQuestion}`;
  greeting.classList.remove('hidden');

  result.innerHTML = eightBall();

  function endActions() {
    result.classList.remove('hidden');
    refresh.classList.remove('hidden');
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  sleep(1000).then(() => { endActions() });
})

const eightBall = () => {

  const responses = {
    certain: 'It is certain',
    so: 'It is decidedly so',
    tryAgain:'Reply hazy try again',
    cannot: 'Cannot predict now',
    doNotCount:'Do not count on it',
    no: 'My sources say no',
    notGood: 'Outlook not so good',
    yes: 'Signs point to yes'
  }

  const randomNumber = Math.floor(Math.random() * 8);
  let response = '';

  switch (randomNumber) {
    case 0:
      response = responses.certain;
      break;
    case 1:
      response = responses.so;
      break;
    case 2:
      response = responses.tryAgain;
      break;
    case 3:
      response = responses.cannot;
      break;
    case 4:
      response = responses.doNotCount;
      break;
    case 5:
      response = responses.no;
      break;
    case 6:
      response = responses.notGood;
      break;
    default:
      response = responses.yes;
  }
  return response;
}