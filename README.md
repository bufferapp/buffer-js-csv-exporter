# 🛠 CSV Exporter

This module is to generate and download CSV files on the client side.

## How to use

### Export Files

The CSV Exporter takes a _n_ number of folders and files to be downloaded to the client.

```
import {exportFiles} from 'csv-exporter';

const CSVData = {
  headers: ['Friends', 'Fruit'],
  rows: [
    ['Bob', 'Banana'],
    ['Jim', 'Apple'],
    ['Joe', 'Strawberry']
  ]
};

const folder1Files = [
  {
    name: subFolderFile,
    content: CSVData
  }
];

const files = {
  name: 'Folder_1',
  files: folder1Files
};

exportFiles(files);
```

### Export File

Or you can export a single CSV file.

```
import {exportFiles} from 'csv-exporter';

const CSVData = {
  headers: ['Friends', 'Fruit'],
  rows: [
    ['Bob', 'Banana'],
    ['Jim', 'Apple'],
    ['Joe', 'Strawberry']
  ]
};

const file = {
  name: 'csv_file.csv',
  content:
};

exportFile(file);
```

If the file has a `name` and `files` values then the files is considered a folder. If the file has a name and content values then it is considered a file.

the content value must be an `object` with a header and rows fields. The headers will be used as the CSV files headers and the rows will be used as the CSV rows content.


## Data Formatting
There are two helper functions to formatter you data for CSV generation.

### mapListToCSVArray

The `mapListToCSVArray` function takes three arguments.
The first argument is an array of javascript object representing rows of CSV data as key value pairs in an ordered list.
The Second argument is an array of string that represent the CSV headers as an ordered list.
The last argument is an array of string keys that will be used to get the CSV rows value from the first arguments data object as an ordered list. For nested values the key can be represented as an array with a nested strings mapping to that value.

```
import {mapListToCSVArray, exportFile} form 'csv-exporter';

let headers = ['Foo'];
let rowData = [{foo: 'bar'}, {foo: 'baz'}];
let rowKeys = ['foo'];

let csvArray = mapListToCSVArray(rowData, headers, rowKeys);

let file = {
  name: 'exporter.csv',
  content: csvArray
};

exportFile(file);
```

`csvArray` will now have two fields, `headers` and `rows` that you can pass as the value of a files content into `exportFile`.

```
csvArray => {
  headers: ['Foo'],
  rows: [
    ['bar'],
    ['baz']
  ]
}
```

### mapToCSVRow

The `mapListToCSVRow` function takes two arguments.

This method is used internally by `mapListToCSVArray` to generate the csv rows.

The first argument is an `Object` that represents a row of CSV data as a key value pairs.
The seconds is an `Array` of csv data keys in an ordered list that will represent that row.

```
import {mapListToCSVArray, exportFile} form 'csv-exporter';

let data = {
  foo: 'bar',
  baz: 1
};

let csvRow = mapToCSVRow(data, ['foo', 'baz']);
```

which will generate the following output

```
[['bar', 1], ['bar', 1]]
```

### Tests
To test simply `npm install` make sure you have mocha install globally `npm install -g mocha` and run `npm test` : )
