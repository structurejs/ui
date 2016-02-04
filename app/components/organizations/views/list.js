import ListView from '../../../views/list'

class OrganizationListView extends ListView {

  constructor(options = {}) {

    super(Object.assign({}, {
      class: 'container view-organization',
      container: '#app-container',
      id: 'view-organization-index',
      template: require('../templates/list')
    }, options))

  }

  onAddedToDOM() {
    var _this = this

    this.refs('list-items', '.list-view li')

    this.delegateEvent('click', this.refs('list-items'), 'a[href="#make-active"]', this.onMakeActive)

  }

  onMakeActive(e) {
    e.preventDefault()

    var i = this.getElementIndex(
      e.target.parentNode.parentNode.childNodes,
      e.target.parentNode
    )

    var model = this.collection.models[i]
    model.options.store = 'organization'

    model.setActive( () => {
      model.options.store = null
    })
  }

  reducer(state = initialState, action) {

    switch(state.current) {

      default:

        return Object.assign({}, state, {

        })

    }

  }

}

export default OrganizationListView
