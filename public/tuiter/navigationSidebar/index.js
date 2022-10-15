const NavigationSidebar = () => {
    return(`
      <div class="list-group">

        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>

          <a href="#" class="list-group-item list-group-item-action active "> <i class="fa fa-hashtag float-start mt-1"></i>
                            <span class="d-none d-xl-block float-start"> Explore </span></a>
                            
          <a href="#" class="list-group-item list-group-item-action "> <i class="fa fa-bell float-start mt-1"></i>
              <span class="d-none d-xl-block float-start ps-1"> Notifications </span></a>

          <a href="#" class="list-group-item list-group-item-action"> <i class="fa fa-envelope float-start mt-1"></i>
              <span class="d-none d-xl-block float-start ps-1"> Messages </span></a>

          <a href="#" class="list-group-item list-group-item-action "> <i class="fa fa-bookmark float-start mt-1"></i>
              <span class="d-none d-xl-block float-start ps-1"> Bookmarks </span></a>

          <a href="#" class="list-group-item list-group-item-action "> <i class="fa fa-list float-start mt-1"></i>
              <span class="d-none d-xl-block float-start ps-1"> Lists </span></a>

          <a href="#" class="list-group-item list-group-item-action"> <i class="fa fa-user float-start mt-1"></i>
              <span class="d-none d-xl-block float-start ps-1"> Profile </span></a>
          
          <a href="#" class="list-group-item list-group-item-action"> <i class="fa fa-circle float-start mt-1 style="color:White""></i>
            <span class="d-none d-xl-block float-start ps-1"> More </span></a>

      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }
   export default NavigationSidebar;