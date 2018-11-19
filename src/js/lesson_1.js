'use strict';

let money = parseInt(prompt("Ваш бюджет на месяц?", '')),
  time = prompt("Введите дату в формате YYYY-MM-DD", '2018-11-15'),
  month = 30;

let appData = {
  budjet: money, //бюджет
  timeData: time, //данные времени
  expenses: {}, //обязательные расходы
  optionalExpenses: {}, //необязательные расходы()
  income: [], //доп. доходом(массив)
  saving: false //свойство
};


//FOR
// for (let i = 0; i < 2; i++) {
// let fstQuest = prompt("Введите обязательную статью расходов в этом месяце",
//     "8000"),
//   secQuest = prompt("Во сколько обойдется?", "18000");

// //проверить не пустой и ответ. не null(при отмене) и не пустой ''.
// // не больше 50-ти символов. 
// if ((typeof (fstQuest)) === 'string' && (typeof (fstQuest)) != null &&
//   (typeof (secQuest)) != null && fstQuest != '' && secQuest != '') {

//   appData.expenses[fstQuest] = secQuest;
// }
// else {
//   i--;
// }
// }

//                 WHile                    //
// let i = 0;
// while (i < 2) {
//   let fstQuest = prompt("Введите обязательную статью расходов в этом месяце",
//       "8000"),
//     secQuest = prompt("Во сколько обойдется?", "18000");

//   //проверить не пустой и ответ. не null(при отмене) и не пустой ''.
//   // не больше 50-ти символов. 
//   if ((typeof (fstQuest)) === 'string' && (typeof (fstQuest)) != null &&
//     (typeof (secQuest)) != null && fstQuest != '' && secQuest != '') {

//     appData.expenses[fstQuest] = secQuest;
//   } else {
//     i--;
//   }

//   i++;
// }

//DO while
let i = 0;
do {
  let fstQuest = prompt("Введите обязательную статью расходов в этом месяце",
      "8000"),
    secQuest = prompt("Во сколько обойдется?", "18000");

  //проверить не пустой и ответ. не null(при отмене) и не пустой ''.
  // не больше 50-ти символов. 
  if ((typeof (fstQuest)) === 'string' && (typeof (fstQuest)) != null &&
    (typeof (secQuest)) != null && fstQuest != '' && secQuest != '') {

    appData.expenses[fstQuest] = secQuest;
  } else {
    i--;
  }
  i++;
} while (i < 2);

alert(appData.budjet / month);
console.log(appData.expenses);
console.log(appData.budjet);
console.log(typeof (appData.budjet.money));