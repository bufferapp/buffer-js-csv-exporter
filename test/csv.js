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

  const expectedSecondaryCSVContent = 'Bar,Qaz\nfoo,bar\n3,4\n';

  describe('#filesToCSV()', function () {
    const csvFolder = {
      folder: 'csvs',
      files: [{
        file: 'csv_primary.csv',
        content: csvPrimary
      }, {
        file: 'csv_secondary.csv',
        content: csvSecondary
      }]
    };


    let files = [csvFolder];
    let csvFiles = filesToCSV(files);

    it('Should convert files CSV strings', function () {

      console.log(csvFiles);

      // assert.equal();
    });
  });

  describe('#toCSV', function () {
    it('Should convert headers and rows into CSV string', function () {
      let csvContent = toCSV(csvPrimary.headers, csvPrimary.rows);
      assert.equal(csvContent, expectedPrimaryCSVContent);
    });
  });
});
