import mocha from 'mocha';
import assert from 'assert';

import {
  mapListToCSVArray,
  mapToCSVRow,
  getNestedKeyValue
} from '../src/formatter.js';

describe('Formatter', function () {

  describe('#mapListToCSVArray()', function () {

    let dataArray = [];

    let expectedResult = {
      headers: [],
      rows: []
    };

    let data = {
      foo: 'bar',
      baz: 4
    };

    for (var i = 0; i < 5; i++) {
      dataArray.push(data);
      expectedResult.rows.push([data.foo, data.baz]);
    };

    let headerKeys = Object.keys(dataArray[0]);
    let csvArray = mapListToCSVArray(dataArray, headerKeys, headerKeys);

    expectedResult.headers = headerKeys;

    it('Should map headers to csv array', function () {
      assert.equal(csvArray.headers[0], expectedResult.headers[0]);
      assert.equal(csvArray.headers.length, expectedResult.headers.length);
    });

    it('Should map rows to csv array', function () {
      assert.equal(csvArray.rows[0][0], expectedResult.rows[0][0]);
      assert.equal(csvArray.rows[0][1], expectedResult.rows[0][1]);
      assert.equal(csvArray.rows.length, expectedResult.rows.length);
    });
  });

  describe('#mapToCSVRow()', function () {

    let data = {
      foo: 'bar',
      baz: 1
    };

    let csvRow = mapToCSVRow(data, Object.keys(data));
    let expectedResult = ['bar', 1];

    it('Should map object to csv array', function () {
      assert.equal(csvRow[0], expectedResult[0]);
      assert.equal(csvRow[1], expectedResult[1]);
      assert.equal(csvRow.length, expectedResult.length);
    });
  });

  describe('#getNestedKeyValue()', function () {

    it('Should get nested key value', function () {
      let obj = {
        foo: {
          bar: 'baz'
        }
      };

      let value = getNestedKeyValue(obj, ['foo','bar']);

      assert.equal(obj.foo.bar, value);
    });

  });

});
