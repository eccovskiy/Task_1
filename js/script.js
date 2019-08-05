'use srtict';

var money = prompt("Ваш бюджет на месяц, ''");
var time = prompt("Введите дату в формате YYYY-MM-DD, ''");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var ans1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    ans2 = prompt("Во сколько обойдется?", ''),
	ans3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	ans4 = prompt("Во сколько обойдется?", '');

appData.expenses.ans1 = ans2;
appData.expenses.ans3 = ans4;

console.log(appData);


alert(appData.budget / 30);