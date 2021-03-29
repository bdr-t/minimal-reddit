import {useEffect, useState} from 'react'
import axios from 'axios'

const TrenSubreddit = ({name}) => {
    const [subReddit, setSubreddit] = useState()

    useEffect(()=>{
        const getSubreddit = async() => {
            const data = await axios.get(`https://www.reddit.com/r/${name}/about.json`).then(res => res.data)
            console.log(data)
        }
        getSubreddit()
    })


    return (
        <div>hola</div>
    );
}
 
export default TrenSubreddit;