import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css"
import { useLocation } from "react-router-dom";


const NavBar = ()=>{

    const location = useLocation()
    const {pathname} = location

    return(
        <div className={pathname==="/home"? style.div_NavBar : style.div_NavBar2}>
        
            <div className={style.HoFoAb}>
            <NavLink to="/home" className={style.Nav_Bar}>- Home</NavLink>
            <NavLink className={style.Nav_Bar} to="/form">- Crear tu propio Pokemon</NavLink>
            <NavLink className={style.Nav_Bar} to="/about">- About</NavLink>
            </div>

            <div>
            {pathname ==="/home" && <SearchBar/>}
            </div>
            
            <div>
            <NavLink className={style.btn} to="/">logout</NavLink>
            </div>

        </div>
    )
}

export default NavBar