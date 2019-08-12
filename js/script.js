'use srtict';

let money = +prompt("Ваш бюджет на месяц, ''");
let time = prompt("Введите дату в формате YYYY-MM-DD, ''");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

	// ans3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	// ans4 = prompt("Во сколько обойдется?", '');

// appData.expenses.ans1 = ans2;
// appData.expenses.ans3 = ans4;

console.log(appData);

for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a)==='string') && (typeof(a) != null ) && (typeof(b) != null && a != '' && b != '' && a.length < 50) ) {
        console.log("Done!");
        appData.expenses[a] = b;
    } else {

    }
};

appData.moneyPerDay = appData.budget / 30;

alert("Daily budget: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log("Minimal");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Medium");
} else if (appData.moneyPerDay > 2000) {
    console.log("High");
} else {
    console.log("Error");
}
