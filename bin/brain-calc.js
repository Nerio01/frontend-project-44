#!/usr/bin/env node
import { gameFlow } from "../src/index.js";
import { brain_calc, start_phrase_calc } from "../games/brain-calc-logic.js";

gameFlow(brain_calc, start_phrase_calc);

