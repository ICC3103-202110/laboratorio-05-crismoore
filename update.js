function TOTAL(amount,Tip){
    return amount+Tip
}

function TIP(amount, tip_per){
    Tip=(amount*tip_per)/100
    return Tip
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
    const newbill = parseInt(input1)
    const newtipper = parseInt(input2)
    const newTip = TIP(newbill, newtipper)
    const newtotal = TOTAL(newbill, newTip)
    return {
        ...model,
        //counter: newCounter,
        bill_amount: parseInt(newbill),
        tip_per: parseInt(newtipper),
        Tip: parseInt(newTip),
        Total: parseInt(newtotal),
        input1: input1,
        input2: input2
    }
}

module.exports = {
    update
}