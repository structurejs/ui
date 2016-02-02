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
