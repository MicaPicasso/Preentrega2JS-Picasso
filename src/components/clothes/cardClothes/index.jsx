import "./style.css"

export function CardClothes({id, image, name, price, onAddCard, onShowDetails}){
  return(
    <div key={id} className='cardProduct' onClick={()=> onShowDetails(id)}>
      <img className="cardImage" src={image} alt={name} />
      <div className='cardContent'>
        <h3 className='cardName'>{name}</h3>
        {/* <p className='cardCategory'>{categoria}</p>
        <p className='cardDescription'>{description}</p> */}
        <p className='cardPrice'>USD {price}</p>
        {/* <p className='cardStock'>{stock}</p> */}
      </div>
      <div className='cardAdd'>
          <button onClick={()=> onAddCard(id)} className='cardButton'>Agregar al carrito</button>
      </div>
      </div>
  )
}
