#!/usr/bin/env node
import gameFlow from "../src/index.js";
import getExpressionAndPrintStatement from "../game_logic/brain-calc-logic.js";
import { question_calc } from "../game_logic/brain-calc-logic.js";

gameFlow(getExpressionAndPrintStatement, question_calc);

