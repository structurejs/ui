import Dragon from 'dragon.js'
import {Base} from 'structure-sdk'

class BaseModel extends Dragon.Model {

  constructor(attr = {}, options = {}) {
    super(attr, options)

    this.resource = new Base({model: this})
    this.schema   = options.schema

    /*
    If the model is using a store, it will attempt to retrieve the contents
    of the store from local storage.
    */
    if(options.store) {
      this.store = new Dragon.Store({name: options.store})
      this.attr  = Object.assign({}, this.attr, this.store.get())
      window.store = this.store
    }

    /*
    When updates are made to the model, the model will pass a copy of the
    updates to the store.
    */
    this.on('change', () => {
      var o = Object.assign({}, this.attr)
      delete o.partials
      if(this.store) this.store.set(o)
    })
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

  validate(pkg, cb) {

    // TODO: what to do here?
    if(!this.schema) return cb(null, true)

    this.schema.validate(pkg, function(err, valid) {
      if(err) return cb(err)

      return cb(null, true)
    })

  }

}

export default BaseModel
