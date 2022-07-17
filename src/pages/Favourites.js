import React, { useContext } from "react";
import MeetUpList from "../components/MeetUps/MeetUpList";
import FavouriteContext from "../Store/Favourite-Context";

const Favourites=()=>{
    const favoutiteCtx = useContext(FavouriteContext);

    let content;
    if(favoutiteCtx.totalFavourites === 0){
        content=<p>You got no Favouritesbyet sart Assing Some</p>

    }else{
        content=<MeetUpList meetups={favoutiteCtx.Favourites}/>
    }
    return(
        <div>
        <h1>Favorites</h1>
        {content}
        </div>
    );
}
export default Favourites;