function TOTAL(amount,Tip){
    total = amount+Tip
    total = total.toFixed(2)
    return Number(total)
}

function TIP(amount, tip_per){
    Tip=(amount*tip_per)/100
    Tip = Tip.toFixed(2)
    return Number(Tip)
}
/*
const FUNCTIONS = {
    '+': increase,
    '-': decrease
}

function increase(counter){
    return counter + 1
}

function decrease(counter){
    return counter - 1
}
*/
function update(input1, input2, model){
    //const {counter} = model
    const {bill_amount} = model
    const {tip_per} = model
    const {Tip} = model
    const {Total} = model
    //const newCounter = FUNCTIONS[input](counter)
    const newbill = Number(input1)
    const newtipper = Number(input2)
    const newTip = TIP(newbill, newtipper)
    const newtotal = TOTAL(newbill, newTip)
    return {
        ...model,
        //counter: newCounter,
        bill_amount: '$'+newbill,
        tip_per: newtipper+'%',
        Tip: '$'+newTip,
        Total: '$'+newtotal,
        input1: input1,
        input2: input2
    }
}

module.exports = {
    update
}