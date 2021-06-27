import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import makeDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFilePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const getExpectedResult = (fileName) => fs.readFileSync(getFilePath(fileName), 'utf-8').trim();

describe('Test default format', () => {
  test('Deep json files', () => {
    const filePath1 = './__fixtures__/deepFile1.json';
    const filePath2 = './__fixtures__/deepFile2.json';
    const expected = getExpectedResult('deepStylishDiff.txt');
    expect(makeDiff(filePath1, filePath2)).toBe(expected);
  });
  test('Deep yml files', () => {
    const filePath1 = './__fixtures__/deepFile1.yml';
    const filePath2 = './__fixtures__/deepFile2.yml';
    const expected = getExpectedResult('deepStylishDiff.txt');
    expect(makeDiff(filePath1, filePath2)).toBe(expected);
  });
});
