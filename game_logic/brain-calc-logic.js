import readlineSync from 'readline-sync';
import _ from 'lodash';

const getRandomNumber = () => {
    
    const randomNumber = _.random(1,100);

    return randomNumber;
};

const getRandomOperator = () => {
    
    const listOfOperators = ['+', '-', '*'];

    return listOfOperators[_.random(0,2)];
};

const getExpression = (random_number1, random_number2, random_operator) => {
    random_number1 = getRandomNumber();
    random_number2 = getRandomNumber();
    random_operator = getRandomOperator();
    switch (random_operator) {
        case '+': {
            return random_number1 + random_number2;
        };
        case '-': {
            return random_number1 - random_number2;
        };
        case '*': {
            return random_number1 * random_number2;
        };
    };
};
