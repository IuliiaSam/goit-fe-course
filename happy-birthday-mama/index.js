const wishesArr = [
    'Щастя!',
    'Здоров\'я!',
    'Любові!',
    'Лобстерів!',
    'Гарного настрою!',
    'Приємних сюрпризів!',
    'Добрих людей навколо!',
    'Радості!',
    'Легкості!',
    'Тепла!',
    'Добра!',
    'Віри!',
    'Миру!',
    'Злагоди!',
    'Довголіття!',
]


const wishLine = document.querySelector('.wish-line');

const btnLarge = document.querySelector('.btn-large');
const btnSmall = document.querySelector('.btn-small');
btnLarge.textContent = 'Натисни на кнопку!'

const generateWish = function() {
    let idx = Math.floor(Math.random()*wishesArr.length);
    wishLine.textContent = wishesArr[idx];
    btnLarge.textContent = 'Натисни ще!'
}

btnLarge.addEventListener('click', generateWish);

const addPhrase = function() {
    let newPhrase = prompt('Введи побажання, яке потрібно додати, та натисни ОК!');
    wishesArr.push(newPhrase);
}

btnSmall.addEventListener('click', addPhrase);