import { useEffect, useState } from "react"




const WithFetch = ({children, url, arr = []}) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((apiData) => {
                setData(apiData)
            })
            .catch((e) => console.log(e))
    }, arr)

    return children(data)
}

export default WithFetch