import BaseModel from './base'
import {User} from 'structure-sdk'

class UserModel extends BaseModel {

  constructor(attr = {}, options = {}) {
    super(attr, Object.assign({}, {
      store: 'user'
    }, options))

    this.resource = new User({model: this})
  }

}

export default UserModel
