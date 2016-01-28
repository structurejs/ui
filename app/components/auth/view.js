import Dragon   from 'dragon.js'
import FormView from '../../views/form'

class AuthView extends FormView {

  constructor(options = {}) {

    switch(options.type) {

      case 'create':
        options.template = require('./templates/create')

        break

      default:
        options.template = require('./templates/login')

    }

    super(Object.assign({}, {
      container: '#app-container',
      id: 'auth-view',
      reducer: function AuthViewReducer(state = initialState, action) {

        switch(state.current) {

          case 'submitting':

            return Object.assign({}, state, {
              text: {
                submit: require('../../components/auth/templates/spinner')
              }
            })

          default:

            return Object.assign({}, state, {
              text: {
                submit: options.type == 'create' ? 'Create Account' : 'Login'
              }
            })

        }

      }
    }, options))

  }

  formSubmit(e) {
    e.preventDefault()

    console.log("create form submitted", this.model)
    this.state('submitting')

    var pkg = {
      email: this.refs('email').value,
      password: this.refs('password').value,
      username: this.refs('username').value
    }
    console.log('da pkg yo', pkg)
    return
    this.model.validate(pkg, (err, valid) => {

      if(err) {
        this.state('error')
        console.error('No validy yos', err)
        return
      }

      this.model.create(pkg, function(err, res) {

        if(err) {
          console.error('Model no creates :/', err)
          return
        }

        console.log('res', res)

      })

    })

  }

  onAddedToDOM() {
    console.log('added to dom in auth view')

    this.model.on('change', () => {
      console.log('change', this.model.attr)
    })

    this.refs('form',     '.auth-form')
    this.refs('email',    '#auth-email')
    this.refs('password', '#auth-password')
    this.refs('username', '#auth-username')
  }

}

export default AuthView
