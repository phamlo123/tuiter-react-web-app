import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
 return (
   <div className="list-group">

     <a className="list-group-item" href="/#"> <i className="bi bi-twitter mt-1 float-start"></i>
              <span className="d-none d-xl-block float-start ps-1"> Tuiter </span></a>

     <a className={`list-group-item
                    ${active === 'home'?'active':''}`} href="/#"> <i className="bi bi-house float-start mt-1"></i>
        <span className="d-none d-xl-block float-start ps-1">                 
       Home
       </span>
     </a>
     <a className={`list-group-item
                    ${active === 'explore'?'active':''}`} href="/#"> <i className="bi bi-hash float-start mt-1"></i>
        <span className="d-none d-xl-block float-start ps-1">                 
        Explore
       </span>
     </a>
     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`} href="/#"> <i className="bi bi-bell float-start mt-1"></i>
        <span className="d-none d-xl-block float-start ps-1">                 
        Notifications
       </span>
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`} href="/#"> <i className="bi bi-envelope float-start mt-1"></i>
        <span className="d-none d-xl-block float-start ps-1">                 
        Messages
       </span>
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`} href="/#"> <i className="bi bi-bookmark float-start mt-1"></i>
        <span className="d-none d-xl-block float-start ps-1">                 
        Bookmarks
       </span>
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`} href="/#"> <i className="bi bi-list float-start mt-1"></i>
        <span className="d-none d-xl-block float-start ps-1">                 
        Lists
       </span>
     </a>
     <a className={`list-group-item
                    ${active === 'profile'?'active':''}`} href="/#"> <i className="bi bi-person float-start mt-1"></i>
        <span className="d-none d-xl-block float-start ps-1">                 
        Profile
       </span>
     </a>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`} href="/#"> <i className="bi bi-circle float-start mt-1 style=color:White"></i>
        <span className="d-none d-xl-block float-start ps-1">                 
        More
       </span>
     </a>
   </div>
 );
};
export default NavigationSidebar;