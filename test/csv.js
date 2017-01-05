import mocha from 'mocha';
import assert from 'assert';

import {
  filesToCSV,
  toCSV
} from '../src/csv.js';

describe('CSV', function () {

  describe('#filesToCSV()', function () {
    it('Should map headers to csv array', function () {
      // assert.equal();
    });
  });

  describe('#toCSV', function () {

    it('Should convert headers and rows into CSV string', function () {
      let headers = ['Foo', 'Bar'];
      let rows    = [
        ['qaz',3],
        ['baz',2]
      ];

      let csvContent = toCSV(headers, rows);

      let expectedString = 'Foo,Bar\nqaz,3\nbaz,2\n';

      console.log(csvContent);

      assert.equal(csvContent, expectedString);
    });
  });
});
