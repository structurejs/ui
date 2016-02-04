import FormView from '../../../views/form'
import {router} from '../../../index'

class UserCreateView extends FormView {

  constructor(options = {}) {

    super(Object.assign({}, {
      class: 'container view-user',
      container: '#app-container',
      id: 'view-user-create',
      template: require('../templates/create')
    }, options))

  }

  formSubmit(e) {
    e.preventDefault()

    this.state('submitting')

    var pkg = this.refFormValues('user-create')
    pkg.organizations = this.model.attr.organizations

    //console.log('form pkg', pkg)

    this.model.validate(pkg, (err, valid) => {

      if(err) {
        this.state('error')
        console.error('No validy yos', err)
        return
      }

      this.model.create(pkg, function(err, res) {

        if(err) {
          console.error('Create user error :/', err)
          return
        }

        console.log('Create user successful', res)
        router.navigate(`/users/${res.sid}`)

      })

    })

  }

  onAddedToDOM() {
    this.refs('email',     '#template-field-user-email input',      {form: 'user-create'})
    this.refs('firstName', '#template-field-user-first-name input', {form: 'user-create'})
    this.refs('lastName',  '#template-field-user-last-name input',  {form: 'user-create'})
    this.refs('password',  '#template-field-user-password input',   {form: 'user-create'})
    this.refs('username',  '#template-field-user-username input',   {form: 'user-create'})
  }

  reducer(state = initialState, action) {

    switch(state.current) {

      default:

        return Object.assign({}, state, {

        })

    }

  }

}

export default UserCreateView
