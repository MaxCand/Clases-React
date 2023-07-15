import { memo } from "react"

const UnMemo = memo(() => {
    console.log("Soy un memo")

    for (let i = 0; i < 1000; i++) {
        console.log(i)
    }

    return (
        <div>
            <h4>Soy un memo</h4>
        </div>
    )
})

export default UnMemo