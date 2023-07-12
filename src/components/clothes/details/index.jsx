import "./style.css"

export function Details({id, image, name,description, categoria, stock, price, onAddCard}){
    return(
      <div className='cardProductDetails'>
        <img className="cardImageDetails" src={image} alt={name} />
        <div className='cardContentDetails'>
          <h3 className='cardNameDetails'>{name}</h3>
          <p className='cardCategoryDetailsDetails'>{categoria}</p>
          <p className='cardDescriptionDetails'>{description}</p>
          <p className='cardPriceDetails'>USD {price}</p>
          <p className='cardStockDetails'>STOCK {stock}</p>
            <div className='cardAddDetails'>
                <button onClick={()=> onAddCard(id)} className='cardButtonDetails'>Agregar al carrito</button>
            </div>
        </div>
        
        </div>
    )
  }
  