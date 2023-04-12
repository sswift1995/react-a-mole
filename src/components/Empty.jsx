import { useEffect } from "react"
import moleHill from '../embedded/molehill.png'

const RAND_DEFAULT = 5000
const RAND_MINIMUM = 2000


export default function Empty ({ setIsShowing }) {

    useEffect(() =>{
        let randMills = Math.ceil(
            Math.random() * RAND_DEFAULT + RAND_MINIMUM)
            let timer = setTimeout(() =>{
                setIsShowing(true)

            }, randMills)
            return () => clearTimeout(timer)
    });


    return(
        <div>
            <img
            style={{'width': '30vw'}}
            src={moleHill}
            />
        </div>
    )
}