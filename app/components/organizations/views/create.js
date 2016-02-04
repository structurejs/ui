import FormView from '../../../views/form'
import {router} from '../../../index'

class OrganizationCreateView extends FormView {

  constructor(options = {}) {

    super(Object.assign({}, {
      class: 'container view-organization',
      container: '#app-container',
      id: 'view-organization-create',
      template: require('../templates/create')
    }, options))

  }

  formSubmit(e) {
    e.preventDefault()

    this.state('submitting')

    var pkg = {
      desc: this.refs('desc')[0] ? this.refs('desc')[0].value : '',
      title: this.refs('title')[0] ? this.refs('title')[0].value : ''
    }
    //console.log('form pkg', pkg)

    this.model.validate(pkg, (err, valid) => {

      if(err) {
        this.state('error')
        console.error('No validy yos', err)
        return
      }

      if(this.options.type == 'update') {
        this.model.update(pkg, function(err, res) {

          if(err) {
            console.error('Update error :/', err)
            return
          }

          console.log('update successful', res)

        })
      }

      else {
        this.model.create(pkg, function(err, res) {

          if(err) {
            console.error('Model no creates :/', err)
            return
          }

          console.log('create organization successful', res)
          router.navigate(`/organizations/${res.sid}`)

        })
      }

    })

  }

  onAddedToDOM() {
    this.refs('form',     '.view-form')
    this.refs('title',    '#template-field-organization-title input')
    this.refs('desc',     '#template-field-organization-desc input')
  }

  reducer(state = initialState, action) {

    switch(state.current) {

      default:

        return Object.assign({}, state, {

        })

    }

  }

}

export default OrganizationCreateView
