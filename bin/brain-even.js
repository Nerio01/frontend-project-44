#!/usr/bin/env node
import gameFlow from "../src/index.js";
import brainEven from "../games/brain-even-logic.js";
import { question_even } from "../games/brain-even-logic.js";

gameFlow(brainEven, question_even);