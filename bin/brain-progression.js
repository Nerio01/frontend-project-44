#!/usr/bin/env node
import gameFlow from '../src/index.js';
import { brain_progression, start_phrase_progression } from '../games/brain-progression-logic.js';

gameFlow(brain_progression, start_phrase_progression);
