import React from "react";
import TuitListItem from "./tuit-list-item";
import {useSelector} from "react-redux";


const TuitList = () => {
    const tuitsArray = useSelector(state => state.tuits)
   return(
     <ul className="list-group">
       {
         tuitsArray.map(tuit =>
           <TuitListItem
             key={tuit._id} tuit={tuit}/> )
       }
     </ul>
   );
};

export default TuitList;