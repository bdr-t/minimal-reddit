import {useState, useEffect} from 'react'
import axios from 'axios'

const MyProfile = ({name}) => {
    const [trophies, setTrophies] = useState()

    useEffect(()=>{
        async function getData(){
            const trophiesResponse = await axios.get('https://www.reddit.com/user/wakfuls/trophies.json')
            .then(res => res.data)
            setTrophies(trophiesResponse)
        }
        getData()
    },[])


    return (  
        <div>Trophies</div>
    );
}
 
export default MyProfile;