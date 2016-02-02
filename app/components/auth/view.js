import Dragon   from 'dragon.js'
import FormView from '../../views/form'
import {router} from '../../index'

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
                submit: require('../../templates/partials/spinner')
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

    console.log("form submitted", this.model)
    this.state('submitting')

    var pkg = {
      email: this.refs('email')[0] ? this.refs('email')[0].value : '',
      password: this.refs('password')[0] ? this.refs('password')[0].value : '',
      username: this.refs('username')[0] ? this.refs('username')[0].value : ''
    }
    console.log('auth pkg', pkg)

    this.model.validate(pkg, (err, valid) => {

      if(err) {
        this.state('error')
        console.error('No validy yos', err)
        return
      }

      if(this.options.type == 'login') {
        this.model.login(pkg, function(err, res) {

          if(err) {
            console.error('Login error :/', err)
            return
          }

          console.log('login successful', res)
          router.navigate('/dashboard')

        })
      }

      else {
        this.model.create(pkg, function(err, res) {

          if(err) {
            console.error('Model no creates :/', err)
            return
          }

          console.log('create account successful', res)
          router.navigate('/dashboard')

        })
      }

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
