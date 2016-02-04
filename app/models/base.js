import Dragon from 'dragon.js'
import {Base} from 'structure-sdk'

class BaseModel extends Dragon.Model {

  constructor(attr = {}, options = {}) {
    super(attr, options)

    this.resource      = new Base({model: this})
    this.schema        = options.schema
    this.storeAutoLoad = (typeof options.storeAutoLoad == 'boolean') ? options.storeAutoLoad : true

    /*
    If the model is using a store, it will attempt to retrieve the contents
    of the store from local storage.
    */
    if(this.storeAutoLoad) {
      this.ensureStore()
      this.pull()

      var _this = this

      this.storeListenerOn()
      // TODO: This is ghetto
      this.store.on('change', function Model_storeOnChange(name, pkg) {
        _this.emit('store:change', name)
      })
    }

  }

  create() {

    this.resource.create.apply(this.resource, arguments)

  }

  delete() {

    this.resource.delete.apply(this.resource, arguments)

  }

  ensureStore() {
    if(!this.store) {
      this.store = new Dragon.Store({name: this.options.store})
    }
  }

  get() {

    this.resource.get.apply(this.resource, arguments)

  }

  pull(name) {

    if(!name) name = this.options.store
    if(!name) return

    this.ensureStore()
    //var pkg = Object.assign({}, this.attr, this.store.get())

    this.set(this.store.get())

  }

  push(pkg = {}, options = {}) {

    this.ensureStore()
    //pkg = Object.assign({}, this.attr, pkg)

    this.set(pkg)
    this.storeListenerOff()
    this.store.set(pkg, options)
    setTimeout(this.storeListenerOn.bind(this), 100) // Trying to avoid setting model a second time from `store:change`

  }

  setActive(cb) {
    var sid   = this.attr.sid,
        store = new Dragon.Store({name: this.name})

    this.get(sid, function(err, res) {
      if(cb) cb()
    })
  }

  storeListenerOn() {
    var _this = this

    this.on('store:change', (name) => {

      if(name == this.options.store) {
        this.pull()
      }
    })

  }

  storeListenerOff() {

    this.off('store:change')
  }

  update() {

    this.resource.update.apply(this.resource, arguments)

  }

  validate(pkg, cb) {

    // TODO: what to do here?
    if(!this.schema) return cb(null, true)

    this.schema.validate(pkg, function(err, valid) {
      if(err) {
        console.error('could not validate pkg', pkg)
        return cb(err)
      }

      return cb(null, true)
    })

  }

}

export default BaseModel
