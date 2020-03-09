/**
 * @typedef {Object} CustomResponse
 * @prop {Object} status
 * @prop {number} status.code
 * @prop {string} status.text
 * @prop {string} content
 * @prop {string} contentType
 */

/**
 * @param {HTMLFormElement} form
 * @returns {Promise<CustomResponse>} 
 */
function request(form) {
  return new Promise(resolve => {
    const req = new XMLHttpRequest();
    const data = new FormData(form);
    req.open(form.getAttribute('method'), form.getAttribute('action'));
    req.addEventListener('load', function() {
      resolve({
        status: {
          code: this.status,
          text: this.statusText
        },
        content: this.responseText,
        contentType: this.getResponseHeader('content-type')
      });
    });
    req.send(data);
  })
}