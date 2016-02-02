import BaseView from '../../../views/base'

class UserProfileView extends BaseView {

  constructor(options = {}) {

    super(Object.assign({}, {
      class: 'container view-user',
      container: '#app-container',
      id: 'view-user-profile',
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

export default UserProfileView
