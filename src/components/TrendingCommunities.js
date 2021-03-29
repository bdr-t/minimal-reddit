import axios from 'axios'
import {useState, useEffect} from 'react'
import TrenSubreddit from './TrenSubreddit'

const TrendingCommunities = () => {
    const [subreddits, setSubreddits] = useState()
    const [status, setStatus] = useState('idle')

    

    useEffect(()=>{
        const getNames = async() => {
            const subreddit_names = await axios.get('https://www.reddit.com/api/trending_subreddits.json').then(res=> res.data.subreddit_names)
            setSubreddits(subreddit_names)
            setStatus('succeded')

    
        }
        setStatus('loading')
        getNames()

    },[])

    let content = 'loading'

    if(status === 'succeded'){
        content = subreddits.map(x => <TrenSubreddit name={x}/>)
    }
    


    return ( 
        <div>{content}</div>
     );
}
 
export default TrendingCommunities;