#!/usr/bin/env node

import { argv } from "node:process";
import http from "node:http";

const statusCodes = http.STATUS_CODES; // object mapping code to text description

const printUsage = () => {
  console.log("cli [codeNumber]");
};

if (argv[2]) {
  const code = Number(argv[2]);
  if (isNaN(code)) {
    console.log(`Invalid HTTP Status Code - ${argv[2]}`);
    printUsage();
  }
  const codeAsString = code.toString();

  if (statusCodes[codeAsString]) {
    console.log(code, statusCodes[codeAsString]);
  } else {
    console.error("Invalid Status Code");
  }
} else {
  console.error("Invalid parameters");
  printUsage();
}
