import BaseCollection  from '../../models/collection'
import {User}          from 'structure-sdk'
import UserModel       from '../../models/user'

class UserCollection extends BaseCollection {

  constructor(attr = {}, options = {}) {
    super(attr, Object.assign({}, {
      model: UserModel
    }, options))

    this.resource = new User({model: this})
  }

  fetch(cb) {
    var _this = this

    this.resource.list(null, function listFetchCallback(err, res) {

      if(err) {
        return cb(err)
      }

      _this.add(res)
      console.log(res)
      return cb(null, res)

    })

  }

}

export default UserCollection
