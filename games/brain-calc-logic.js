import _ from 'lodash';

export const question_calc = 'What is the result of the expression?';

const getRandomOperator = () => {
    const listOfOperators = ['+', '-', '*'];
    const operator = listOfOperators[_.random(0,2)];
    return operator;
};

export const getExpressionAndPrintStatement = () => {
    const random_number1 = _.random(1,100);
    const random_number2 = _.random(1,100);
    const random_operator = getRandomOperator();
    const expressionPrint = `Question: ${random_number1} ${random_operator} ${random_number2}`;
    switch (random_operator) {
        case '+': {
            return [expressionPrint, (random_number1 + random_number2)];
        };
        case '-': {
            return [expressionPrint, (random_number1 - random_number2)];
        };
        case '*': {
            return [expressionPrint, (random_number1 * random_number2)];
        };
    };
    return null;
};

export default getExpressionAndPrintStatement;
  