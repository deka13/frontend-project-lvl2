import makeStylish from './stylish.js';
import makePlain from './plain';
import makeJson from './json';

const formatType = {
  stylish: makeStylish,
  plain: makePlain,
  json: makeJson,
};

export default (format) => formatType[format];
