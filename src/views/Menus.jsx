import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Loading from "../components/Loading"

export default function Menus() {

    const [menus, setMenus] = useState(null)

    const getMenus = async () => {

        try {
            const res = await fetch("../menus.json")
            if (!res.ok) throw('404')
            const data = await res.json()
            setMenus(data.menus)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMenus()
    }, [])

    if (!menus) return <Loading />

    return (
        <div className="container">
            <ul>
                {menus.map((menu) => {
                    return (
                        <li key={menu.id}>
                            <Link to={`/menus/${menu.id}`}>{menu.nombre}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}