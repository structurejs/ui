import Dragon   from 'dragon.js'

class DashboardView extends Dragon.View {

  constructor(options = {}) {

    super(Object.assign({}, {
      class: 'container',
      container: '#app-container',
      id: 'dashboard-view',
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

export default DashboardView
