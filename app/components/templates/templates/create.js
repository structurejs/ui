module.exports = `
<div class="template-field-header #{state}">
  <div class="btn-group">
    <div data-toggle="dropdown" class="btn btn-info dropdown-toggle">
      Add Field<span class="caret"></span>
      <ul role="menu" class="dropdown-menu">
        <li><a href="#text-input">Text Input</a></li>
        <li><a href="#text-area">Text Area</a></li>
        <li><a href="#wysiwym">WYSIWYM</a></li>
        <li class="divider"></li>
        <li><a href="#">Other</a></li>
      </ul>
    </div>
  </div>

  <a id="btn-save-template" href="#save-template" class="btn btn-lg btn-primary">#{text.save}</a>
</div>

<div id="template-fields">
</div>
`
