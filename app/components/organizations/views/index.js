import BaseView from '../../../views/base'

class OrganizationIndexView extends BaseView {

  constructor(options = {}) {

    super(Object.assign({}, {
      class: 'container view-organization',
      container: '#app-container',
      id: 'view-organization-index',
      template: require('../templates/index')
    }, options))

  }

  onAddedToDOM() {

  }

  reducer(state = initialState, action) {

    switch(state.current) {

      default:

        return Object.assign({}, state, {

        })

    }

  }

}

export default OrganizationIndexView
