import BaseModel      from '../../models/base'
import Dragon         from 'dragon.js'
import {Organization} from 'structure-sdk'

class OrganizationModel extends BaseModel {

  constructor(attr = {}, options = {}) {
    super(attr, Object.assign({}, {
      store: 'organization'
    }, options))

    this.resource = new Organization({model: this})
  }

}

export default OrganizationModel
