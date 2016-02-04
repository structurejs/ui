import Auth                from '../models/auth'
import Dragon              from 'dragon.js'
import CreateView          from '../components/organizations/views/create'
import IndexView           from '../components/organizations/views/index'
import ListView            from '../components/organizations/views/list'
import ProfileView         from '../components/organizations/views/profile'
import NavigationComponent from '../components/navigation/index'
import Organization        from '../components/organizations/model'
import Organizations       from '../components/organizations/collection'
import schemaCreate        from '../components/organizations/schemas/create'
import User                from '../models/user'
import UserListView        from '../components/users/views/list'
import UserIndexView       from '../components/users/views/index'
import Users               from '../components/users/collection'

class OrganizationController extends Dragon.Controller {

  create(req, res, next) {

    this.compose('navigation', NavigationComponent)

    this.view = new CreateView({
      model: new Organization(null, {
        schema: schemaCreate
      })
    })

  }

  index(req, res, next) {

    this.compose('navigation', NavigationComponent)

    this.view = new IndexView({

    })

    var organizations = new Organizations()
    organizations.fetch(null, () => {

      this.list = new ListView({
        collection: organizations
      })

    })

  }

  profile(req, res, next) {

    this.compose('navigation', NavigationComponent)

    var organization = new Organization()

    this.profile = new ProfileView({
      model: organization
    })

    organization.get(req.params.sid)

  }

  users(req, res, next) {

    this.compose('navigation', NavigationComponent)

    var organization = new Organization(),
        users        = new Users()

    this.indexView = new UserIndexView()

    this.userListView = new UserListView({
      collections: {
        users
      },
      models: {
        organization
      }
    })

    //organization.get(req.params.sid)
    users.fetch({
      organizationId: organization.attr.id
    })

  }

}

export default OrganizationController
