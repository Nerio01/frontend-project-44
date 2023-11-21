#!/usr/bin/env node
import gameFlow from "../src/index.js";
import { brain_gcd } from "../games/brain-gcd-logic.js";
import { gcdQuestion } from "../games/brain-gcd-logic.js";

gameFlow(brain_gcd, gcdQuestion);