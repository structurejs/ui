import BaseView from '../../../views/base'

class OrganizationProfileView extends BaseView {

  constructor(options = {}) {

    super(Object.assign({}, {
      class: 'container view-organization',
      container: '#app-container',
      id: 'view-organization-profile',
      template: require('../templates/profile')
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

export default OrganizationProfileView
