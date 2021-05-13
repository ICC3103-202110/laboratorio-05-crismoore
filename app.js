const {inputForm1, inputForm2} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        // I/O
        console.clear()
        console.log(title)
        printTable(table)
        // FORM (Ask user input)
        const {input1} = await inputForm1(model)
        console.log(Number(input1))
        const {input2} = await inputForm2(model)
        console.log(Number(input2))
        const updatedModel = update(input1, input2, model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}