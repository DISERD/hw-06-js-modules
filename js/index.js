import multiplyNumber, { add, subtract } from './math.js';

import { renderMessage } from './ui.js';

const sumResult = add(10, 5);
const subResult = subtract(10, 5);
const multResult = multiplyNumber(10, 5);

renderMessage('output', `Сума 10 і 5: <strong>${sumResult}</strong>`);
renderMessage('output', `Різниця 10 і 5: <strong>${subResult}</strong>`);
renderMessage('output', `Добуток 10 і 5: <strong>${multResult}</strong>`);