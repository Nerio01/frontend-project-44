#!/usr/bin/env node
import gameFlow from "../src/index.js";
import brain_prime from "../games/brain-prime-logic.js";
import { questionPrime } from "../games/brain-prime-logic.js";

gameFlow(brain_prime, questionPrime);