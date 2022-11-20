import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks"
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
    const dispatch = useDispatch();
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
            Likes: {tuit.likes}
            <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                likes: tuit.likes + 1         
            }))} className="bi bi-heart-fill me-2 text-danger"> </i>
        </div>

        
        <div className="col-3">
            <i className="bi bi-share"></i>
        </div>

     </div>
    );
   };
   export default TuitStat;
   