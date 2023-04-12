import { useState } from "react"
import Mole from "./Mole"
import Empty from "./Empty"

export default function MoleContainer({ setScore, score }) {
    const [isShowing, setIsShowing] = useState(false)

    const onMoleClick = e => {
        if( isShowing) {
            setScore(score + 1)
            setIsShowing(false)
        }
    }
        
    return isShowing ?  <Mole setIsShowing={setIsShowing} onMoleClick={onMoleClick}/> : <Empty setIsShowing={setIsShowing} />
}