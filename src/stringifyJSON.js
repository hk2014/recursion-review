var stringifyJSON = function(obj) {
  var results = [];
  //test case for numbers
  if (typeof obj === 'number') {
    return obj.toString();
  }
  //test case for null values
  if (obj === null || obj === undefined) {
    return 'null';
  }
  //test case for boolean types
  if (typeof obj === 'boolean') {
    return obj.toString();
  }
  //test case for strings
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  //test case for arrays
  if (Array.isArray(obj) ) {
    obj = obj.map (function (index) {
      return stringifyJSON(index);
    });
    return '[' + obj + ']';
  }
  //test case for objects
  if (typeof obj === 'object') {
    for (key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + results.join() + '}';
  }
  console.log(obj);
  return results;
};


