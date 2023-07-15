import { useEffect } from "react"



const SelectTalle = ({setSelect, opciones}) => {

    const handleSelect = (e) => {
        setSelect(e.target.value)
    }

    useEffect(() => {
        setSelect(opciones[0].value)
    }, [])

    return (
        <select onChange={handleSelect}>
            {
                opciones.map((opt) => <option key={opt.value} value={opt.value}>{opt.value}</option>)
            }
        </select>
    )
}

export default SelectTalle