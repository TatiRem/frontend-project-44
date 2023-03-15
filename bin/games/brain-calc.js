#!/usr/bin/env node

import { nameRequest, threeStagesGame } from '../../src/index.js';

const userName = nameRequest();
const nameGame = 'calc';
console.log(threeStagesGame(userName, nameGame));
