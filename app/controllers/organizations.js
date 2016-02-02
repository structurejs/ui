import Auth                from '../models/auth'
import Dragon              from 'dragon.js'
import CreateView          from '../components/organizations/views/create'
import IndexView           from '../components/organizations/views/index'
import ListView            from '../components/organizations/views/list'
import ProfileView         from '../components/organizations/views/profile'
import NavigationComponent from '../components/navigation/index'
import Organization        from '../components/organizations/model'
import Organizations       from '../components/organizations/collection'
import User                from '../models/user'

class OrganizationController extends Dragon.Controller {

  create(req, res, next) {

    this.compose('navigation', NavigationComponent)

    this.view = new CreateView({
      model: new Organization()
    })

  }

  index(req, res, next) {

    this.compose('navigation', NavigationComponent)

    this.view = new IndexView({

    })

    var organizations = new Organizations()
    organizations.fetch( () => {

      this.list = new ListView({
        collection: organizations
      })

    })

  }

  profile(req, res, next) {

    this.compose('navigation', NavigationComponent)

    var organization = new Organization()
    organization.get(req.params.sid, () => {

      this.profile = new ProfileView({
        model: organization
      })

    })

  }

}

export default OrganizationController
