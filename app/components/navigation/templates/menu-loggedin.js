module.exports = `
<li class="dropdown">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Structure <b class="caret"></b></a>
  <span class="dropdown-arrow"></span>
  <ul class="dropdown-menu">
    <li><a href="/templates/create">Create Template</a></li>
    <li><a href="/organizations">Organizations</a></li>
    <li><a href="/users">Users</a></li>
    <li class="divider"></li>
    <li><a href="/settings">Settings</a></li>
  </ul>
</li>
<li class="dropdown">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown">#{username}</a>
  <span class="dropdown-arrow"></span>
  <ul class="dropdown-menu">
    <li><a href="/users/#{sid}">Profile</a></li>
    <li class="divider"></li>
    <li><a href="/users/#{sid}/settings">Settings</a></li>
  </ul>
</li>
`
