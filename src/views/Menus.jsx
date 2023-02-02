import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Menus () {

    // const menus = [
    //     {nombre: 'almuerzo-1', almuerzo: 1},
    //     {nombre: 'almuerzo-2', almuerzo: 2},
    //     {nombre: 'almuerzo-3', almuerzo: 3},
        
    // ]

    const [menus, setMenus] = useState(null)

    const getMenus = async() =>{
        const res = await fetch("../menus.json")
        const data = await res.json()
        
        setMenus(data)
        console.log(menus)
    }

    useEffect(() =>{
        getMenus()
    },[])
    
    if (!menus) return <h1>loading...</h1>
    
    return(
        <div className="container">
            <ul>
                {menus.map((menu) =>{
                    return(
                        <li key={menu.nombre}>
                            <Link to={`/menus/${menu.nombre}`}>{menu.almuerzo}</Link>
                        </li>
                )
                })}
            </ul>
        </div>
    )
}