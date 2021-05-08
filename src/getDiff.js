import _ from 'lodash';

const getDiff = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));
  const sortedKeys = _.sortBy(keys);
  return sortedKeys.map((key) => {
    if (!_.has(data2, key)) {
      return { type: 'deleted', key, value: data1[key] };
    }
    if (!_.has(data1, key)) {
      return { type: 'added', key, value: data2[key] };
    }
    if (data1[key] !== data2[key]) {
      return {
        type: 'updated',
        key,
        newValue: data2[key],
        oldValue: data1[key],
      };
    }
    return { type: 'unchanged', key, value: data2[key] };
  });
};

export default getDiff;
