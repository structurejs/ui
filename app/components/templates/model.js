import BaseModel from '../../models/base'
import {Base} from 'structure-sdk'

class TemplateModel extends BaseModel {

  constructor(attr = {}, options = {}) {
    super(attr, Object.assign({}, {
      //store: 'user'
    }, options))

    this.resource = new Base({model: this})
  }

}

export default TemplateModel
