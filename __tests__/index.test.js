import { test, expect, describe } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import makeDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFilePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const getExpectedResult = (fileName) => fs.readFileSync(getFilePath(fileName), 'utf-8').trim();

describe('Test default format', () => {
  test('Flat json files', () => {
    const filePath1 = './__fixtures__/file1.json';
    const filePath2 = './__fixtures__/file2.json';
    const expected = getExpectedResult('stylishDiff.txt');
    expect(makeDiff(filePath1, filePath2)).toBe(expected);
  });
  test('Flat yaml files', () => {
    const filePath1 = './__fixtures__/file1.yml';
    const filePath2 = './__fixtures__/file2.yml';
    const expected = getExpectedResult('stylishDiff.txt');
    expect(makeDiff(filePath1, filePath2)).toBe(expected);
  });
  test('Deep json files', () => {
    const filePath1 = './__fixtures__/deepFile1.json';
    const filePath2 = './__fixtures__/deepFile2.json';
    const expected = getExpectedResult('deepStylishDiff.txt');
    expect(makeDiff(filePath1, filePath2)).toBe(expected);
  });
  test('Deep yaml files', () => {
    const filePath1 = './__fixtures__/deepFile1.yml';
    const filePath2 = './__fixtures__/deepFile2.yml';
    const expected = getExpectedResult('deepStylishDiff.txt');
    expect(makeDiff(filePath1, filePath2)).toBe(expected);
  });
});
describe('Test plain and JSON formats', () => {
  test('Plain format yml', () => {
    const filePath1 = './__fixtures__/deepFile1.yml';
    const filePath2 = './__fixtures__/deepFile2.yml';
    const expected = getExpectedResult('plainDiff.txt');
    expect(makeDiff(filePath1, filePath2, 'plain')).toBe(expected);
  });
  test('Plain format json', () => {
    const filePath1 = './__fixtures__/deepFile1.json';
    const filePath2 = './__fixtures__/deepFile2.json';
    const expected = getExpectedResult('plainDiff.txt');
    expect(makeDiff(filePath1, filePath2, 'plain')).toBe(expected);
  });
  test('JSON format json', () => {
    const filePath1 = './__fixtures__/deepFile1.json';
    const filePath2 = './__fixtures__/deepFile2.json';
    const expected = getExpectedResult('jsonDiff.txt');
    expect(makeDiff(filePath1, filePath2, 'json')).toBe(expected);
  });
  test('JSON format yml', () => {
    const filePath1 = './__fixtures__/deepFile1.yml';
    const filePath2 = './__fixtures__/deepFile2.yml';
    const expected = getExpectedResult('jsonDiff.txt');
    expect(makeDiff(filePath1, filePath2, 'json')).toBe(expected);
  });
});
