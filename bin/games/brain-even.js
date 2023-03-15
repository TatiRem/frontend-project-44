#!/usr/bin/env node

import { nameRequest, threeStagesGame } from '../../src/index.js';

const userName = nameRequest();
const nameGame = 'even';
console.log(threeStagesGame(userName, nameGame));
