/**
 * Zip file downloader
 *
 * This utility is used to create and download
 * ZIP files on the client side
 *
 * AJR 12-02-016
 */

 import JSZip from 'jszip';
 import FileSaver from 'file-saver';

/**
 * Generates zip file, this is a recursive function that allows
 * for ~n level nested folders
 * @param {String} fileName
 * @param {Object[]} files
 * @param {String} files[].folder
 * @param {Object} files[].files
 * @param {String} file.name
 * @param {String} file.content
 */
export const downloadZip = (fileName, files) => {
  let zip = new JSZip();
  addFiles(zip, files);
  zip.generateAsync({type:"blob"})
     .then(function(content) {
       // see FileSaver.js
    FileSaver.saveAs(content, `${fileName}.zip`);
  });
}

export const downloadFile = (fileName, file) => {
  FileSaver.saveAs(file, `${file}.csv`);
}

/**
 * Recusively adds folders and files to zip
 * @param {String} folder
 * @param {Object} files[].files
 * @param {string} file.folder
 * @param {Array}  file.files
 * @param {String} file.name
 * @param {String} file.content
*/
export const addFiles = (zipFolder, files) => {
  for (var i = 0; i < files.length; i++) {
    let file = files[i];
    if (file.folder && file.files) {
      let newFolder = zipFolder.folder(file.folder);
      addFiles(newFolder, file.files);
    } else if (file.name && file.content) {
      zipFolder.file(file.name, file.content);
    }
  }
}
