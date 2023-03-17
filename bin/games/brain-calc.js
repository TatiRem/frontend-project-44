#!/usr/bin/env node

import { nameRequest, threeStagesGame, task } from '../../src/index.js';

const userName = nameRequest();
const nameGame = 'calc';
task(nameGame);
console.log(threeStagesGame(userName, nameGame));
