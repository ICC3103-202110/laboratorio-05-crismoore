const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.blueBright(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'roman'
            }
        )
    )
}

function getTable(model){
    //const {counter} = model
    const {bill_amount} = model
    const {tip_per} = model
    const {Tip} = model 
    const {Total} = model
    return [
        {'Bill Amount': bill_amount, 'Tip (%)': tip_per, 'Tip': Tip, 'Total': Total},
        //Counter: counter, 
        ]
}

function inputForm1(model){
    const {input1} = model
    const message = 'Bill Amount?'  
    return inquirer.prompt([
        {
            name: 'input1',
            type: 'input1',
            message: message,
            default: input1
            /*
            ,
            validate: function(value){
                if(value === '+' || value === '-'){
                    return true
                } else {
                    return 'Enter + or -'
                }
            }
            */
        }
    ])
}


function inputForm2(model){
    const {input2} = model
    const message = 'Tip(%)?'   
    return inquirer.prompt([
        {
            name: 'input2',
            type: 'input2',
            message: message,
            default: input2
            /*
            ,
            validate: function(value){
                if(value === '+' || value === '-'){
                    return true
                } else {
                    return 'Enter + or -'
                }
            }
            */
        }
    ])
}
/*
function listForm1(model){
    const {input1} = model
    const message = 'Bill amount?'
    const choices = [parseInt()]
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message,
        default: input1,
        choices: choices
    })
}

function listForm2(model){
    const {input2} = model
    const message = 'Tip(%)?'
    const choices = [parseFloat()]
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message,
        default: input2,
        choices: choices
    })
}

*/
// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm1,
    //listForm1,
    inputForm2
    //listForm2
}