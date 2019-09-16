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
    return percentage * bill;
}

const bills = [140, 45, 270];
const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])]
const total = [tip] 