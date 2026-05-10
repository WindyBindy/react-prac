import { Component } from "react"
import style from "./CarsList.module.css"


class CarsList extends Component{

render(){


const {list, remove} = this.props


  return (
    <ul className={style.list} >{list.map(({id,brand, model, year, country, engine, horsepower, type, image})=>{
      return( 
        <li key={id} className={style.item}>
          <h2>{brand}</h2>
          <p>{model}</p>
          <p>{year}</p>
          <p>{country}</p>
          <p>{engine}</p>
          <p>{horsepower}</p>
          <p>{type}</p>
          <img src={image} alt={model}  />
          <button type="button" onClick={()=> remove(id)} >X</button>
        </li>
      )
    })}</ul>
  )
}
}
export default CarsList
