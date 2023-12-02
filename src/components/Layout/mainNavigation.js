import React, { useContext , useState} from "react";
import { Link } from "react-router-dom";
import FavouriteContext from "../../Store/Favourite-Context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {

    const FavouriteCtx=useContext(FavouriteContext);
    const [nav,setnav] = useState('false');

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav('true');
        }else{
            setnav('false');
        }
    }
        window.addEventListener( 'scroll' ,changeBackground);

    return (
        <header className={nav?classes.header2:classes.header}>
            <div className={classes.logo} >
                Articals
            </div>
            <nav>
                <ul className={classes.header.ul} >
                    <li className={classes.header.li} >
                        <Link to='/' >
                            All Articals
                        </Link>
                    </li>
                    <li className={classes.header.li} >
                        <Link to='/Favourites' >
                            Favourites
                            <span className={classes.badge}>{FavouriteCtx.totalFavourites}</span>
                        </Link>
                    </li>
                    <li className={classes.header.li} >
                        <Link to='/NewArticals' >
                            New Articals
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;