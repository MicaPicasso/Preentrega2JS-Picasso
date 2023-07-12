import React from "react";
import "./style.css"

export function Input(onFocus,onBlur,onChange, value, className){
    return(
        <input className="input-buscador" type="text" placeholder="BUSCAR" onFocus={onFocus} onBlur={onBlur} onChange={onChange} value={value}/>
    )
}