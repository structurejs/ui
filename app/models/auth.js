import BaseModel from './base'
import {Auth} from 'structure-sdk'

class AuthModel extends BaseModel {

  constructor() {
    super()

    this.resource = new Auth({model: this})
  }

  login() {
    this.resource.login.apply(this.resource, arguments)
  }

}

export default AuthModel
