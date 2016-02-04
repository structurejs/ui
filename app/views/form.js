import BaseView from './base'

class FormView extends BaseView {

  constructor(options = {}) {
    super(options)

    this.event('click', '.view-form input', this.inputClearError)
    this.event('click', '.view-form #form-submit', this.formSubmit)

    this.event('enter',   '.view-form', this.formSubmit)
    this.event('keydown', '.view-form input', this.inputClearError)
  }

  formError(err) {
    console.error("Form error", err)
  }

  inputClearError(e) {

    var parentEl = e.target.parentElement

    if(parentEl.classList.contains('has-error')) {

      parentEl.classList.remove('has-error')

    }

  }

  validate(pkg = {}) {

    this.state.set('validating')

    var onValidate = this.model.validate(pkg)

    if(onValidate.error) {
      console.log('DEBUG: validate error', onValidate.error)
      this.state.set('error')

      onValidate.error.details.forEach( (error) => {

        this.refs(error.context.key).parentElement.classList.add('has-error')

      })

    }

    return onValidate

  }

}

module.exports = FormView
