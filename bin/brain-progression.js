#!/usr/bin/env node
import gameFlow from '../src/index.js';
import { brainProgression, startPhraseProgression } from '../games/brain-progression-logic.js';

gameFlow(brainProgression, startPhraseProgression);
