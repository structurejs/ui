import Dragon from 'dragon.js'
import {Base} from 'structure-sdk'

class BaseModel extends Dragon.Model {

  constructor() {
    super()

    this.resource = new Base({model: this})
  }

  create() {

    this.resource.create.apply(this.resource, arguments)

  }

  delete() {

    this.resource.delete.apply(this.resource, arguments)

  }

  get() {

    this.resource.get.apply(this.resource, arguments)

  }

  update() {

    this.resource.update.apply(this.resource, arguments)

  }

}

export default BaseModel
