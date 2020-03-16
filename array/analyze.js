const analyze = array => {
  let object = {};

  object.average = findAverage(array);
  object.min = findMin(array);
  object.max = findMax(array);
  object.length = array.length;

  return object;
};

const findAverage = array => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return Math.round((total / array.length) * 10) / 10;
};

const findMin = array => {
  let num = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < num) {
      num = array[i];
    }
  }
  return num;
};

const findMax = array => {
  let num = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > num) {
      num = array[i];
    }
  }
  return num;
};

module.exports = analyze;
