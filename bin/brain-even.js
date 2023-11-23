#!/usr/bin/env node
import gameFlow from '../src/index.js';
import { brainEven, startPhraseEven } from '../games/brain-even-logic.js';

gameFlow(brainEven, startPhraseEven);
