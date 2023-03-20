#!/usr/bin/env node

import { threeStagesGame, task } from '../../src/index.js';
import nameRequest from '../../src/cli.js';

const userName = nameRequest();
const nameGame = 'gcd';
task(nameGame);
console.log(threeStagesGame(userName, nameGame));
