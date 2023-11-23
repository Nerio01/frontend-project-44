#!/usr/bin/env node
import gameFlow from '../src/index.js';
import { brain_gcd, start_phrase_gcd } from '../games/brain-gcd-logic.js';

gameFlow(brain_gcd, start_phrase_gcd);
