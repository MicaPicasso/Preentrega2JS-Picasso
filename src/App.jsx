import { useState, useEffect } from 'react'
import { NavBar} from './components/navBar/navBar'
import { ItemListContainer } from './components/navBar/components/itemListContainer'
import './App.css'
import { Counter } from "./components/counter/index";
import { Input } from './components/input/index';
import { CardClothes } from "./components/clothes/cardClothes/index";
import {Details} from "./components/clothes/details/index";

function App() {
  const [search, setSearch] = useState("");
  const [active, setActive]=useState(false);
  const [clothes, setClothes]= useState([]);
  const [showDetails, setshowDetails]=useState(false);
  const [clothesDetails, setClothesDetails]= useState([]);

  const onChange =(event)=>{
    const value= event.target.value;
    setSearch(value);
  }
  const onFocus =()=>{
    setActive(true);
  }
  const onBlur =()=>{
    setActive(false);
  }
  const inputClass = `input-buscador ${active ? "active" : ""}`;

  const onShowDetails=(id)=>{
    setshowDetails(true);
    const findClothes = clothes.find((cloth)=> cloth.id === id);
    setClothesDetails(findClothes);
  }

  useEffect(()=>{
    const getclothes= async()=>{
      try{
        const response = await fetch('https://64ae5cc5c85640541d4ce9e8.mockapi.io/clothes', {
          method: "GET",
          headers:{
            "Content-Type": "application/json",
          }
        });
        const data= await response.json();

        setClothes(data);
       
        console.log(response);
      }catch(error){
        console.error(error);
      }
    }
    getclothes();
  },[])

  

  console.log({clothes});

  return (
    <>
    <NavBar/>
    {/* <ItemListContainer/> */}

    
    {/* <Counter/> */}
    <Input onChange={onChange} onFocus={onFocus} onBlur={onBlur} className={inputClass}/>
   
   
    {showDetails ? (
      <div>
     <button onClick={()=> setshowDetails(false)} className='backButton'>← VOLVER</button>
     <Details {...clothesDetails}/>
     </div>
    ):(
          <div className='cardContainer'>
        {
        clothes.map((cloth)=>(
          <CardClothes {...cloth} onShowDetails={onShowDetails}/>
        ))
        }
        </div>
    )}
    
    </>
  )
}

export default App
