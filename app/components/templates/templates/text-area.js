module.exports = function(data) {

  return `
  <div id="template-field-${data.fieldCounter}" class="template-field template-field-text-area">
    <h6 class="template-field-header" contentEditable="true">Field ${data.fieldCounter}</h6>
    <a class="template-field-delete" href="#delete-field">Delete</a>
    <textarea class="template-field-value"></textarea>
    <input class="template-field-desc" type="text" placeholder="Field description..." />
  </div>
  `

}
