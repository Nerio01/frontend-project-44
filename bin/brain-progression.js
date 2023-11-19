#!/usr/bin/env node
import gameFlow from "../src/index.js";
import brain_progression from "../games/brain-progression-logic.js";
import { progQuestion } from "../games/brain-progression-logic.js";

gameFlow(brain_progression, progQuestion);
