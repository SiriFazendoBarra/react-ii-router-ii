import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import Loading from "../components/Loading"

export default function Menu() {
    const params = useParams()
    const navigate = useNavigate()
    
    const [menu, setMenu] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    

    const getMenu = async () => {
        
        try {
            setLoading(true)
            const res = await fetch("../menus.json")
            if(!res) throw(`${res.ok}`)
            const data = await res.json()
            for (const item of data.menus) {
                item.id == params.id ? setMenu(item) : null
            }
            
            
        } catch (error) {
            setError(error)
            navigate('/menus')
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getMenu()
    }, [])

    if (loading) return <Loading />
    if (!menu) return <h1>{`No existe el menú ${params.id}`}</h1>

    return (
        <div className="container">
            <h1>{menu.nombre}</h1>
            <p>{menu.almuerzo}</p>
            <button className="btn btn-dark" onClick={()=> navigate('/menus')}>Volver al Menú</button>
        </div>
    )
}