import BaseModel      from '../../models/base'
import {Organization} from 'structure-sdk'

class OrganizationModel extends BaseModel {

  constructor(attr = {}, options = {}) {
    super(attr, Object.assign({}, {

    }, options))

    this.resource = new Organization({model: this})
  }

}

export default OrganizationModel
