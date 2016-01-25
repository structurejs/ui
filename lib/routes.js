import {chalk, logger} from './logger'
import path            from 'path'

import {Base, User} from 'structure-sdk'

function handleResource(req, res, next) {

  logger.debug('req.params', req.params)
  logger.debug('req.body', req.body)

  var actionName    = null,
      args          = [req.params.id],
      resource      = null

  logger.debug('req.params.resource', req.params.resource)

  switch(req.params.resource) {

    case 'users':

      resource = new User()

      switch(req.method) {

        case 'GET':    actionName = 'get';            break;
        case 'POST':   actionName = 'update';         break;
        case 'PUT':    actionName = 'create';         break;
        case 'DELETE': actionName = 'delete';         break;

      }

      break

    default:
      resource = 'base'

  }

  logger.debug('resource', req.params.resource)
  logger.debug('actionName', actionName)

  function handleResult(err, resp, status) {

    logger.debug('status', status)

    if(err) {
      logger.error(`Could not fetch ${resource}.${actionName}`, err)
      return res.status(status).send(err).end()
    }

    logger.debug('WHATTTTT', resp)

    return res.status(status).send(resp)

  }

  if(req.method == 'GET') {
    args.push(handleResult)
  }

  else {
    args.push(req.body)
    args.push(handleResult)
  }

  resource[actionName].apply(resource, args)

}

function routes(server) {

  server.all('/api/v0.1/:resource/:id', handleResource)
  server.all('/api/v0.1/:resource', handleResource)

  server.get(/^[^.]+$|\.(?!(css|gif|ico|jpg|js|map|mp4|png|tiff|woff|woff2)$)([^.]+$)/, (req, res) => {

    res.sendFile(path.join(__dirname, '../public/index.html'))

  })

}

module.exports = routes
