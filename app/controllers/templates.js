import Auth                from '../models/auth'
import Dragon              from 'dragon.js'
import CreateView          from '../components/templates/views/create'
import Organization        from '../components/organizations/model'
import NavigationComponent from '../components/navigation/index'
import Template            from '../components/templates/collections/template'
import User                from '../models/user'

class TemplateController extends Dragon.Controller {

  create(req, res, next) {

    this.compose('navigation', NavigationComponent)

    var organization = new Organization()

    this.view = new CreateView({
      collections: {
        template: new Template()
      },
      models: {
        organization
      }
    })

  }

  template(req, res, next) {

    this.compose('navigation', NavigationComponent)

    var organization = new Organization(),
        template     = new Template([], {
          data: {
            sid: req.params.sid
          }
        })

    this.view = new CreateView({
      collections: {
        template
      },
      models: {
        organization
      }
    })

    template.fetch({
      organizationId: organization.attr.id,
      sid: req.params.sid
    })

  }

}

export default TemplateController
