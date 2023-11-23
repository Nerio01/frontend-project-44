#!/usr/bin/env node
import gameFlow from '../src/index.js';
import { brainEven, start_phrase_even } from '../games/brain-even-logic.js';

gameFlow(brainEven, start_phrase_even);
