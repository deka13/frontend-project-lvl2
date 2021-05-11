import yaml from 'js-yaml';

// const parsers = {
//   yml: yaml.safeLoad,
//   json: JSON.parse,
// };

export default (data, ext) => (ext === '.yml' ? yaml.safeLoad(data) : JSON.parse(data));
