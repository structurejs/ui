import BaseView from '../../../views/base'

class UserCreateView extends BaseView {

  constructor(options = {}) {

    super(Object.assign({}, {
      class: 'container view-user',
      container: '#app-container',
      id: 'view-user-create',
      template: require('../templates/create')
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

export default UserCreateView
