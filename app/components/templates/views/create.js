import Dragon from 'dragon.js'

class TemplateView extends Dragon.View {

  constructor(options = {}) {

    super(Object.assign({}, {
      class: 'container',
      container: '#app-container',
      id: 'template-create-view',
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

export default TemplateView
