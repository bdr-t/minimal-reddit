import {useEffect, useState} from 'react'
import axios from 'axios'

const TrenSubreddit = ({name}) => {
    const [subReddit, setSubreddit] = useState()

    useEffect(()=>{
        const getSubreddit = async() => {
            const data = await axios.get(`https://www.reddit.com/r/${name}/about.json`).then(res => res.data.data)
            console.log(data)
            setSubreddit(data)
        }
        getSubreddit()
    },[])


    return (
        <div>

            <p>{subReddit && subReddit.display_name_prefixed}</p>
            <p>{subReddit && subReddit.subscribers}</p>
        </div>
    );
}

export default TrenSubreddit;