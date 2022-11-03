import React from "react";
import TuitStat from "./tuit-stat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";


const TuitListItem = (
    
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
    const deleteTuitHandler = (id) => {dispatch(deleteTuit(id));}
 return(
  <li className="list-group-item">
   <div className="row">
        <div className="col-1">
            <img className="rounded-circle" height={48} src={`/images/${tuit.image}`} alt="description"/>
        </div>
        <div className="col-11">
            <div>
                <span className="fw-bolder"> {tuit.userName} </span> 
                <span> <FontAwesomeIcon icon={faCheckCircle} color="blue"/> </span>
                {tuit.handle} . {tuit.time}
                <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
            </div>
            <div className="mb-3">{tuit.tuit}</div>
            
            <TuitStat key={tuit._id} tuit={tuit}/>
        </div>
   </div>
  </li>
 );
};
export default TuitListItem;
