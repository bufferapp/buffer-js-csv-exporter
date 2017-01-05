import mocha from 'mocha';
import assert from 'assert';

import {
  filesToCSV,
  toCSV
} from '../src/csv.js';

describe('CSV', function () {

  const csvPrimary = {
    headers: ['Foo', 'Bar'],
    rows: [['baz', 4], ['qaz', 5]]
  };

  const expectedPrimaryCSVContent = 'Foo,Bar\nbaz,4\nqaz,5\n';

  const csvSecondary = {
    headers: ['Baz', 'Qaz'],
    rows: [['foo', 'bar'], [3, 4]]
  };

  const expectedSecondaryCSVContent = 'Baz,Qaz\nfoo,bar\n3,4\n';

  describe('#filesToCSV()', function () {
    const csvFolder = {
      folder: 'csvs',
      files: [{
        name: 'csv_primary.csv',
        headers: csvPrimary.headers,
        rows: csvPrimary.rows
      }, {
        name: 'csv_secondary.csv',
        headers: csvSecondary.headers,
        rows: csvSecondary.rows
      }]
    };

    let files    = [csvFolder];
    let csvFiles = filesToCSV(files);

    it('Should convert files CSV strings', function () {
      assert.equal(csvFiles[0].files[0].content, expectedPrimaryCSVContent);
      assert.equal(csvFiles[0].files[1].content, expectedSecondaryCSVContent);
    });

    it('Should keep files structure', function () {
      assert.equal(csvFiles[0].folder, csvFolder.folder);
    });
  });

  describe('#toCSV', function () {
    it('Should convert headers and rows into CSV string', function () {
      let csvContent = toCSV(csvPrimary.headers, csvPrimary.rows);
      assert.equal(csvContent, expectedPrimaryCSVContent);
    });
  });
});
