/**
 * Formats Array of Objects for CSV consumption
 * @param {Array} mapArray
 * @param {Array} csvHeaders - Ordered CSV headers
 * @param {Array} csvKeys - Ordered CSV keys
 * @return {Array} Representing values corresponding to map key header index
 **/
export const mapListToCSVArray = (mapArray = [], csvHeaders = [], csvKeys = []) => {
  let headers = csvHeaders ? csvHeaders : Object.keys(mapArray[0]);
  let rows = [ ];

  for (var i = 0; i < mapArray.length; i++) {
    let map = mapArray[i];
    let row = formatObjectForCSV(map, csvKeys);
    rows.push(row);
  }

  return {
    headers: csvHeaders,
    rows: rows
  };
}


/**
 * Converts Object to Array of mapped values
 * @param {Object} map
 * @param {Array} headerKeys - the header keys that correlate to that keys object value
 * @return {Array}
 */
export const mapToCSVRow = (map = {}, headerKeys = []) => {
  let CSVRow = [];

  for (let i = 0; i < headerKeys.length; i++) {
    let headerKey = headerKeys[i];
    keyArray      = Array.isArray(headerKey) ? headerKey : [headerKey];
    CSVRow[i]     = getNestedKeyValue(map, keyArray);
  }

  return CSVRow;
};

/**
 * Gets the nested key value of an object
 * @param {Object} map
 * @param {Array} keys - Array with the nested keys. i.e. {foo: {bar: 'baz'}} would be ['foo', 'bar'];
 * @return {Value} - nested object value
 */
export const getNestedKeyValue = (object, key) => {
  let currentKey = Array.isArray(key) ? key.unshift() : key;

  if (!Array.isArray(key) || key.length === 0) {
    return object[currentKey];
  }

  return getKey(object[currentKey], key);
  return value;
};
