/**
 * generates CSV string
 * @param {Array} headers
 * @param {Array} rows
 * @return {String} CSV
 */
export const toCSV = (headers = [], rows = []) => {
  let csv = '';
  csv += headers.join(',')+'\n';

  for (var i = 0; i < rows.length; i++) {
    let row = rows[i] || [];
    if (!row.join) {debugger;}
    csv+=sanatizeCSV(row.join(','))+'\n'
  }

  return csv;
}
