import { useEffect, useState } from "react"


export const withFetch = (Component) => {

    const WithFetch = ({url, arr = [], ...props}) => {
        const [data, setData] = useState(null)
        
        useEffect(() => {
            fetch(url)
                .then((resp) => resp.json())
                .then((apiData) => {
                    setData(apiData)
                })
                .catch((e) => console.log(e))
        }, arr)

        return <Component data={data} {...props}/>
    }

    return WithFetch
}