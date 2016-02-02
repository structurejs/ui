import Dragon from 'dragon.js'

class SettingsView extends Dragon.View {

  constructor(options = {}) {

    super(Object.assign({}, {
      class: 'container view-settings',
      container: '#app-container',
      id: 'view-settings-index',
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

export default SettingsView
