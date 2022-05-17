import React, { useState } from 'react';

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
        type: "operation"
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
        type: "operation"
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
        type: "operation"
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

    const [displayValue, setDisplayValue] = useState('0');
    const [clearDisplay, setClearDisplay] = useState(false)
    const [actualOperation, setActualOperation] = useState(null)
    const [values, setValues] = useState([0, 0])
    const [currentIndex, setCurrentIndex] = useState(0)


    function clearMemory() {
        setDisplayValue('0')
        setClearDisplay(false)
        setActualOperation(null)
        setValues([0, 0])
        setCurrentIndex(0)
    }

    function setOperation(operation) {
        if( operation === '-' && (values[currentIndex] === 0 || isNaN(values[currentIndex]))) {
            addDigit('-')
            return;
        }
        if (currentIndex === 0) {
            setActualOperation(operation)
            setCurrentIndex(1)
            setClearDisplay(true)
        }
        else if (currentIndex === 1) {

            let result

            switch (actualOperation) {
                case '+':
                    result = values[0] + values[1]
                    break;
                case '-':
                    result = values[0] - values[1]
                    break;
                case '/':
                    result = values[0] / values[1]
                    break;
                case '*':
                    result = values[0] * values[1]
                    break;
                default:
                    break;
            }
            
            let newValues = [result ?? values[0], 0]

            setValues(newValues)
            setClearDisplay(true)
            setDisplayValue(result ?? displayValue)
            setActualOperation(operation === '=' ? null : operation)
        }
    }

    function addDigit(digit) {
        if ((digit === '.' && displayValue.toString().includes('.')) || (digit === '-' && displayValue.toString().includes('-') && (values[currentIndex] !== 0 )))
            return

        const newValue = (displayValue === '0' || clearDisplay) && digit !== '.' ? digit : displayValue + digit
        setDisplayValue(newValue)
        setClearDisplay(false)

        if (digit !== '.') {
            let newValues = [...values]
            newValues[currentIndex] = parseFloat(newValue)
            setValues(newValues)
        }
    }

    return (
        <div className='calculator'>
            {values[0] + ',' + values[1]}
            <Display value={displayValue} />
            {
                buttons.map((button, i) => {
                    if (button.type === 'clear')
                        return <Button label={button.label} key={i} style={button.style} handlerClick={clearMemory} />
                    else if (button.type === 'operation')
                        return <Button label={button.label} key={i} style={button.style} handlerClick={setOperation} />
                    else if (button.type === 'digit')
                        return <Button label={button.label} key={i} style={button.style} handlerClick={addDigit} />
                    return undefined
                })
            }
        </div>
    )
}

