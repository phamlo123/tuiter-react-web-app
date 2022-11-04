import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMessage, faShare, faRetweet } from '@fortawesome/free-solid-svg-icons'

import React from "react";
const TuitStat = (
    {
      tuit = {
       "_id": 234,
       "topic": "Space",
       "userName": "SpaceX",
       "time": "2h",
       "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
       "image": "spacex.png",
       "liked": true,
       "replies": 123,
       "retuits": 432,
       "likes": 2345,
       "handle": "@spacex",
       "tuit": "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
     }
   }
   ) => {
    return(
     <div className="row">
        <div className="col-3">
            <i className="bi bi-reply"></i>
            <span> {tuit.replies} </span>
        </div>

        <div className="col-3">
            <FontAwesomeIcon icon={faRetweet}/>
            <span> {tuit.retuits} </span>
        </div>
        
        <div className="col-3">
            {tuit.liked ? <FontAwesomeIcon icon={faHeart} color="red"/> : <i className="bi bi-heart"></i>}
            <span> {tuit.likes} </span>
        </div>

        <div className="col-3">
            <i className="bi bi-share"></i>
        </div>
     </div>
    );
   };
   export default TuitStat;
   