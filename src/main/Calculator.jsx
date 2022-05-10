import React from 'react';

import Button from '../components/Button'
import Display from '../components/Display'

import './Calculator.css';

const buttons = [
    {
        label: "AC",
        style: "triple",
        type: "clear"
    },
    {
        label: "/",
        style: "operation",
        type:"operation"
    },
    {
        label: "7",
        type: "digit"
    },
    {
        label: "8",
        type: "digit"
    },
    {
        label: "9",
        type: "digit"
    },
    {
        label: "*",
        style: "operation",
        type: "operation"
    },
    {
        label: "4",
        type: "digit"
    },
    {
        label: "5",
        type: "digit"
    },
    {
        label: "6",
        type: "digit"
    },
    {
        label: "-",
        style: "operation",
        type: "digit"
    },
    {
        label: "1",
        type: "digit"
    },
    {
        label: "2",
        type: "digit"
    },
    {
        label: "3",
        type: "digit"
    },
    {
        label: "+",
        style: "operation",
        type: "digit"
    },
    {
        label: "0",
        style: "double",
        type: "digit"
    },
    {
        label: ".",
        type: "digit"
    },
    {
        label: "=",
        style: "operation",
        type: "operation"
    }
]

export default function Calculator() {

    function clearMemory() {
        console.log('limpar')
    }

    function setOperation(operation) {
        console.log(operation)
    }

    function addDigit(digit) {
        console.log(digit)
    }


    return (
        <div className='calculator'>
            <Display value={100}/>
            {
                buttons.map((button, i) => {
                    if(button.type == 'clear')
                        return <Button label={button.label} key={i} style={button.style} handlerClick={clearMemory}/>
                    else if (button.type == 'operation')
                        return <Button label={button.label} key={i} style={button.style} handlerClick={setOperation}/>
                    else if (button.type == 'digit')
                        return <Button label={button.label} key={i} style={button.style} handlerClick={addDigit}/>
                })
            }
        </div>
    )
}

