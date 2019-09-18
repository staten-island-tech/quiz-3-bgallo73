/* function tipCalc(bill) {
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

 */

 const dejon = {
     fullName : 'Dejon Kurti',
     mass : 110,
     height : 1.95,
     getBmi: function(){
         Bmi = (this.mass / (this.height * this.height));
         return Bmi;
     }
 }


 const rob = {
     fullName : 'Robert Grande',
     mass : 78,
     height : 1.69,
     getBmi: function(){
        Bmi = (this.mass / (this.height * this.height));
        return Bmi;
    }
 }

if (rob.getBmi() > dejon.getBmi()) {
    console.log(`${rob.fullName} has the higher BMI of ${rob.getBmi()}`)
} else if (dejon.getBmi() > rob.getBmi()) {
    console.log(`${dejon.fullName} has the higher BMI of ${dejon.getBmi()}`)
}