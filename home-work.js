/* 
1)  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/

let burgers = 0;
let fries = 0;

if (burgers >= 4 && fries >= 1) {
    console.log("Ми поїли");
} else {
    console.log("Ми йдемо в інше кафе");
};


let MacOrNotMak = (burgers, fries) => {

    if (burgers >= 4 && fries >= 1) {
        console.log("Ми поїли");
    } else {
        console.log("Ми йдемо в інше кафе");
    };
}

MacOrNotMak(0, 2);

/*
 2) Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/

let price = 1800;

if (price >= 1000 && price <= 1900) {
    console.log(price + " - Yes")
} else {
    console.log(price + " - No")
};

let bestPrice = (price) => {

    if (price >= 1000 && price <= 1900) {
        console.log(price + " - Yes")
    } else {
        console.log(price + " - No")
    };
}

bestPrice(554);


/*
3)  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/

let price1 = 1000;

if ((price1 < 1000) && (price1 > 1900)) {
    console.log(price1 + " знаходиться між 1000 та 1900")
} else {
    console.log(price1 + " не знаходиться між 1000 та 1900")
};

if (!(price1 > 1000) && !(price1 < 1900)) {
    console.log(price1 + " знаходиться між 1000 та 1900")
} else {
    console.log(price1 + " не знаходиться між 1000 та 1900")
};


let correctPrice = (price1) => {
    if ((price1 < 1000) && (price1 > 1900)) {
        console.log(price1 + " знаходиться між 1000 та 1900")
    } else {
        console.log(price1 + " не знаходиться між 1000 та 1900")
    };
    
    if (!(price1 > 1000) && !(price1 < 1900)) {
        console.log(price1 + " знаходиться між 1000 та 1900")
    } else {
        console.log(price1 + " не знаходиться між 1000 та 1900")
    };
}

correctPrice(132);

/*
4)  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

let numTimeOfTheYear = 3;

// Що є "номером пори року"?)) хай буде по порядку 1-4 – літо осінь зима весна

if (numTimeOfTheYear == 1) {
    console.log("summer")
} else if (numTimeOfTheYear == 2) {
    console.log("autumn")
} else if (numTimeOfTheYear == 3) {
    console.log("winter")
}
else if (numTimeOfTheYear == 4) {
    console.log("spring")
} else {
    console.log("Ви маєте ввести ціле чисто від 1 до 4 включно")
}

let timeOfTheYear = (numTimeOfTheYear) => {
    if (numTimeOfTheYear == 1) {
        console.log("summer")
    } else if (numTimeOfTheYear == 2) {
        console.log("autumn")
    } else if (numTimeOfTheYear == 3) {
        console.log("winter")
    }
    else if (numTimeOfTheYear == 4) {
        console.log("spring")
    } else {
        console.log("Ви маєте ввести ціле чисто від 1 до 4 включно")
    }
}

timeOfTheYear(4);

/*
5)  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.

*/

let a = 90;
let b = 4;
let c = 5;

// зроблю з перевіркою чи дійсно числа не рівні між собою

if (a != b && a != c && b != c) {
    if ((a > b && a < c) || (a < b && a > c)) {
        console.log(`Серед чисел ${a}, ${b}, ${c} середне ${a}`)
    } else if ((b > a && b < c) || (b < a && b > c)) {
        console.log(`Серед чисел ${a}, ${b}, ${c} середне ${b}`)
    } else {
        console.log(`Серед чисел ${a}, ${b}, ${c} середне ${c}`)
    }
} else {
    console.log("Серед чисел є такі що рівні між собою")
}

let middleNumber = (a, b, c) => {
    if (a != b && a != c && b != c) {
        if ((a > b && a < c) || (a < b && a > c)) {
            console.log(`Серед чисел ${a}, ${b}, ${c} середне ${a}`)
        } else if ((b > a && b < c) || (b < a && b > c)) {
            console.log(`Серед чисел ${a}, ${b}, ${c} середне ${b}`)
        } else {
            console.log(`Серед чисел ${a}, ${b}, ${c} середне ${c}`)
        }
    } else {
        console.log("Серед чисел є такі що рівні між собою")
    }
}

/*
6)  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

let day = 6;
    switch (day) {
        case 1:
        console.log("понеділок")
        break;
        case 2:
        console.log("вівторок")
        break;
        case 3:
        console.log("середа")
        break;
        case 4:
        console.log("четвер")
        break;
        case 5:
        console.log("п'ятниця")
        break;
        case 6:
        console.log("субота")
        break;
        case 7:
        console.log("неділя")
        break;
        default:
            console.log("Такого дня тижня немає")
    }

    let theDayOfWeek = (dayNumber) => {
        switch (day) {
            case 1:
            console.log("понеділок")
            break;
            case 2:
            console.log("вівторок")
            break;
            case 3:
            console.log("середа")
            break;
            case 4:
            console.log("четвер")
            break;
            case 5:
            console.log("п'ятниця")
            break;
            case 6:
            console.log("субота")
            break;
            case 7:
            console.log("неділя")
            break;
            default:
                console.log("Такого дня тижня немає")
        }
    }

/* 
7)  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

let num1 = 6;
let num2 = 6;
let param = "-";
    switch (param) {
        case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2}`)
        break;
        case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2}`)
        break;
        case "*":
        console.log(`${num1} * ${num2} = ${num1 * num2}`)
        break;
        case "/":
        console.log(`${num1} / ${num2} = ${num1 / num2}`)
        break;
        default:
            console.log("Це не "+", "-", "*", "/"");
    }

    let PoorCalculator = (num1, num2, param) => {
        switch (param) {
            case "+":
            console.log(`${num1} + ${num2} = ${num1 + num2}`)
            break;
            case "-":
            console.log(`${num1} - ${num2} = ${num1 - num2}`)
            break;
            case "*":
            console.log(`${num1} * ${num2} = ${num1 * num2}`)
            break;
            case "/":
            console.log(`${num1} / ${num2} = ${num1 / num2}`)
            break;
            default:
                console.log("Це не "+", "-", "*", "/"");
        }
    }

// Тут чомусь якщо у param поставити не "+", "-", "*", "/" виводить NaN не можу зрозуміти чому(

/* 
8)  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

function vowelsRemove(word) {
    word = word.replace(/[aeioquyуеєоаияіїю]/gi,"");
    return word
} 

console.log(vowelsRemove("йеQеееЇEеее"));




/* 
9)  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д
*/


printMetersInkilometers = (meters) => {

    metersTokilometers = (meters) => {
        return meters/1000
    }

    let kilometers = metersTokilometers(meters)

    findTheEnd = (number) => {
        if(Number.isInteger(number)) {
            let leftOver = number%10;
            if (leftOver == 0 || (number%1 == 0 && number >= 11 && number <= 19)) {
                end = "ів"
            } else if (leftOver == 1) {
                end = ""
            } else if (leftOver >= 2 && leftOver <= 4) {
                end = "и"
            } else if (leftOver >= 5 && leftOver <= 9) {
                end = "ів"
            } 
        } else {
            end = "а"
        }

        return end
    }

    console.log(`${meters} метр${findTheEnd(meters)} це ${kilometers} кілометр${findTheEnd(kilometers)}`);
}


printMetersInkilometers(8.7);



