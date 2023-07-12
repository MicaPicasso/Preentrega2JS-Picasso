export function MenuDesplegable(){
    return(
        <div>
            <header className="header">
		        <div className="container">
		            <div className="btn-menu">
			            <label for="btn-menu">☰</label>
		            </div>
		        </div>
	        </header>
            <input type="checkbox" id="btn-menu"/>
            <div className="container-menu">
	            <div className="cont-menu">
		            <nav>
			            <a href="#">NEW</a>
			            <a href="#">PRENDA EXTERIOR</a>
			            <a href="#">VESTIDOS</a>
			            <a href="#">CAMISAS | TOPS</a>
			            <a href="#">PUNTO</a>
			            <a href="#">BUZOS</a>
                        <a href="#">PANTALONES</a>
                        <a href="#">FALDAS | SHORTS</a>
                        <a href="#">ACCESORIOS</a>

		            </nav>
                    <div className="btn-x">
		            <label for="btn-menu" className="btn-x">🗙</label>
                    </div>
	            </div>
            </div>
        </div>
    )
}