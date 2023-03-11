#!/usr/bin/env node

import { userTesting, nameRequest } from '../src/even.js';

console.log('Welcome to the Brain Games!');
const userName = nameRequest('May I have your name? ');
console.log('Answer "yes" if the number is even, otherwise answer "no"');
console.log(userTesting(userName));
