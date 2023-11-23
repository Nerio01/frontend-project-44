#!/usr/bin/env node
import gameFlow from '../src/index.js';
import { brainGcd, startPhraseGcd } from '../games/brain-gcd-logic.js';

gameFlow(brainGcd, startPhraseGcd);
