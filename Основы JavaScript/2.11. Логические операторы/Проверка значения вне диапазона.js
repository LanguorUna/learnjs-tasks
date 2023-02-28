let age
const MESSAGE = 'Переменная age находится вне диапазона 14 и 90 включительно'

if (!(age >= 14 && age <= 90)){
    console.log(MESSAGE)
}

if ((age < 14) || (age > 90)){
    console.log(MESSAGE)
}