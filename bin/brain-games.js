#!/usr/bin/env node
import promptUserName from "./../src/cli.js";

export const greetAndPromptUserName = () => {
console.log("Welcome to the Brain Games!");
promptUserName();
};
greetAndPromptUserName();

export default greetAndPromptUserName;