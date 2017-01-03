import {
  sanatize
} from './sanatize.js';

import {
  toCSV,
  filesToCSV
} from './csv.js';

import {
  mapListToCSVArray,
  mapToCSVRow
} from './formatter.js';

import {
  downloadZip,
  downloadFile
} from './downloader.js';


/**
 * Generates a zipped folder of CSV files
 * @param {Array}  files
 * @param {String} files[].folder
 * @param {Array}  files[].files
 * @param {String} files[].name
 * @param {Array}  files[].content
 * @param {Array}  files[].content[].headers
 * @param {Array}  files[].content[].rows
 */
export const exportFiles = (fileName, files) => {
  let csvFiles = filesToCSV(files);
  let promise  = downloadZip(fileName, csvFiles);
  return promise;
};

/**
 * Exports a single CSV file
 * @param {String} fileName - File name (defaults to the .csv extension)
 * @param {Array} headers - CSV headers
 * @param {Array} rows - CSV content rows
 */
export const exportFile = (fileName = 'download.csv', headers = [], rows = []) => {
  let file = {
    name: fileName,
    content: toCSV(headers, rows)
  };

  let promise = downloadFile(file);

  return promise;
};

export mapListToCSVArray;
export mapToCSVRow;
