import mocha from 'mocha';
import assert from 'assert';

import {
  sanatizeCSV
} from '../src/sanatize.js';

describe('Sanatize', function () {
  describe('#sanatizeCSV()', function () {
    it('Should sanatize XSS attacks', function () {
      let clean = sanatizeCSV('Test<script>alert("hello world")</script>');
      assert.equal(clean, 'Test');
    });

    // REF: https://www.owasp.org/index.php/CSV_Excel_Macro_Injection
    it('Should add backtick to all +, - and = characters', function () {
      let dirty    = 'Foo +, Bar =, Qaz -';
      let expected = "Foo +', Bar =', Qaz -'";

      let clean = sanatizeCSV(dirty);

      assert.equal(clean, expected);
    });
  });
});
