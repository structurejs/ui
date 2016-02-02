import BaseView from '../../../views/base'

class UserIndexView extends BaseView {

  constructor(options = {}) {

    super(Object.assign({}, {
      class: 'container view-user',
      container: '#app-container',
      id: 'view-user-index',
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

export default UserIndexView
