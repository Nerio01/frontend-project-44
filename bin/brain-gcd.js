#!/usr/bin/env node
import gameFlow from '../src/index.js';
import brainGcd from '../games/brain-gcd-logic.js';
import { startPhraseGcd } from '../utils/start-phrases.js';

gameFlow(brainGcd, startPhraseGcd);
