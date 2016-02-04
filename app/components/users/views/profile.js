import FormView from '../../../views/form'

class UserProfileView extends FormView {

  constructor(options = {}) {

    super(Object.assign({}, {
      class: 'container view-user',
      container: '#app-container',
      id: 'view-user-profile',
      template: require('../templates/profile')
    }, options))

  }

  formSubmit(e) {
    e.preventDefault()

    this.state('submitting')

    var pkg = this.refFormValues('user-profile')
    pkg.organizations = this.model.attr.organizations

    /*console.log('form pkg', pkg)
    return*/

    this.model.validate(pkg, (err, valid) => {

      if(err) {
        this.state('error')
        console.error('No validy yos', err)
        return
      }

      this.model.update(this.model.attr.sid, pkg, function(err, res) {

        if(err) {
          console.error('Update user error :/', err)
          return
        }

        console.log('Update user successful', res)

      })

    })

  }

  onAddedToDOM() {
    this.refs('email',     '#template-field-user-email input',      {form: 'user-profile'})
    this.refs('firstName', '#template-field-user-first-name input', {form: 'user-profile'})
    this.refs('lastName',  '#template-field-user-last-name input',  {form: 'user-profile'})
    this.refs('username',  '#template-field-user-username input',   {form: 'user-profile'})
  }

  reducer(state = initialState, action) {

    switch(state.current) {

      default:

        return Object.assign({}, state, {

        })

    }

  }

}

export default UserProfileView
