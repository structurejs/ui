import Field      from '../models/field'
import FormView   from '../../../views/form'
import {router}   from '../../../index'
import Sortable   from 'sortablejs'
import {Template} from 'starplate'
var StarplateTemplate = Template

var partialBtnAPI    = new StarplateTemplate(require('../templates/partials/json-api')),
    partialTextArea  = new StarplateTemplate(require('../templates/text-area')),
    partialTextInput = new StarplateTemplate(require('../templates/text-input'))

class TemplateView extends FormView {

  constructor(options = {}) {

    super(Object.assign({}, {
      class: 'container template-view',
      container: '#app-container',
      id: 'template-create-view',
      template: require('../templates/create')
    }, options))

    this.childContainer('template-header', '#template-field-header', function templateHeaderReducer(state, action) {
      //console.log('fired', state.current)
      switch(state.current) {

        case 'saving':

          return Object.assign({}, state, {
            state: `state-${state.current}`,
            text: {
              save: require('../../../templates/partials/spinner')
            }
          })

        default:

          return Object.assign({}, state, {
            state: '',
            text: {
              save: 'Save'
            }
          })

      }
    })
    //this.childContainer('template-header').use()

    this.fieldCounter = 0

  }

  formSubmit(e) {
    e.preventDefault()

    this.state('submitting')

    //this.childContainer('template-header').update({current: 'saving'})

    var pkg = {
      header: document.querySelectorAll('#template-create-view h1')[0].innerText,
      fields: this.collections.template.getData().map((model) => {
        delete model.fieldCounter
        return model
      }),
      organizations: [this.models.organization.attr.id]
    }

    console.log('form pkg', pkg)

    this.collections.template.create(pkg, function(err, res) {

      if(err) {
        console.error('Create template error :/', err)
        return
      }

      console.log('Create template successful', res)
      router.navigate(`/templates/${res.sid}`)

    })

  }

  getFieldIndex(e) {
    return this.getElementIndex(e.target.parentNode.parentNode.childNodes, e.target.parentNode)
  }

  onAddedToDOM() {
    this.refs('menu-text-area',        'a[href="#text-area"]')
    this.refs('menu-text-input',       'a[href="#text-input"]')
    this.refs('save',                  'a[href="#save-template"]')
    this.refs('template-field-delete', '.template-field-delete')
    this.refs('template-fields',       '#template-fields')

    this.event('click', this.refs('menu-text-area'), this.onAddTextArea)
    this.event('click', this.refs('menu-text-input'), this.onAddTextInput)
    this.delegateEvent('click', this.refs('template-fields'), '.template-field-delete', this.onTemplateFieldDelete)
    this.delegateEvent('keyup', this.refs('template-fields'), '.template-field', this.debounce(this.onFieldKeyUp, 1000))
  }

  onAddTextArea(e) {
    e.preventDefault()

    this.fieldCounter++
    this.collections.template.add({
      fieldCounter: this.fieldCounter,
      type: 'text-area'
    })

    this.startDragDrop()
  }

  onAddTextInput(e) {
    e.preventDefault()

    this.fieldCounter++
    this.collections.template.add({
      fieldCounter: this.fieldCounter,
      type: 'text-input'
    })

    /*
    TODO: figure out why this isn working
    */
    /*setTimeout(() => {
      document.getElementById(`template-field-${this.fieldCounter}`).focus()
    }, 100)*/

    this.startDragDrop()
  }

  onDragEnd(e) {
    var fromIndex = e.oldIndex,
        toIndex   = e.newIndex

    this.collections.template.move(fromIndex, toIndex)
  }

  onFieldKeyUp(e) {
    var index = this.getFieldIndex(e)

    var model = this.collections.template.models[index]

    switch(model.attr.type) {

      case 'text-area':

        var header = document.querySelectorAll(`#${e.target.parentNode.id} .template-field-header`)[0].innerText

        model.set({
          //body: document.querySelectorAll(`#${e.target.parentNode.id} .template-field-value`)[0].value,
          desc: document.querySelectorAll(`#${e.target.parentNode.id} .template-field-desc`)[0].value,
          header,
          name: header.toLowerCase()
        })

        break

      case 'text-input':

        var header = document.querySelectorAll(`#${e.target.parentNode.id} .template-field-header`)[0].innerText

        model.set({
          //body: document.querySelectorAll(`#${e.target.parentNode.id} .template-field-value`)[0].value,
          desc: document.querySelectorAll(`#${e.target.parentNode.id} .template-field-desc`)[0].value,
          header,
          name: header.toLowerCase()
        })

        break

    }

  }

  onTemplateFieldDelete(e) {
    e.preventDefault()

    var index = this.getFieldIndex(e)

    this.collections.template.remove(index)

    this.startDragDrop()
  }

  reducer(state = initialState, action) {
    console.log('what is this', this.collections.template.options.data.sid)
    var btnAPI = (this.collections.template.options.data.sid) ? partialBtnAPI.render({
      organizationId: this.models.organization.attr.id,
      sid: this.collections.template.options.data.sid
    }) : ''

    var header = (this.collections.template.options.data.header) ? this.collections.template.options.data.header : 'New Template'

    var fields = this.collections.template.getData().map( (field, i) => {
      var model = Object.assign({}, this.collections.template.models[i].attr)

      //if(!model.fieldCounter) model.fieldCounter = i
      if(!model.header) model.header = `Field ${model.fieldCounter}`

      switch(field.type) {

        case 'text-area':
          console.log('model', model)
          return partialTextArea.render(model)

        case 'text-input':

          return partialTextInput.render(model)

      }

    }).join('')

    switch(state.current) {

      default:

        return Object.assign({}, state, {
          btnAPI,
          fields,
          header,
          state: '',
          text: {
            save: 'Save'
          }
        })

    }

  }

  startDragDrop() {

    if(!this.drag) {
      this.drag = new Sortable(document.getElementById('template-fields'), {
        animation: 150,
        draggable: '.template-field',
        delay: 0,
        forceFallback: false,
        onEnd: (e) => {
          this.onDragEnd(e)
        },
        scroll: false,
        sort: true,
      })
    } else {
      this.stopDragDrop()
      this.startDragDrop()
    }

  }

  stopDragDrop() {

    if(this.drag) {
      this.drag.destroy()
      this.drag = null
    }

  }

}

export default TemplateView
