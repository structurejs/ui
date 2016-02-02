module.exports = (router) => {

  router.get('/auth/create')
  router.get('/auth/login')

  router.get('/dashboard',          {action: 'index'})

  router.get('/organizations/:sid', {action: 'profile'})
  router.get('/organizations',      {action: 'index'})

  router.get('/settings',           {action: 'index'})

  router.get('/templates/create')

  router.get('/users/:sid',         {action: 'profile'})
  router.get('/users',              {action: 'index'})

}
