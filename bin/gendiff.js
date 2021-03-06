#!/usr/bin/env node
import program from 'commander';
import { createRequire } from 'module';
import path from 'path';
import makeDiff from '../src/index.js';

const require = createRequire(import.meta.url);
const { version, description } = require('../package.json');

const getFullPath = (filename) => path.resolve(process.cwd(), filename);

program
  .description(description)
  .version(version)
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath, filepath2) => {
    console.log(makeDiff(getFullPath(filepath), getFullPath(filepath2), program.opts().format));
  });

program.parse(process.argv);
