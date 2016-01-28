module.exports = (router) => {

  router.get('/auth/create')
  router.get('/auth/login')

  router.get('/dashboard', {action: 'index'})

  router.get('/templates/create')

}
