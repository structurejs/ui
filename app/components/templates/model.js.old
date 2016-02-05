import BaseModel from '../../models/base'
import {Template} from 'structure-sdk'

class TemplateModel extends BaseModel {

  constructor(attr = {}, options = {}) {
    super(attr, Object.assign({}, {
      //store: 'user'
    }, options))

    this.resource = new Template({model: this})

    this.attr.fieldList = []
  }



}

export default TemplateModel
