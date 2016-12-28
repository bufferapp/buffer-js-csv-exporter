import sanitizeHtml from 'sanitize-html';

/**
 * This Module can probably be published as its own libarary
 * i.e. sanatize CSV ?
 * AJR 12-28-16
 */

/**
 * Adds ' to all =, +, - values for security purposes
 * ref: https://www.owasp.org/index.php/CSV_Excel_Macro_Injection
 * @param {String} content
 * @return {String} content
 */
export const sanatizeCSV = (content) => {
  let strippedContent = sanitizeHtml(content).replace(/\n+/, '');
  return strippedContent.replace(/([\+\-\=](?!')+)/g, function (match, p1) {
    return p1+"'";
  });
}
