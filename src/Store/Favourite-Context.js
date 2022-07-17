import { createContext, useState } from "react";


const FavouriteContext=createContext({
});

 export function FavouriteContextProvider(props){
    const [userFavourites,setuserFavourites]=useState([]);

     const addFavoriteHandler=(favoriteMetUp)=>{
         setuserFavourites((prevuserFavourites)=>{
            return prevuserFavourites.concat(favoriteMetUp)
         })

     }
     const removeFavoriteHandler=(meetUpId)=>{
        setuserFavourites((prevuserFavourites)=>{
           return prevuserFavourites.filter((meetup) => meetup.id !== meetUpId)
     })
    }
     const itemIsFavoriteHandler=(meetUpId)=>{
           return userFavourites.some((meetup) => meetup.id === meetUpId
           )
     }

    const context={
        Favourites:userFavourites,
        totalFavourites:userFavourites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,

    }

    return(
        <FavouriteContext.Provider value={context} >
        {props.children}
        </FavouriteContext.Provider>
    );
}
export default FavouriteContext;