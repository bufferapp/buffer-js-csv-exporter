/**
 * Recusively parses CSV file content.
 * @param {Array}  files
 * @param {String} files[].folder
 * @param {Array}  files[].files
 * @param {String} files[].name
 * @param {Array}  files[].content
 * @param {Array}  files[].content[].headers
 * @param {Array}  files[].content[].rows
 */
export const filesToCSV = (files) => {
  for (var i = 0; i < files.length; i++) {
    let file = files[i];

    let {
      folder,
      files,
      name,
      headers,
      rows
    } = file;

    if ( typeof folder === 'string' &&
         Array.isArray(files) ) {
      file.files = exportFiles(files);
    } else if (typeof name === 'string' && headers && rows) {
      file.content = toCSV(headers, rows);
    }
  }

  return files;
};


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
};
