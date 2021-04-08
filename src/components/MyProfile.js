import {useState, useEffect} from 'react'
import axios from 'axios'
import { ProfileContainer, ProfileName} from '../styledComponents'



const MyProfile = ({name}) => {
    const [data, setData] = useState()

    useEffect(()=>{
        async function getData(){
            const dataResponse = await axios.get('https://www.reddit.com/user/wakfuls/about.json')
            .then(res=> res.data.data)
            setData(dataResponse)
        }
        getData()
    },[])

    let img 
    if(data){
        img = data.snoovatar_img  
    }

    console.log(data)

    return (  
        <>
        {!data && <div className="a">'loading'</div> }
        {data && <ProfileContainer style={{width:'100%', marginTop:'50px', display:'flex'}}>
            <img height='300px' width='auto'src={data.snoovatar_img } alt=""/>
            <div className="a">
                <ProfileName>{data.subreddit.display_name_prefixed}</ProfileName>
                <div className="karam-created">
                    <h3>karma {data.total_karma}</h3>
                </div>
            </div>
         
            
        </ProfileContainer>}
        </>
    );
}
 
export default MyProfile;