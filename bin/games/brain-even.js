#!/usr/bin/env node

import { nameRequest, threeStagesGame, task } from '../../src/index.js';

const userName = nameRequest();
const nameGame = 'even';
task(nameGame);
console.log(threeStagesGame(userName, nameGame));
