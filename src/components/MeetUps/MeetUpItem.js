import React, { useContext } from "react";
import Card from "../UI/card";
import classes from "./MeetUpItem.module.css";
import FavouriteContext from "../../Store/Favourite-Context";

const MeetUpItem = (props) => {
    const favouritesCtx = useContext(FavouriteContext);
    const itemIsFavorite = favouritesCtx.itemIsFavorite(props.id);

    const toggleFavoritesStatusHandler = () => {
        if (itemIsFavorite) {
            favouritesCtx.removeFavorite(props.id);
        }
        else{
            favouritesCtx.addFavorite({
                id : props.id,
                title : props.title,
                image : props.Image,
                address : props.address,
                description : props.description,
            })
        }

    }

    return (
        <li className={classes.item} >
            <Card>
                <div className={classes.image} >
                    <img src={props.Image} alt={props.title} />
                </div>
                <div className={classes.content} >
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoritesStatusHandler} >{itemIsFavorite?"Remove From Favorites":"To Favorites"}</button>
                </div>
            </Card>
        </li>
    );
}
export default MeetUpItem;