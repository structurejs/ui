import ListView from '../../../views/list'

class UserListView extends ListView {

  constructor(options = {}) {

    super(Object.assign({}, {
      class: 'container view-list view-user',
      container: '#app-container',
      id: 'view-user-list',
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

export default UserListView
