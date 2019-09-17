function tipCalc(bill) {
    let percent;
    if (bill >= 200) {
        percent = .1;
    }
    else if (bill >= 50 && bill < 200) {
        percent = .15
    }
    else {
        percent = .2
    }
    return percent * bill;
}

function total(bill) {
    return tipCalc(bill) + bill;
}

const bills = [140, 45, 270];
const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])]
const fullTotal = [total(140), total(45), total(270)]
console.log(fullTotal);

function isBigEnough(value) {
    return value >= 100;
}

const copy = [total(140), total(45), total(270)].filter(isBigEnough);

console.log(copy)