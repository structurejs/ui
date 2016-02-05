import BaseCollection  from '../../../models/collection'
import Field           from '../models/field'
import {Template}      from 'structure-sdk'

class TemplateCollection extends BaseCollection {

  constructor(attr = {}, options = {}) {
    super(attr, Object.assign({}, {
      data: {},
      Model: Field
    }, options))

    this.resource     = new Template()
  }

  create(pkg = {}, cb) {
    var _this = this

    this.resource.put(pkg, function templateCreateCallback(err, res) {

      if(err) {
        if(typeof cb == 'function') return cb(err)
      }

      if(typeof cb == 'function') return cb(null, res)

    })

  }

  fetch(options = {}, cb) {
    var _this = this

    this.resource.request('get', `/${options.sid}`, {organizationId: options.organizationId}, function listFetchCallback(err, res) {

      if(err) {
        if(typeof cb == 'function') return cb(err)
      }

      /*
      TODO: this is really lame, but need to find some way to give a collection a data stash
      */
      _this.options.data.header = res.header

      var fieldCounter = 0,

          /*
          TODO this should be done like backbone's parse method
          */
          fields = res.fields.map( (field) => {
            fieldCounter++

            field.fieldCounter = fieldCounter

            return field

          })

      _this.add(fields)

      if(typeof cb == 'function') return cb(null, res)

    })

  }

}

export default TemplateCollection
