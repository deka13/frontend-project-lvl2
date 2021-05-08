import fs from 'fs';
import getDiff from './getDiff.js';

const makeDiff = (filepath1, filepath2) => {
  const fileData1 = fs.readFileSync(filepath1, 'utf-8');
  const fileData2 = fs.readFileSync(filepath2, 'utf-8');
  return getDiff(JSON.parse(fileData1), JSON.parse(fileData2));
};

export default makeDiff;
