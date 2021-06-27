import fs from 'fs';
import path from 'path';
import getDiff from './getDiff.js';
import parse from './parsers.js';
import getFormatter from './formatters/index.js';

const getParsedData = (filepath) => {
  const ext = path.extname(filepath);
  const fileData = fs.readFileSync(filepath, 'utf-8');
  return parse(fileData, ext);
};

const makeDiff = (filepath1, filepath2, format = 'stylish') => {
  const parsedData1 = getParsedData(filepath1);
  const parsedData2 = getParsedData(filepath2);

  const diff = getDiff(parsedData1, parsedData2);
  const makeFormat = getFormatter(format);

  return makeFormat(diff);
};

export default makeDiff;
