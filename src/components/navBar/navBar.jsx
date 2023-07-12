import { CardWidget } from "./components/cardWidget"
import { MenuDesplegable } from "./components/menuDesplegable";

export function NavBar(){
    return(
    <section className="navBar">
        {/* menu */}
        <MenuDesplegable/>
        <h1 className="title-navBar">ZANDRA</h1>
        <CardWidget/>
        
        
        
    </section>
    )
}

// titulo y categorias