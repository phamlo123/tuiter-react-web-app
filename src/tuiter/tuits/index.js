import React from "react";
import TuitListItem from "./tuit-list-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";
import { useEffect } from "react";
  
const TuitsList = () => {
    const dispatch = useDispatch();
   const {tuits, loading} = useSelector(
    state => state.tuitsData)
    let obj = findTuitsThunk()
   useEffect(() => {
     dispatch(obj)
   }, [])
  

   return(
     <ul className="list-group">
           {
       loading &&
       <li className="list-group-item">
         Loading...
       </li>
       }

       {
         tuits.map(tuit =>
           <TuitListItem
             key={tuit._id} tuit={tuit}/> )
       }
     </ul>
   );
};

export default TuitsList;