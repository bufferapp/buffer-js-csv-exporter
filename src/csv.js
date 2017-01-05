import {sanatizeCSV} from './sanatize.js';

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
export const filesToCSV = (folderFiles) => {
  let newFiles = [ ];

  for (var i = 0; i < folderFiles.length; i++) {
    let file = folderFiles[i];

    let {
      folder,
      files,
      name,
      headers,
      rows
    } = file;

    if (typeof folder === 'string' && Array.isArray(files)) {
      file.files = filesToCSV(files);
    } else if (typeof name === 'string' && headers && rows) {
      file.content = toCSV(headers, rows);
    }

    newFiles.push(file);
  }

  return newFiles;
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
