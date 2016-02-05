import BaseModel      from '../../../models/base'
import Dragon         from 'dragon.js'

class FieldModel extends BaseModel {

  constructor(attr = {}, options = {}) {
    super(attr, Object.assign({}, {

    }, options))
  }

}

export default FieldModel
