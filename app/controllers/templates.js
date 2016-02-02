import Auth                from '../models/auth'
import Dragon              from 'dragon.js'
import CreateView          from '../components/templates/views/create'
import NavigationComponent from '../components/navigation/index'
import Template            from '../components/templates/model'
import User                from '../models/user'

class TemplateController extends Dragon.Controller {

  create(req, res, next) {

    this.compose('navigation', NavigationComponent)

    this.view = new CreateView({
      model: new Template()
    })

  }

}

export default TemplateController
