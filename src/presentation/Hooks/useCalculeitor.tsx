import { useEffect, useRef, useState } from 'react';

enum Operator {
    add = '+',
    subtract = '-',
    multiply = '*',
    divide = '÷',
}


export const useCalculeitor = () => {

    const [formula, setFormula] = useState('');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');
    const [error, setError] = useState<string | null>(null);

    const lastOperation = useRef<Operator | null>(null);

    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ')[0]; // Cambiado a split(' ')
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }
    }, [number]);

    useEffect(() => {
        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`)
    },[formula])

    const buildNumber = (numberString: string) => {

        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            // Punto decimal
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            // Evaluar si es otro cero y no hay punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            // Evaluar si es diferente de cero, no hay punto, y es el primer numero
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            // Evitar 000000.00
            if (numberString === '0' && !number.includes('.')) {
                return;
            }

            return setNumber(number + numberString);
        }


        setNumber(number + numberString);

    };

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        lastOperation.current = null;
        setFormula('');
    }

    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }
        setNumber('-' + number);
    }

    const deleteOperation = () => {
        let currentSing = ""
        let temporalNumber = number;

        if (number.includes('-')) {
            currentSing = '-';
            temporalNumber = number.substring(1);
        }
        if (temporalNumber.length > 1) {
            return setNumber(currentSing + temporalNumber.slice(0, -1))
        }
        setNumber('0');
    }


    const setLastNumber = () => {
        calculateResult();
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        } else {
            setPrevNumber(number);
        }
        setNumber('0');
    };

    const handleOperation = (operator: Operator) => {
        setError(null); // Limpia el error previo
        if (lastOperation.current && prevNumber !== '0') {
            const result = calculateSubResult();
            setPrevNumber(result.toString());
            setNumber('0');
            setFormula(`${result} ${operator}`);
        } else {
            setLastNumber();
            setFormula(`${number} ${operator}`);
        }
        lastOperation.current = operator;
    };

    const divideOperation = () => handleOperation(Operator.divide);
    const multiplyOperation = () => handleOperation(Operator.multiply);
    const subtractOperation = () => handleOperation(Operator.subtract);
    const addOperation = () => handleOperation(Operator.add);

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`);
        setNumber(result.toString());
        setPrevNumber('0');
        lastOperation.current = null;
    };

    const calculateSubResult = (): number => {
        const [firstValue, operation, secondValue] = formula.split(' ');

        const num1 = Number(firstValue || prevNumber);
        const num2 = Number(secondValue || number);

        if (isNaN(num1) || isNaN(num2)) {
            setError('Invalid numbers in formula');
            return 0; // Devuelve 0 para evitar que se rompa
        }

        switch (operation) {
            case Operator.add:
                return num1 + num2;

            case Operator.subtract:
                return num1 - num2;

            case Operator.multiply:
                return num1 * num2;

            case Operator.divide:
                if (num2 === 0) {
                    setError('Division by zero is not allowed');
                    return 0; // Devuelve 0 para evitar que se rompa
                }
                return num1 / num2;

            default:
                return num2; // Si no hay operación, devolver el segundo número
        }
    }

    return {
        //Propiedades
        number,
        prevNumber,
        formula,
        error,

        //Metodos
        buildNumber,
        toggleSign,
        clean,
        deleteOperation,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateResult,
    }
}

import React from 'react';
import { View, Text } from 'react-native';

export const CalculatorScreen = () => {
    const { number, formula, error, buildNumber, divideOperation } = useCalculeitor();

    return (
        <View>
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            <Text>{formula}</Text>
            <Text>{number}</Text>
            {/* Botones de la calculadora */}
        </View>
    );
};