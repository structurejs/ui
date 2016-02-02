module.exports = function(data) {

  return `
  <div id="template-field-${data.fieldCounter}" class="template-field template-field-text-input">
    <h6 class="template-field-header" contentEditable="true">Field ${data.fieldCounter}</h6>
    <a class="template-field-delete" href="#delete-field">Delete</a>
    <input class="template-field-value" type="text" />
    <input class="template-field-desc" type="text" placeholder="Field description..." />
  </div>
  `

}
