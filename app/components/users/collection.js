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

  fetch(options = {}, cb) {
    var _this = this

    this.resource.list(options, function listFetchCallback(err, res) {

      if(err) {
        return cb(err)
      }

      _this.add(res)

      if(typeof cb == 'function') return cb(null, res)

    })

  }

}

export default UserCollection
