import BaseCollection    from '../../models/collection'
import {Organization}    from 'structure-sdk'
import OrganizationModel from './model'

class OrganizationCollection extends BaseCollection {

  constructor(attr = {}, options = {}) {
    super(attr, Object.assign({}, {
      model: OrganizationModel
    }, options))

    this.resource = new Organization({model: this})
  }

  fetch(cb) {
    var _this = this

    this.resource.list(null, function listFetchCallback(err, res) {

      if(err) {
        return cb(err)
      }

      _this.add(res)

      return cb(null, res)

    })

  }

}

export default OrganizationCollection
