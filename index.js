#!/usr/bin/env node

const remToEm = (rem, baseSize = 16) => {
  return rem * (16 / baseSize);
};

const [rem, baseSize] = process.argv.slice(2).map(Number);

if (isNaN(rem) || (baseSize && isNaN(baseSize))) {
  console.error("Invalid input. Please provide valid numbers for rem and baseSize.");
  console.error("Usage: rem-to-em-cli <rem> [baseSize]");
  process.exit(1);
}

const em = remToEm(rem, baseSize || 16);

console.log(`${rem}rem = ${em}em (Base: ${baseSize || 16}px)`);