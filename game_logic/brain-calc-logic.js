import _ from 'lodash';

export const question_calc = 'What is the result of the expression?';

const getRandomNumber = () => {
    
    const randomNumber = _.random(1,100);

    return randomNumber;
};

const getRandomOperator = () => {
    
    const listOfOperators = ['+', '-', '*'];

    const operator = listOfOperators[_.random(0,2)];

    return operator;
};

export const getExpressionAndPrintStatement = () => {
    const random_number1 = getRandomNumber();
    const random_number2 = getRandomNumber();
    const random_operator = getRandomOperator();
    const expressionPrint = `Question: node ${random_number1} ${random_operator} ${random_number2}`;
    switch (random_operator) {
        case '+': {
            return [expressionPrint, (random_number1 + random_number2)];
        };
        case '-': {
            return [expressionPrint, (random_number1 - random_number2)]
        };
        case '*': {
            return [expressionPrint, (random_number1 * random_number2)];
        };
    };
    return null;
};

export default getExpressionAndPrintStatement;
  