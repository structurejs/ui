import Auth         from '../models/auth'
import Dragon       from 'dragon.js'
import schemaCreate from '../components/auth/schemas/create'
import schemaLogin  from '../components/auth/schemas/login'
import User         from '../models/user'
import View         from '../components/auth/view'

class AuthController extends Dragon.Controller {

  create(req, res, next) {
    this.model = new User(null, {
      schema: schemaCreate
    })

    this.view = new View({
      model: this.model,
      type: 'create'
    })
  }

  login(req, res, next) {
    this.model = new Auth(null, {
      schema: schemaLogin
    })

    this.view = new View({
      model: this.model,
      type: 'login'
    })
  }

}

export default AuthController
