module.exports = `
<div class="row">
  <div class="col-xs-12">
    <nav class="navbar navbar-inverse navbar-embossed" role="navigation">
      <div class="collapse navbar-collapse" id="navbar-collapse-01">
        <ul class="nav navbar-nav navbar-left">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">CMS <b class="caret"></b></a>
            <span class="dropdown-arrow"></span>
            <ul class="dropdown-menu">
              <li><a href="/templates/create">Create Template</a></li>
              <li class="divider"></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </li>
          <li><a href="#fakelink">Menu Item<span class="navbar-unread">1</span></a></li>

          <li><a href="#fakelink">About Us</a></li>

          #{menu}

         </ul>
         <form class="navbar-form navbar-right" action="#" role="search">
          <div class="form-group">
            <div class="input-group">
              <input class="form-control" id="navbarInput-01" type="search" placeholder="Search">
              <span class="input-group-btn">
                <button type="submit" class="btn"><span class="fui-search"></span></button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </nav>
  </div>
</div>
`
