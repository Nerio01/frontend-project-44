#!/usr/bin/env node
import gameFlow from '../src/index.js';
import { brainCalc, startPhraseCalc } from '../games/brain-calc-logic.js';

gameFlow(brainCalc, startPhraseCalc);
