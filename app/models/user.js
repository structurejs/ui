import BaseModel from './base'
import {User} from 'structure-sdk'

class UserModel extends BaseModel {

  constructor() {
    super()

    this.resource = new User({model: this})
  }

}

export default UserModel
