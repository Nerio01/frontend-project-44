#!/usr/bin/env node
import gameFlow from '../src/index.js';
import { brainPrime, startPhrasePrime } from '../games/brain-prime-logic.js';

gameFlow(brainPrime, startPhrasePrime);
