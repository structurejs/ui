import BaseView from '../../../views/base'
import Sortable from 'sortablejs'

class TemplateView extends BaseView {

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

  /*
  TODO: Yes, it would be much smarter to create a system that doesn't require
  reading the DOM to get this information. But this is an MVP, and the correct
  way is just gonna take 10x longer.
  */
  getAllFieldsFromDOM() {

    var list = document.querySelectorAll('#template-fields .template-field')

    var fields = []

    Array.prototype.forEach.call(list, function(el) {
      var classes = el.className.split(' ')

      var inputType = null

      for(var i = 0, l = classes.length; i < l; i++) {

        switch(classes[i]) {

          case 'template-field-text-input':

            inputType = 'text-input'
            break

          case 'template-field-text-area':

            inputType = 'text-area'
            break

        }

        if(inputType) break

      }

      var children = el.children,
          desc     = '',
          title    = '',
          value    = ''

      for(var j = 0, k = children.length; j < k; j++) {
        var chEl = children[j]
        //console.log(chEl)
        switch(chEl.tagName.toLowerCase()) {

          case 'h6': title = chEl.innerText; break;

          case 'input':

            if(chEl.className.indexOf('-value') > -1) {
              value = chEl.value; break;
            }

            if(chEl.className.indexOf('-desc') > -1) {
              desc = chEl.value; break;
            }

          case 'textarea': value = chEl.value; break;

        }

      }

      fields.push({
        desc,
        title,
        type: inputType,
        value
      })

    })

    console.log(fields)

  }

  onAddedToDOM() {
    this.refs('menu-text-area',        'a[href="#text-area"]')
    this.refs('menu-text-input',       'a[href="#text-input"]')
    this.refs('save',                  'a[href="#save-template"]')
    this.refs('template-field-delete', '.template-field-delete')
    this.refs('template-fields',       '#template-fields')

    this.event('click', this.refs('save'), this.onSave)

    this.event('click', this.refs('menu-text-area'), this.onAddTextArea)
    this.event('click', this.refs('menu-text-input'), this.onAddTextInput)
    this.delegateEvent('click', this.refs('template-fields'), '.template-field-delete', this.onTemplateFieldDelete)
  }

  onAddTextArea(e) {
    e.preventDefault()
    this.fieldCounter++

    var html = require('../templates/text-area')({fieldCounter: this.fieldCounter})

    this.refs('template-fields')[0].insertAdjacentHTML('beforeend', html)

    this.startDragDrop()
  }

  onAddTextInput(e) {
    e.preventDefault()
    this.fieldCounter++

    var html = require('../templates/text-input')({fieldCounter: this.fieldCounter})

    this.refs('template-fields')[0].insertAdjacentHTML('beforeend', html)

    this.startDragDrop()
  }

  onSave(e) {
    e.preventDefault()

    this.childContainer('template-header').update({current: 'saving'})

    this.getAllFieldsFromDOM()
  }

  onTemplateFieldDelete(e) {
    e.preventDefault()

    var tplField = e.target.parentElement
    tplField.parentElement.removeChild(tplField)
  }

  reducer(state = initialState, action) {

    switch(state.current) {

      default:

        return Object.assign({}, state, {
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
