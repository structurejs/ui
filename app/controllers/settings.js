import Auth                from '../models/auth'
import Dragon              from 'dragon.js'
import IndexView           from '../components/settings/views/index'
import NavigationComponent from '../components/navigation/index'

class SettingsController extends Dragon.Controller {

  index(req, res, next) {

    this.compose('navigation', NavigationComponent)

    this.indexView = new IndexView({

    })

  }

}

export default SettingsController
