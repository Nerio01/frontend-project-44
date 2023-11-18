#!/usr/bin/env node
import gameFlow from "../src/index.js";
import getExpressionAndPrintStatement from "../games/brain-calc-logic.js";
import { question_calc } from "../games/brain-calc-logic.js";

gameFlow(getExpressionAndPrintStatement, question_calc);

